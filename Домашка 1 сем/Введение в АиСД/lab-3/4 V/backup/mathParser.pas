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
						// 3 - неправильные знаки операции
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
		function Compute(): Boolean;
	public
		// Возвращает результат и код операции 
		function Eval(var x: Double; const s: String): Integer;

		//Конструктор класса:
		constructor Create();
		//Деструктор класса:
		destructor Destroy(); override;
	end;

implementation

{-TMathParser-}
{ '÷', '×', '−', '+', '^', '%', '√' }
const
	OPERS: Array[0..23] Of String =('+', '-', '*', '/', '%', '--', '-+', '#',  '^',  'sin', 'cos', 'tan', 'sinm', 'cosm', 'tanm', 'sqrt', 'log', 'ln', 'dms', 'deg', 'fact', 'neg',  '(', ')');
	POWER: Array[0..23] Of Integer=( 1,   1,   2,   2,   2,   4,    4,    3 ,   3,     5,    5  ,    5  ,   5  ,     5  ,    5  ,    5  ,   5 ,    5 ,   5  ,   5   ,   5  ,   5,   6,    0);

	
function PopI(l: TListStack): Double;
var
	d:TData;
begin
	d := l.Get();
	l.Pop();
	exit(StrToFloat(d));
end;


function fact(n: Double): Double;
begin
	if (n = 0) then
		fact := 1
	else
		fact := n * fact(n - 1);
end;
function StringInArray(const v: string; Strings: array of string): Integer;
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
		if StringInArray(exeptionString[i], OPERS) <> -1 then
		begin

			{ if errorOpersCheck then
			begin
				code := 3;
				exit(false);
			end; }


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
		operIndex := StringInArray(el, OPERS);
		if operIndex = -1  then 
		begin
			mayYnary := false;
			polyNot.Push(el);
			el := exeption.Get();
			continue;
		end;

		if mayYnary and ((el = '+') or (el = '−')) then
			el := '−' + el;


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
			if (operationStack.Get() <> '') and (operationStack.Get() <> '(') and (StringInArray(operationStack.Get(), OPERS) > 0) and (POWER[operIndex] <= POWER[StringInArray(operationStack.Get(), OPERS)]) then
			begin
				polyNot.Push(operationStack.Get());
				operationStack.Pop();
			end;

			operationStack.Push(el);
		end;
		el := exeption.Get();
	end;

	while operationStack.Get() <> '' do
	begin
		polyNot.Push(operationStack.Get());
		operationStack.Pop();
	end;

	exit(true);
end;



function TMathParser.Compute(): Boolean;
var
	el: String;
	a: Double;
	res: TListStack;
	index,i:Integer;
begin
        try
	resultNum := 0;
	res := TListStack.Create();
	while true do
	begin
		el := polyNot.Get();
		if el = '' then break;


		index := StringInArray(el, OPERS);
		if index <> -1 then 
		begin//('+', '−', '×', '÷', '%', '--', '-+', '√',  '^', 

		// sin', 'cos', 'tan', 'sinm', 'cosm', 'tanm', 'sqrt', 'log', 'ln', 'dms', 'deg', 'fact', 'neg'
			a := popI(res);
			case index of
				0: 	res.Push(FloatToStr(popI(res) + a));
				1: 	res.Push(FloatToStr(popI(res) - a));
				2: 	res.Push(FloatToStr(popI(res) * a));
				3: 	
				begin // чек Деление на 0
					if(a = 0) then
					begin
						code := 1;
						exit(false);
					end
					else
						res.Push(FloatToStr(popI(res) / a));
				end;
				4: res.Push(FloatToStr(Trunc(popI(res)) mod Trunc(a)));
				5: res.Push(FloatToStr(-a));
				6: res.Push(FloatToStr(+a));
				7: res.Push(FloatToStr(exp(ln(a) / popI(res))));
				8: res.Push(FloatToStr(exp(ln(popI(res)) * a)));

				9:  res.Push(FloatToStr(sin(a)));
				10: res.Push(FloatToStr(cos(a)));
				11: res.Push(FloatToStr(tan(a)));
				12: res.Push(FloatToStr(exp(ln(sin(a)) * -1)));
				13: res.Push(FloatToStr(exp(ln(cos(a)) * -1)));
				14: res.Push(FloatToStr(exp(ln(tan(a)) * -1)));
				15: res.Push(FloatToStr(exp(ln(a) / 2)));
				16: res.Push(FloatToStr(log10(a)));
				17: res.Push(FloatToStr(ln(a)));
				18: res.Push(FloatToStr(a));
				19: res.Push(FloatToStr(a));
				20: res.Push(FloatToStr(fact(a)));
				21: res.Push(FloatToStr(-a));
			end;
		end
		else
		begin
			// чек некорректные символы
			for i := 1 to Length(el) do
				if not (el[i] in ['0'..'9']) then
				begin
					resultNum := 0;
					code := 4;
					exit(false);
				end;
			//
			res.Push(el);
		end;
		polyNot.Pop();
	end;
	resultNum := StrToFloat(res.Get());
	exit(true);
        except
          // чек ошибки в выражении
          resultNum := 0;
          code := 4;
          exit(false);
        end;
end;


function TMathParser.Eval(var x: Double; const s: String): Integer;
begin
	exeptionString := s;
	if self.StrToExeption() and self.ReversePolyNot() and self.Compute() then
		code := 0;
	x := resultNum;
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
