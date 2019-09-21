unit Unit1;

{$mode objfpc}{$H+}

interface

uses
	Classes, SysUtils, Forms, Controls, Graphics, Dialogs, StdCtrls, MathParser;

type

	{ TForm1 }

	TForm1 = class(TForm)
		Button1, Button2, Button3, Button4, Button5, Button6, Button7, Button8, Button9, Button10, Button11, Button12, Button13, Button14, Button15, Button16, Button17, Button18, Button19, Button20, Button21, Button22, Button23, Button24, Button25, Button26, Button27, Button28, Button29, Button30, Button31, Button32, Button33, Button34, Button35, Button36, Button37, Button38, Button39, Button40, Button41, Button42, Button43, Button44, Button45, Button46, Button47, Button48, Button49, Button50: TButton;
		Label1, Label2, Label3: TLabel;
		procedure AcceptInput();
		procedure AddBracket(bracketType: Integer);
		procedure AddChair(num: Integer);
		procedure AddPoint();
		procedure AddToExpression(oper: String; changeLast: Boolean);
		procedure ButtonClick(Sender: TObject);
		procedure ClearClick(all: Boolean);
		procedure ConstClick(constId:Integer);
		procedure DeleteClick();
		procedure EquvClick();
		procedure FormCreate(Sender: TObject);
		procedure FunClick(funId:Integer);
		procedure MacrosClick(macrosId:Integer);
		procedure MemClick(memOper:Integer);
		procedure MoveTheExpression();
		procedure OperatorClick(oper: Integer);
		procedure UpdateExpPreview();
		procedure FormKeyDown(Sender: TObject; var Key: Word; Shift: TShiftState);

	private

	public

	end;

const
	BINOPERS: array[0..6] of String = ('/', '*', '-', '+', '^', '%', '#');

var
	Form1: TForm1;
	memory: Double;
	inputNum: Double; // все операции с этим
	inputStr: String; // Строка для ввода
	isPoint: Boolean; // Есть ли точка в поле ввода
	expression: array of String; // Массив операций например '(', '-', '1,245', '+', '145', ')'
	lastType: Integer; // последнее действие
	// 0 операция
	// 1 ввод в поле
	// 2 скобка или функция или макрос
	// 3 равно
	// 4 ошибка

implementation

{$R *.lfm}

{ TForm1 }

procedure TForm1.FormCreate(Sender: TObject);
begin
	Form1.ClearClick(true);
	//Form1.button45.SetFocus;
end;


procedure TForm1.AcceptInput();
begin
	 inputNum := StrToFloat(inputStr);
end;

procedure TForm1.AddToExpression(oper: String; changeLast: Boolean); // Добавляет к выражению новую операцию или изменяет старую
begin
	if not (changeLast and (Length(expression) > 0)) then
		SetLength(expression,Length(expression)+1);
	expression[Length(expression)-1] := oper;
end;

procedure TForm1.UpdateExpPreview();
var
	i: Integer;
begin
	Label3.Caption := '';
	for i := 0 to Length(expression)-1 do
		Label3.Caption := Label3.Caption + expression[i] + ' ';
end;

procedure TForm1.ButtonClick(Sender: TObject);
var
	tagbut: Integer;
begin
	Form1.button45.SetFocus;
	Form1.UpdateExpPreview();
	tagbut := (Sender as TButton).Tag;
	case tagbut of
		0..9: Form1.AddChair(tagbut);
		10: Form1.AddPoint();
		11..17: Form1.OperatorClick(tagbut - 11);
		18..30: Form1.FunClick(tagbut - 18);
		31..32: Form1.AddBracket(tagbut - 31);
		33..37: Form1.MacrosClick(tagbut - 33);
		38: Form1.ConstClick(tagbut - 38);
		39..43: Form1.MemClick(tagbut - 39);
		44..45: Form1.ClearClick(tagbut = 45);
		46: Form1.DeleteClick();
		47: Form1.EquvClick();
	end;
end;
procedure TForm1.FormKeyDown(Sender: TObject; var Key: Word; Shift: TShiftState);
begin
	Form1.button45.SetFocus;
	if NOT (ssShift in Shift) then
		case Key of
			8: Form1.DeleteClick();
			13: 
			begin
				//Form1.EquvClick();
				Form1.button45.SetFocus;
			end;
			48..57: Form1.AddChair(Key-48); // строка цифр
			96..105: Form1.AddChair(Key-96); // numpad
			110: Form1.AddPoint();
			188: Form1.AddPoint();
			189: Form1.OperatorClick(2); // -
			190: Form1.AddPoint();
			191: Form1.OperatorClick(0); // /

		end
	else
		case Key of
			48: Form1.AddBracket(1); // )
			54: Form1.OperatorClick(4); // ^
			56: Form1.OperatorClick(1); // *
			57: Form1.AddBracket(0); // (
			187: Form1.OperatorClick(3); // +
		end;
end;
//  0 1 2 3 4 5 6 7 8 9 , : ввод 0..10
//  ÷ × − + ^ % √ : бинарные операторы 11..17
// 25 √ 2 = 5

//   18  19  20  21   22   23   24   25  26 27 28   29    30
//  sin cos tan sinm cosm tanm sqrt log ln dms deg fact neg : унарные операторы 18..30
//  31 32
//  (   ) : скобки
// 33   34  35   36  37
// x^2 x^3 10^x 1/x e^x : Макросы
// 38
// Pi :Константы
// 39  40  41  42   43
// mc  mr  m+  m-   ms  :Память



