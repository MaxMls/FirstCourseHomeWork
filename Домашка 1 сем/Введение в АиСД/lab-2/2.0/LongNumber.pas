//Данный модуль содержит набор функций/процедур для работы с большими числами в q-ичной системе счисления:
unit LongNumber;

{$mode objfpc}

interface
uses
	SysUtils;
const
	MIN_BASE = 2; MAX_BASE = 36; BASE = 4294967296;//2^32 or 10^9,  1 000 000 000 миллиард
	//BASE = 10;
	// 4294967295 - максимальное число в ячейке

type
	//Тип длинного целого:
	TLongNumber = record
		dig: array of QWord;	//Буфер, хранящий в себе цифры числа;
		inv: boolean;		//Знак числа: (+) true, (-) false;
	end;

	TBase = MIN_BASE..MAX_BASE;

	//Формирует длинное число на основе его строкового представления в заданной системе счисления:
	function fromString(const str: AnsiString; fromBase: TBase): TLongNumber;

	//Формирует строковое представление длинного числа в заданной системе счисления:
	function toString(const val: TLongNumber; toBase: TBase): AnsiString;

	//Копирует число в новый участок памяти:
	function copy(const val: TLongNumber): TLongNumber;

	//Присваивает длинному числу значение короткого:
	operator:= (val: int64) res: TLongNumber;

	//Деление длинного на короткое (возвращает целую часть, в последний аргумент записывает остаток):
	function divmod(const lhs: TLongNumber; rhs: int32; out rem: QWord): TLongNumber;
	//Удаление ведущих нулей
	procedure clearZeros(var val: TLongNumber);
	// Вывести на экран число
	procedure show(const val: TLongNumber);
	//Деление длинного на короткое (возвращает целую часть):
	operator / (const lhs: TLongNumber; rhs: int32) ans: TLongNumber;
	//Умножение длинного на короткое:
	operator * (const lhs: TLongNumber; rhs: int32) ans: TLongNumber;
	//Умножение короткого на длинное:
	operator * (lhs: int32; const rhs: TLongNumber) ans: TLongNumber;
	//Умножение длинных чисел:
	operator * (const lhs, rhs: TLongNumber) ans: TLongNumber;
	//Сложение длинных чисел:
	operator + (const lhs, rhs: TLongNumber) ans: TLongNumber;
	//Разность длинных чисел:
	operator - (const lhs, rhs: TLongNumber) ans: TLongNumber;
	//Унарный минус:
	operator - (const val: TLongNumber) ans: TLongNumber;

	//Меньше либо равно:
	operator <= (const lhs, rhs: TLongNumber) ans: boolean;
	//Больше либо равно:
	operator >= (const lhs, rhs: TLongNumber) ans: boolean;
	//Не равно:
	operator <> (const lhs, rhs: TLongNumber) ans: boolean;
	//Меньше:
	operator < (const lhs, rhs: TLongNumber) ans: boolean;
	//Больше:
	operator > (const lhs, rhs: TLongNumber) ans: boolean;
	//Равно:
	operator = (const lhs, rhs: TLongNumber) ans: boolean;

implementation

function charToInt(const s: Char): QWord;
begin
	if (ord(s) >= ord('0')) AND (ord(s) <= ord('9')) then exit(ord(s) - ord('0'));
	if (ord(s) >= ord('A')) AND (ord(s) <= ord('Z')) then exit(ord(s) - ord('A') + 10);
	if (ord(s) >= ord('a')) AND (ord(s) <= ord('z')) then exit(ord(s) - ord('a') + 10);
end;

function intToChar(const i: Integer): String;
begin
	if (i < 10) then exit(Char(ord('0') + i));
	if (i < 36) then exit(Char(ord('A') + i-10));
	if (i < 62) then exit(Char(ord('a') + i-36));
end;

procedure show(const val: TLongNumber);
var
	i: Integer;
begin
	for i := Length(val.dig) - 1 downto 0 do write(inttostr(val.dig[i])+ ' '); writeln();	
end;

function fromString(const str: AnsiString; fromBase: TBase): TLongNumber;
var
	res: TLongNumber;
	c: QWord;
	i: Integer;
	d: Boolean;
