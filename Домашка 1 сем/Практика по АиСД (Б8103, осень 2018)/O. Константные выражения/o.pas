
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
	TArrayString = array of String[11];
var
	exeption: TArrayString;	// Массив с выражением
	polyNot: TArrayString;	// Польская нотация

function IndexOf(const v: String; const arr: array of String): Integer;
var 
	i: Integer;
begin
	for i := Low(arr) to High(arr) do
		if arr[i] = v then exit(i);
	exit(-1);
end;

function IndexOf(const v: Char; const arr: array of Char): Integer;
var 
	i: Integer;
begin
	for i := Low(arr) to High(arr) do
		if arr[i] = v then exit(i);
	exit(-1);
end;

// Добавляет элемент в конец массива
function Push(const s: String; var arr: TArrayString): Boolean;
begin
	SetLength(arr, Length(arr) + 1);
	arr[Length(arr)-1] := s;
	exit(true);
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

function ReversePolyNot(): Boolean;
var
	operationStack: TArrayString;
	mayYnary: Boolean;
	el: String;
	operIndex: Integer;
	i: Integer;

begin
	SetLength(polyNot, 0);
	mayYnary := true;

	for i := 0 to Length(exeption) - 1 do 
	begin
		el := exeption[i];

		operIndex := IndexOf(el, OPERS);
		if operIndex = -1 then 
		begin
			mayYnary := false;
			Push(el, polyNot);
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

	
	SetLength(exeption, 0);

	exit(true);
end;


function Compute(): String;
var
	_: Extended;
	a, b, el: String;
	res: TArrayString;
	i: Integer;
begin

	for i := 0 to Length(polyNot) - 1 do 
	begin
		el := polyNot[i];
		if IndexOf(el, OPERS_BIN) <> -1 then
		begin
			a := Pop(res); 
			b := Pop(res);

			if (a = '#') or (b = '#') then
				if (el = '*') and ((a = '0') or (b = '0')) then 
					Push('0', res)
				else 
					exit('#')
			else
			begin
				if ((el = '/') and (StrToFloat(a) = 0)) then exit('#');
				case el of
					'+':	Push(FloatToStr(StrToFloat(b) + StrToFloat(a)), res);
					'-':	Push(FloatToStr(StrToFloat(b) - StrToFloat(a)), res);
					'*':	Push(FloatToStr(StrToFloat(b) * StrToFloat(a)), res);
					'/':	Push(FloatToStr(Round(StrToFloat(b)) div Round(StrToFloat(a))), res);
				end;
			end;

		end
		else if IndexOf(el, OPERS_UN) <> -1 then
		begin
			a := Pop(res);
			if (not TryStrToFloat(a, _)) then exit('#'); //ERROR yn. Expected type Number, found Sign
			Push(FloatToStr(-StrToFloat(a)), res);
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
	varNames: array of Char;
	varValues: array of Longint;
	varIsTrue: array of Boolean; 
	varIndex, i, j: Integer; 
	F: Text;
	_: Extended;
	ch: Char;
	res, el: String;
	Buf: array[0..8] of Char;
begin
	SetLength(varValues, 0);
	SetLength(varNames, 0);
	SetLength(varIsTrue, 0);


	assign(F, 'input.txt'); SetTextBuf(F, Buf); reset(F);
	i := 0;
	varIndex := -1;

	
	while not eof(F) do
	begin
		Read(F, ch);
		if (ch = #13) or (ch = #10) then continue;

		// Название переменной
		varIndex := IndexOf(ch, varNames);
		if varIndex < 0 then
		begin
			varIndex := Length(varNames);
			SetLength(varNames, Length(varNames) + 1);
			SetLength(varValues, Length(varValues) + 1);
			SetLength(varIsTrue, Length(varIsTrue) + 1);
			varIsTrue[varIndex] := true;
			varValues[varIndex] := 0;
			varNames[varIndex] := ch;
		end;
		//


		while ch <> '=' do Read(F, ch);
		
		// Разбор выражения в массив
		el := '';
		SetLength(exeption, 0);
		while true do
		begin
			Read(F, ch);
			if (ch = #13) or (ch = #10) then break;

			if ch = ' ' then continue;
			if IndexOf(ch, OPERS) <> -1 then
			begin
				if Length(el) > 0 then
				begin
					Push(el, exeption);
					el := '';	
				end;
				Push(ch, exeption);
			end
			else
				el += ch;


			if eof(F) then break;
		end;
		if Length(el) > 0 then
			Push(el, exeption);
		//



		// Подстановка переменных
		for i := 0 to Length(exeption) - 1 do
		begin
			j := IndexOf(exeption[i][1], varNames);
			if j >= 0 then
				if varIsTrue[j] then
					exeption[i] := FloatToStr(varValues[j])
				else
					exeption[i] := '#'
			else if (IndexOf(exeption[i], OPERS) = -1) and (not TryStrToFloat(exeption[i], _)) then
				exeption[i] := '0';
		end;
		//

		// Решение
		ReversePolyNot();
		res := Compute();
		if (res = '#') or (StrToFloat(res) > 2147483647) or (StrToFloat(res) < -2147483648) then
			varIsTrue[varIndex] := false
		else
		begin
			varIsTrue[varIndex] := true;
		 	varValues[varIndex] := Round(StrToFloat(res));
		end;
		//
	end;
	close(F);





	assign(output,'output.txt'); rewrite (output);
	for i := Length(varValues) - 1 downto 0 do if varIsTrue[i] then  writeln(varNames[i], ' ', varValues[i]) else writeln(varNames[i], ' #');
	close(output);



end.