procedure TForm1.AddChair(num: Integer); // добавляет символ в поле ввода
begin
	if (lastType <> 1) then // если последний был не ввод, стирает и начинает заного
		Form1.ClearClick(false);
	if inputStr.Length > 14 then  // Не может быть больше 14 символов
		exit;
	if num = -1 then 
		exit;

	if (Length(inputStr) = 1) and (inputStr[1] = '0') then
		inputStr := FloatToStr(num)
	else
		inputStr += FloatToStr(num);

	Form1.AcceptInput();
	Label1.Caption := inputStr;
	lastType := 1;
end;


procedure TForm1.AddBracket(bracketType: Integer); // добавить скобку
begin
	Form1.MoveTheExpression();
	Form1.ClearClick(false);

	case bracketType of
		0: Form1.AddToExpression('(', false);
		1: Form1.AddToExpression(')', false);
	end;

	Form1.UpdateExpPreview();
	lastType := 2;
end;

procedure TForm1.AddPoint(); // добавляет точку в поле ввода
begin
	if NOT isPoint then
	begin
		Form1.AddChair(-1);
		inputStr += ',';
		Label1.Caption := inputStr;
		isPoint := true;
		lastType := 1;
	end;
end;


procedure TForm1.EquvClick(); // равно
var
	parser: TMathParser;
	s: String;
	result: Double;
	code, i: Integer;
begin
	result := 0;
	code := 0;
	Form1.MoveTheExpression();
	Form1.UpdateExpPreview();
	s := Label3.Caption;
	if s = '' then exit;
	Form1.ClearClick(true);

	parser := TMathParser.Create();
	code := parser.Eval(result, s);
	
	if(code <> 0) then
	begin
		Label3.Caption := 'Error ' + FloatToStr(code);
		lastType := 4;
	end
	else
	begin
		inputStr := FloatToStr(result);
		for i := 1 to Length(inputStr) do if inputStr[i] = ',' then isPoint := true;
		Form1.AcceptInput();
		Label1.Caption := inputStr;
		lastType := 3;
	end;
end;


procedure TForm1.MoveTheExpression(); // Если есть ввод, переносит его в expression
begin
	if (lastType = 1) or (lastType = 3) then Form1.AddToExpression(FloatToStr(inputNum), false);
end;

procedure TForm1.OperatorClick(oper: Integer); // Устанавливает оператор
begin
	Form1.MoveTheExpression();

	Form1.AddToExpression(BINOPERS[oper], lastType = 0); // заменяет если прошлый оператор
	Form1.UpdateExpPreview();
	lastType := 0;
end;

procedure TForm1.ClearClick(all: Boolean);// false очищает только поле ввода
begin
	isPoint := false;
	inputStr := '0';
	Form1.AcceptInput();
	Label1.Caption := inputStr;

	if all then
	begin
		SetLength(expression, 0);
		Form1.UpdateExpPreview();
		lastType := -1;
	end;
end;

procedure TForm1.DeleteClick();// стирает последний символ
begin
	if Length(inputStr) = 1 then
		inputStr := '0'
	else
	begin
		if inputStr[inputStr.Length] = ',' then
			isPoint := false;
		Delete(inputStr, Length(inputStr), 1);
		if inputStr = '-' then inputStr := '0';
	end;
	Form1.AcceptInput();
	Label1.Caption := inputStr;
end;

const
	UNARFUNS: array[0..12] of String = ('sin', 'cos', 'tan', 'sinm', 'cosm', 'tanm', 'sqrt', 'log', 'ln', 'dms', 'deg', 'fact', 'neg');

procedure TForm1.FunClick(funId:Integer);
begin
	if (lastType = 1) and (funId = 12) then
	begin
		if inputStr[1] = '-' then
			Delete(inputStr, 1, 1)
		else
			inputStr := '-'+ inputStr;
		Form1.AcceptInput();
		Label1.Caption := inputStr;
		exit;
	end;

	Form1.AddToExpression(UNARFUNS[funId], false);
	Form1.AddToExpression('(', false);
	Form1.UpdateExpPreview();

end;

procedure TForm1.MemClick(memOper:Integer);
begin
	case memOper of
	0: memory := 0;
	1:
	begin
		inputStr := FloatToStr(memory);
		Form1.AcceptInput();
		Label1.Caption := inputStr;
		lastType := 1;
	end;
	2: memory += inputNum;
	3: memory -= inputNum;
	4: memory := inputNum;
	end;


end;

// 0   1    2    3   4
// x^2 x^3 10^x 1/x e^x : Макросы
procedure TForm1.MacrosClick(macrosId:Integer);// применяет макрос
begin
	case macrosId of
	0:
	begin
		Form1.MoveTheExpression();
		Form1.AddToExpression('^', false);
		Form1.AddToExpression('2', false);
	end;
	1:
	begin
		Form1.MoveTheExpression();
		Form1.AddToExpression('^', false);
		Form1.AddToExpression('3', false);
	end;
	2:
	begin
		Form1.AddToExpression('10', false);
		Form1.AddToExpression('^', false);
		Form1.MoveTheExpression();
	end;
	3:
	begin
		Form1.AddToExpression('1', false);
		Form1.AddToExpression('/', false);
		Form1.MoveTheExpression();
	end;
	4:
	begin
		Form1.AddToExpression('2,7182818284', false);
		Form1.AddToExpression('^', false);
		Form1.MoveTheExpression();
	end;
	end;
	Form1.UpdateExpPreview();
	lastType := -1;
end;

procedure TForm1.ConstClick(constId:Integer);// устанавливает константу в поле ввода
begin
	case constId of
		0: Form1.AddToExpression('3,1415926535', false);
	end;

	Form1.UpdateExpPreview();
	lastType := -1;
end;

end.