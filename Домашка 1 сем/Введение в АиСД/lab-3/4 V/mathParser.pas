unit MathParser;

{$mode objfpc}
{$inline on}
interface
uses ClassStruct, Classes, SysUtils, math;


type
	TExeption = TListQueue;
	TPolyNot = TListQueue;

	TMathParser = class
	protected
	//public
		code: Integer;	// 0 - нет ошибок, 
						// 1 - деление на 0 V
						// 2 - неправильные скобки V
						// 3 - знаки операции93
						// 4 - некорректный символ

		exeptionString: String; // Строка с выражением
		exeption: TExeption; // Массив с выражением
		polyNot: TPolyNot; // Польская нотация
		resultNum: Double; // Результат операции


		// преобразует строку в массив элементов выражения
		function StrToExeption(): Boolean;
		// Приводит выражение к польской нотации
		function ReversePolyNot(): Boolean;
		// Вычисляет польскую нотацию
		function Compute(): String;
		function TryCompute(): Boolean;
	public
		// Возвращает результат и код операции 
		function Eval(var res: Double; const s: String): Integer;


		//Конструктор класса:
		constructor Create();
		//Деструктор класса:
		destructor Destroy(); override;
	end;

implementation

{-TMathParser-}
{ '÷', '×', '−', '+', '^', '%', '√' }
const
	OPERS_BIN: array[0..6] of String = ('+', '-', '*', '/', '%', '^', '#');
	OPERS_UN: array[0..13] of String = ('abs', 'sin', 'cos', 'tan', 'sinm', 'cosm', 'tanm', 'sqrt', 'log', 'ln', 'dms', 'deg', 'fact', 'neg');
	
	OPERS: array[0..22] of String = (
		'(', ')',
		'+', '-', '*', '/', '%', '^', '#',
		'abs', 'sin', 'cos', 'tan', 'sinm', 'cosm', 'tanm', 'sqrt', 'log', 'ln', 'dms', 'deg', 'fact', 'neg');
	POWER: array[0..22] of Byte = (
		6,   0,
		  1,   1,   2,   2,   2,   3,   3, 
		    5,     5,     5,     5,      5,      5,      5,      5,     5,    5,     5,     5,      5,     5);


function fact(n: Double): Double;
begin
	if (n = 0) then
		fact := 1
	else
		fact := n * fact(n - 1);
end;

function IndexOf(const v: string; Strings: array of string): Integer;
var 
	i: Integer;
begin
	for i := Low(Strings) to High(Strings) do
		if Strings[i] = v then exit(i);
	exit(-1);
end;

function TMathParser.StrToExeption(): Boolean;
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
				exeption.Push(el);
				el := ''; 	
			end;
			exeption.Push(exeptionString[i]);
		end
		else
		begin
			el += exeptionString[i];
		end;
	end;
	if Length(el) > 0 then
		exeption.Push(el);

	if skobkiCheck <> 0 then
	begin
		code := 2;
		exit(false);
	end;
	exit(true);
end;


function TMathParser.ReversePolyNot(): Boolean;
var
	operationStack: TListStack;
	mayYnary: Boolean;
	el: String;
	operIndex: Integer;

begin
	mayYnary := true;
	operationStack := TListStack.Create();

	el := exeption.Get();
	while exeption.Pop() do
	begin
		operIndex := IndexOf(el, OPERS);
		if operIndex = -1  then 
		begin
			mayYnary := false;
			polyNot.Push(el);
			el := exeption.Get();
			continue;
		end;

		if mayYnary and (el = '-') then begin
			el := 'neg';
			operIndex := IndexOf(el, OPERS);
		end;


		if el = ')' then
		begin
			mayYnary := false;
			while operationStack.Get() <> '(' do
			begin
				polyNot.Push(operationStack.Get());
				operationStack.Pop();
			end;
			operationStack.Pop();
		end
		else
		begin
			mayYnary := true;
			if (operationStack.size > 0) and (operationStack.Get() <> '(') and (IndexOf(operationStack.Get(), OPERS) > 0) and (POWER[operIndex] <= POWER[IndexOf(operationStack.Get(), OPERS)]) then
			begin
				polyNot.Push(operationStack.Get());
				operationStack.Pop();
			end;

			operationStack.Push(el);
		end;
		el := exeption.Get();

	end;

	while operationStack.size > 0 do
	begin
		polyNot.Push(operationStack.get());
		operationStack.pop();
	end;

	exit(true);
end;


function TMathParser.Compute(): String;
var
	_: Extended;
	a, b, el: String;
	res: TListStack;