begin
	res := 0;
	res.inv := true;
	i := 1;
	d := true;
	if (Length(str) > 0) AND (str[i] in ['+', '-']) then
	begin
		d := str[i] = '+';
		i := 2;
	end;
	for i := i to length(str) do
	begin
		c := charToInt(str[i]);
		res := res * fromBase + c;
	end;
	res.inv := d;
	exit(res);
end;

function toString(const val: TLongNumber; toBase: TBase): AnsiString;
var
	res: AnsiString;
	ost: QWord;
	num: TLongNumber;
begin
	res := '';
	if val = 0 then exit('0');
	num := val;
	
	while num <> 0 do 
	begin
		num := divmod(num, toBase, ost);
		res := intToChar(ost) + res;
	end;



	if NOT num.inv then res := '-' + res;
	exit(res);
end;

function copy(const val: TLongNumber): TLongNumber;
var
	res: TLongNumber;
	i: Integer;
begin
	res := val; res.dig := nil;
	SetLength(res.dig, Length(val.dig));

	for i := 0 to Length(val.dig) do res.dig[i] := val.dig[i];

	exit(res);
end;

operator := (val: int64) res: TLongNumber;
begin
	res.inv := val >= 0;
	SetLength(res.dig, 1);
	res.dig[0] := abs(val);
	exit(res);
end;

function divmod(const lhs: TLongNumber; rhs: int32; out rem: QWord): TLongNumber;
var
	res: TLongNumber;
	cur: QWord;
	i: Integer;
begin
	res := lhs;

	if rhs < 0 then res.inv := NOT res.inv;
	rhs := abs(rhs);

	rem := 0;
	for i := Length(res.dig) - 1 downto 0 do
	begin
		cur := res.dig[i] + rem * BASE;
		res.dig[i] := cur div rhs;
		rem := cur mod rhs;
	end;
	clearZeros(res);
	exit(res);
end;


procedure clearZeros(var val: TLongNumber);
var
	i: Integer;
begin
	// Очистить ведущие нули
	for i := length(val.dig)-1 downto 0 do
	begin
		if val.dig[i] <> 0 then
		begin
			SetLength(val.dig, i + 1);
			break;
		end;
	end;
	if (length(val.dig) > 1) AND (val.dig[length(val.dig)-1] = 0) then val := 0;
end;

operator / (const lhs: TLongNumber; rhs: int32) ans: TLongNumber;
var 
	ost: QWord;
begin
	exit(divmod(lhs, rhs, ost));
end;

operator * (const lhs: TLongNumber; rhs: int32) ans: TLongNumber;
var
	i: Integer;
	ym, c: QWord;
	res: TLongNumber;
begin
	res := 0;

	if rhs < 0 then res.inv := NOT res.inv;
	rhs := abs(rhs);

	ym := 0;
	SetLength(res.dig, Length(lhs.dig));
	for i := 0 to Length(lhs.dig)-1 do
	begin
		c := lhs.dig[i] * rhs + ym;
		ym := c div BASE;
		res.dig[i] := c mod BASE;
	end;
	if ym <> 0 then
	begin
		SetLength(res.dig, Length(lhs.dig) + 1);
		res.dig[i + 1] := ym;
	end;
	exit(res);
end;


operator * (lhs: int32; const rhs: TLongNumber) ans: TLongNumber;
begin
	exit(rhs * lhs);
end;

operator * (const lhs, rhs: TLongNumber) ans: TLongNumber;
var
	i,j: Integer;
	ym: QWord;
	res, re: TLongNumber;
begin
	res := 0;

	res.inv := lhs.inv = rhs.inv;

	ym := 0;
	re := 0;

	for i := 0 to Length(rhs.dig) - 1 do
	begin
		re := lhs * rhs.dig[i];
		for j := 0 to Length(re.dig) - 1 do
		begin
			SetLength(res.dig, j + i + 1);
			res.dig[j + i] += re.dig[j];
			ym := res.dig[j + i] div BASE;
			if(ym <> 0) then
			begin
				SetLength(res.dig, j + i + 2);
				res.dig[j + i + 1] += ym;
			end;
			res.dig[j + i] := res.dig[j + i] mod base;
		end;
	end;	
	exit(res);
end;

operator + (const lhs, rhs: TLongNumber) ans: TLongNumber;
var
	i, ym, a, b, c, vr: QWord;
	res: TLongNumber;
