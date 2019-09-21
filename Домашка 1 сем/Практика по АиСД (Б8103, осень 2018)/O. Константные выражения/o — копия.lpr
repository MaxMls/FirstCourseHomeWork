
uses Classes, SysUtils, math;
const
	OPERS_BIN: array[0..3] of String = ('+', '-', '*', '/');
	OPERS_UN: array[0..0] of String = ('neg');
	
	OPERS: array[0..6] of String = (
		'(', ')',
		'+', '-', '*', '/', 
		'neg');
	POWER: array[0..6] of Byte = (
		6,   0,
		1,   1,   2,   2,   
		5);

type
	TArrayString = array of String;
var
	code: Integer;	// 0 - нет ошибок, 
					// 1 - деление на 0 V
					// 2 - неправильные скобки V
					// 3 - знаки операции
					// 4 - некорректный символ

	exeptionString: String;	// Строка с выражением
	exeption: TArrayString;	// Массив с выражением
	polyNot: TArrayString;	// Польская нотация
	resultNum: Double;		// Результат операции


function IndexOf(const v: String; const arr: array of String): Integer;
var 
	i: Integer;
begin
	for i := Low(arr) to High(arr) do
		if arr[i] = v then exit(i);
	exit(-1);
end;

function str_replace(search, replace, s: String): String;
var
	p: QWord;
begin
	while pos(search, s) > 0 do
	begin
		p := pos(search, s);
		delete(s, p, Length(search));
		insert(replace, s, p);
	end;
	exit(s);
end;

// Добавляет элемент в конец массива
function Push(const s: String; var arr: TArrayString): Boolean;
begin
	SetLength(arr, Length(arr) + 1);
	arr[Length(arr)-1] := s;
	exit(true);
end;

// Переворачивает массив
function Reverse(var arr: TArrayString): TArrayString;
var
	i: Integer;
	out: TArrayString;
begin
	SetLength(out, Length(arr));
	for i := 0 to Length(arr) - 1 do
		out[i] := arr[Length(arr) - i - 1];

	exit(out);
end;

// Возвращает и удаляет последний элемент массива
function Pop(var arr: TArrayString): String;
var
	out: String;
begin
	if Length(arr) = 0 then exit('');
	out := arr[Length(arr)-1];
	SetLength(arr, Length(arr) - 1);
	exit(out);
end;

// Возвращает последний элемент массива
function Get(var arr: TArrayString): String;
begin
	if Length(arr) = 0 then exit('');
	exit(arr[Length(arr)-1]);
end;


function StrToExeption(): Boolean;
var
	el: String;
	i: Integer;
	skobkiCheck: Integer;
	errorOpersCheck: Boolean;
begin
	errorOpersCheck := false;
	skobkiCheck := 0;
	el := '';
	for i := 1 to Length(exeptionString) do
	begin
		// Скобки
		if exeptionString[i] = '(' then skobkiCheck += 1
		else if exeptionString[i] = ')' then
		begin
			skobkiCheck -= 1;
			if skobkiCheck < 0 then
			begin
				code := 2;
				exit(false);
			end;
		end;
		if exeptionString[i] = ' ' then continue;
		if IndexOf(exeptionString[i], OPERS) <> -1 then
		begin
			if Length(el) > 0 then
			begin
				Push(el, exeption);
				el := ''; 	
			end;
			Push(exeptionString[i], exeption);
		end
		else
		begin
			el += exeptionString[i];
		end;
	end;
	if Length(el) > 0 then
		Push(el, exeption);

	if skobkiCheck <> 0 then
	begin
		code := 2;
		exit(false);
	end;

	exit(true);
end;

function ReversePolyNot(): Boolean;
var
	operationStack: TArrayString;
	mayYnary: Boolean;
	el: String;
	operIndex: Integer;