begin
	res := TListStack.Create();
	while polyNot.size > 0 do
	begin
		el := polyNot.get(); polyNot.pop();
		if IndexOf(el, OPERS_BIN) <> -1 then
		begin
			if res.size < 2 then exit('ERROR bin. out of range');
			a := res.get(); res.pop(); 
			b := res.get(); res.pop();
			if (not TryStrToFloat(a, _)) or (not TryStrToFloat(b, _)) then exit('ERROR bin. Expected type Numbers, found Sign(s)');
			if ((el = '/') and (StrToFloat(a) = 0)) or ((el = '#') and (StrToFloat(b) = 0)) or ((el = '%') and (Trunc(StrToFloat(a)) = 0)) then exit('ERROR bin. Zero Division');


			if ((el = '^') and (b = '0')) or ((el = '#') and (a = '0')) then
			begin
				res.push('0');
				continue;
			end;

			if (el = '#') and (StrToFloat(a) < 0) and (Trunc(StrToFloat(b)) mod 2 = 1) then
			begin
				res.push(FloatToStr(-exp(ln(-StrToFloat(a)) / StrToFloat(b))));
				continue;
			end;

			try
				case el of
					'+':	res.push(FloatToStr(StrToFloat(b) + StrToFloat(a)));
					'-':	res.push(FloatToStr(StrToFloat(b) - StrToFloat(a)));
					'*':	res.push(FloatToStr(StrToFloat(b) * StrToFloat(a)));
					'/':	res.push(FloatToStr(StrToFloat(b) / StrToFloat(a)));
					'%':	res.push(FloatToStr(Trunc(StrToFloat(b)) mod Trunc(StrToFloat(a))));
					'^':	res.push(FloatToStr(exp(ln(StrToFloat(b)) * StrToFloat(a))));
					'#':	res.push(FloatToStr(exp(ln(StrToFloat(a)) / StrToFloat(b))));
				end;
			except
				begin
					exit('ERROR Result undefined');
				end;
			end;

		end
		else if IndexOf(el, OPERS_UN) <> -1 then
		begin
			if res.size < 1 then exit('ERROR yn. out of range');
			a := res.get(); res.pop();
			if (not TryStrToFloat(a, _)) then exit('ERROR yn. Expected type Number, found Sign');
			if ((el = 'ln') and (a = '0')) or ((el = 'ln') and (a = '0')) then exit('ERROR Result undefined');

			try
				case el of
					'abs':	res.push(FloatToStr(abs(StrToFloat(a))));
					'sin':	res.push(FloatToStr(sin(StrToFloat(a))));
					'cos':	res.push(FloatToStr(cos(StrToFloat(a))));
					'tan':	res.push(FloatToStr(tan(StrToFloat(a))));
					'sinm':	res.push(FloatToStr(exp(ln(sin(StrToFloat(a))) * -1)));
					'cosm':	res.push(FloatToStr(exp(ln(cos(StrToFloat(a))) * -1)));
					'tanm':	res.push(FloatToStr(exp(ln(tan(StrToFloat(a))) * -1)));
					'sqrt':	res.push(FloatToStr(sqrt(StrToFloat(a))));
					'log':	res.push(FloatToStr(log10(StrToFloat(a))));
					'ln':	res.push(FloatToStr(ln(StrToFloat(a))));
					'dms':	res.push(FloatToStr(StrToFloat(a)));
					'deg':	res.push(FloatToStr(StrToFloat(a)));
					'fact':	res.push(FloatToStr(fact(StrToFloat(a))));
					'neg':	res.push(FloatToStr(-StrToFloat(a)));
				end;
			except
				begin
					exit('ERROR Result undefined');
				end;
			end;
		end
		else if TryStrToFloat(el, _) then
			res.push(el)
		else
			exit('ERROR Unknown symbol');
	end;

	if res.size > 1 then 
		exit('ERROR excess numbers');

	exit(res.get());
end;



function TMathParser.TryCompute(): Boolean;
var
	res: String;
begin
	res := self.Compute();
	case res of
		'ERROR bin. out of range': code := 3;
		'ERROR bin. Expected type Numbers, found Sign(s)': code := 3;
		'ERROR bin. Zero Division': code := 1;
		'ERROR yn. out of range': code := 3;
		'ERROR yn. Expected type Number, found Sign': code := 3;
		'ERROR excess numbers': code := 3;
		'ERROR Result undefined': code := 1;
		'ERROR Unknown symbol': code := 4;
	else
		resultNum := StrToFloat(res);
		code := 0;
	end;

	exit(code = 0);
end;




function TMathParser.Eval(var res: Double; const s: String): Integer;
begin
	exeption := TExeption.Create();
	polyNot := TPolyNot.Create();
	resultNum := 0;

	exeptionString := s;
	if self.StrToExeption() and self.ReversePolyNot() and self.TryCompute() then
		code := 0;
	res := resultNum;
	exit(code);
end;


constructor TMathParser.Create();
begin
	exeption := TExeption.Create();
	polyNot := TPolyNot.Create();
	exeptionString := '';
	resultNum := 0;
end;

destructor TMathParser.Destroy();
begin
	exeption.Destroy();
	polyNot.Destroy();
end;
	
end.