begin


	//a + -b = (a) - (-b)

	if lhs.inv AND (NOT rhs.inv) then exit(lhs - (-rhs));
	if (NOT lhs.inv) AND rhs.inv then exit(rhs - (-lhs));
	if (NOT lhs.inv) AND (NOT rhs.inv) then exit(-((-rhs) + (-lhs)));


	res := 0;
	ym := 0;
	i := 0;
	while true do
	begin
		a := 0;
		b := 0;
		if i < length(lhs.dig) then
			a := lhs.dig[i];
		if i < length(rhs.dig) then
			b := rhs.dig[i];
		b += ym;
		c := a + b;
		vr := c mod BASE;
		ym := c div BASE;

		if (vr = 0) AND (i >= length(lhs.dig)) AND (i >= length(rhs.dig)) then
			break;
		
		SetLength(res.dig, i + 1);
		res.dig[i] := vr;
		
		i += 1;
	end;
	exit(res);
end;

operator - (const lhs, rhs: TLongNumber) ans: TLongNumber;
var
	i: Integer;
	vo: QWord;
	res, l, r: TLongNumber;
	dig: Boolean;
begin
	res := lhs;
 
	if lhs < rhs then exit(-(rhs - lhs));
	if (NOT lhs.inv) AND rhs.inv then exit(-((-lhs) + rhs));
	if lhs.inv AND (NOT rhs.inv) then exit(lhs + (-rhs));
	if (NOT lhs.inv) AND (NOT rhs.inv) then exit((-rhs) - (-lhs));

	vo := 0;
	i := 0;

	while true do
	begin
		if (i >= length(rhs.dig)) and (vo = 0) then break;

		if i < length(rhs.dig) then
			res.dig[i] -= vo  + rhs.dig[i]
		else
			res.dig[i] -= vo;


	 	if res.dig[i] < 0 then
	 	begin
	 		vo := 1;
	 		res.dig[i] += BASE;
	 	end
	 	else
	 		vo := 0;
	 	i += 1;
	end;

	clearZeros(res);
	exit(res);

end;

operator - (const val: TLongNumber) ans: TLongNumber;
var
	res: TLongNumber;
begin
	res := copy(val);
	res.inv := NOT res.inv;
	exit(res);
end;

operator <= (const lhs, rhs: TLongNumber) ans: boolean;
begin
	exit(NOT(lhs > rhs))
end;

operator >= (const lhs, rhs: TLongNumber) ans: boolean;
begin
	exit((lhs > rhs) OR (lhs = rhs));
end;

operator <> (const lhs, rhs: TLongNumber) ans: boolean;
begin
	exit(NOT (lhs = rhs));
end;

operator < (const lhs, rhs: TLongNumber) ans: boolean;
begin
	exit(NOT (lhs >= rhs));
end;

operator > (const lhs, rhs: TLongNumber) ans: boolean;
var
	i: Integer;
	ex: Boolean;
begin
	ex := true;

	if (Length(lhs.dig) = 1) AND (Length(rhs.dig) = 1) AND (lhs.dig[0] = 0) AND (rhs.dig[0] = 0) then exit(false)
	else if lhs.inv AND NOT rhs.inv then exit(true)
	else if NOT lhs.inv AND rhs.inv then exit(false)
	else if NOT lhs.inv AND NOT rhs.inv then ex := false;

	if Length(lhs.dig) > Length(rhs.dig) then exit(ex);
	for i := Length(lhs.dig) - 1 downto 0 do
		if lhs.dig[i] > rhs.dig[i] then exit(ex);
	exit(NOT ex);
end;

operator = (const lhs, rhs: TLongNumber) ans: boolean;
var
	i: Integer;
begin

	if (Length(lhs.dig) = 1) AND (Length(rhs.dig) = 1) AND (lhs.dig[0] = 0) AND (rhs.dig[0] = 0) then exit(true)
	else if lhs.inv <> rhs.inv then exit(false);

	if Length(lhs.dig) <> Length(rhs.dig) then exit(false);
	for i := Length(lhs.dig) - 1 downto 0 do
		if lhs.dig[i] <> rhs.dig[i] then exit(false);

	if lhs.inv <> rhs.inv then exit(false);

	exit(true);
end;

//...

end.