begin
	mayYnary := true;
	exeption := Reverse(exeption);

	while Length(exeption) > 0 do
	begin
		el := Pop(exeption);

		operIndex := IndexOf(el, OPERS);
		if operIndex = -1  then 
		begin
			mayYnary := false;
			Push(el, polyNot);
			el := Get(exeption);
			continue;
		end;

		if mayYnary and (el = '-') then begin
			el := 'neg';
			operIndex := IndexOf(el, OPERS);
		end;


		if el = ')' then
		begin
			mayYnary := false;
			while Get(operationStack) <> '(' do
				Push(Pop(operationStack), polyNot);
			Pop(operationStack);
		end
		else
		begin
			mayYnary := true;
			if (Length(operationStack) > 0) and (Get(operationStack) <> '(') and (IndexOf(Get(operationStack), OPERS) >= 0) and (POWER[operIndex] <= POWER[IndexOf(Get(operationStack), OPERS)]) then
				Push(Pop(operationStack), polyNot);

			Push(el, operationStack);
		end;
	end;

	while Length(operationStack) > 0 do
		Push(Pop(operationStack), polyNot);

	polyNot := Reverse(polyNot);

	exit(true);
end;


function Compute(): String;
var
	_: Extended;
	a, b, el: String;
	res: TArrayString;
begin
	while Length(polyNot) > 0 do
	begin
		el := Pop(polyNot);
		if IndexOf(el, OPERS_BIN) <> -1 then
		begin
			if Length(res) < 2 then exit('ERROR bin. out of range');
			a := Pop(res); 
			b := Pop(res);
			


			if (a = '#') or (b = '#') then
				if (el = '*') and ((a = '0') or (b = '0')) then 
					Push('0', res)
				else 
					exit('#')
			else
				if (not TryStrToFloat(a, _)) or (not TryStrToFloat(b, _)) then exit('ERROR bin. Expected type Numbers, found Sign(s)');
				if ((el = '/') and (StrToFloat(a) = 0)) then exit('#');
				case el of
					'+':	Push(FloatToStr(StrToFloat(b) + StrToFloat(a)), res);
					'-':	Push(FloatToStr(StrToFloat(b) - StrToFloat(a)), res);
					'*':	Push(FloatToStr(StrToFloat(b) * StrToFloat(a)), res);
					'/':	Push(FloatToStr(StrToFloat(b) / StrToFloat(a)), res);
				end;



		end
		else if IndexOf(el, OPERS_UN) <> -1 then
		begin
			if Length(res) < 1 then exit('ERROR yn. out of range');
			a := Pop(res);
			if (not TryStrToFloat(a, _)) then exit('ERROR yn. Expected type Number, found Sign');

			try
				case el of
					'neg':	Push(FloatToStr(-StrToFloat(a)), res);
				end;
			except
				begin
					exit('ERROR Result undefined');
				end;
			end;
		end
		else if TryStrToFloat(el, _) or (el = '#') then
			Push(el, res)
		else
		begin
			exit('ERROR Unknown symbol');
		end
	end;

	if Length(res) > 1 then 
		exit('ERROR excess numbers');

	exit(Get(res));
end;









var
	varNames: array of String;
	varValues: array of String; 
	varIndex: Integer; 
	F: Text;
	i: Integer;
	res: String;
	_: Extended;
	ch: Char;
begin


	assign(F,'input.txt'); reset(F);// 
	i := 0;
	varIndex := -1;
	exeptionString := '';
	while true do
	begin
		Read(F, ch);
		if ch = ' ' then continue; 

		if (ch = #13) or (ch = #10) or (varIndex = -1) or eof(F) then 
		begin
			if eof(F) then exeptionString += ch;

			if varIndex <> -1 then
			begin
				StrToExeption();
				// Вставить значения переменных
				for i := 0 to Length(exeption) - 1 do
					if IndexOf(exeption[i], varNames) >= 0 then
						exeption[i] := varValues[IndexOf(exeption[i], varNames)]
					else if (IndexOf(exeption[i], OPERS) = -1) and (not TryStrToFloat(exeption[i], _)) then
						exeption[i] := '0';
				ReversePolyNot();
			 	varValues[varIndex] := Compute();
			end;

			if eof(F) then break;

			while (ch = #13) or (ch = #10) do Read(F, ch);

			varIndex := IndexOf(ch, varNames);
			if varIndex < 0 then
			begin
				varIndex := Length(varNames);
				SetLength(varNames, Length(varNames) + 1);
				SetLength(varValues, Length(varValues) + 1);
				varNames[varIndex] := ch;
			end;
			while ch <> '=' do Read(F, ch);
			exeptionString := '';
		end;
		
		if ch = '=' then continue;
		exeptionString += ch;
	end;
	close(F);




	for i := 0 to Length(varValues) - 1 do
		writeln(varNames[i], ' ', varValues[i]);


	






end.