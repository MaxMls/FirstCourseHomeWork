{$mode objfpc} {$H+}
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
function charToInt(const s: Char): QWord;
begin
	if (ord(s) >= ord('0')) AND (ord(s) <= ord('9')) then exit(ord(s) - ord('0'));
	if (ord(s) >= ord('a')) AND (ord(s) <= ord('z')) then exit(ord(s) - ord('a') + 10);
	if (ord(s) >= ord('A')) AND (ord(s) <= ord('Z')) then exit(ord(s) - ord('A') + 10);
end;
function intToChar(const i: Integer): String;
begin
	if (i < 10) then exit(Char(ord('0') + i));
	if (i < 36) then exit(Char(ord('a') + i-10));
	if (i < 62) then exit(Char(ord('A') + i-36));
end;
procedure show(const val: TLongNumber);
var

	i: Integer;
begin

	for i := Length(val.dig) - 1 downto 0 do write(inttostr(val.dig[i])+ ' '); writeln();	
end;
function copy(const val: TLongNumber): TLongNumber;
var
	res: TLongNumber;
	i: Integer;
begin
	res := val; res.dig := nil;
	SetLength(res.dig, Length(val.dig));

	for i := 0 to Length(val.dig) - 1 do res.dig[i] := val.dig[i];

	exit(res);
end;
operator := (val: int64) res: TLongNumber;
var
	i: Integer;
begin
	i := 0;
	res.inv := val >= 0;
	val := abs(val);

	if val > BASE then
	begin
		while val > 0 do
		begin
			SetLength(res.dig, i + 1);
			res.dig[i] := val mod BASE;
			val := val div BASE;
			i += 1;
		end;
		exit(res);
	end;
		
	SetLength(res.dig, 1);
	res.dig[0] := val;
	exit(res);
end;
operator - (const val: TLongNumber): TLongNumber;
var

	res: TLongNumber;
begin
	res := copy(val);
	res.inv := NOT res.inv;
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

operator * (const lhs, rhs: TLongNumber): TLongNumber;
var
	ans: TLongNumber;
	i, j: longint;
	s: qword;
begin
	setlength(ans.dig, length(lhs.dig) + length(rhs.dig));
	s := 0;
	for i := 0 to length(lhs.dig)-1 do
	begin
		s := 0;
		for j := 0 to length(rhs.dig)-1 do
		begin
			s := s + ans.dig[i + j] + lhs.dig[i] * rhs.dig[j];
			ans.dig[i + j] := s mod BASE;
			s := s div BASE;
		end;
		ans.dig[length(rhs.dig) + i] := s;
	end;
	while (ans.dig[length(ans.dig)-1] = 0) and (length(ans.dig)<>1) do
		setlength(ans.dig, length(ans.dig)-1);
 
	exit(ans);
end;

operator > (const lhs, rhs: TLongNumber): boolean;
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
operator = (const lhs, rhs: TLongNumber): boolean;
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
operator <= (const lhs, rhs: TLongNumber): boolean;
begin

	exit(NOT(lhs > rhs))
end;
operator >= (const lhs, rhs: TLongNumber): boolean;
begin

	exit((lhs > rhs) OR (lhs = rhs));
end;
operator < (const lhs, rhs: TLongNumber): boolean;
begin

	exit(NOT (lhs >= rhs));
end;

operator + (const lhs, rhs: TLongNumber): TLongNumber;
var
	i, ym, a, b, c, vr: QWord;
	res: TLongNumber;
begin


	//a + -b = (a) - (-b)


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
operator <> (const lhs, rhs: TLongNumber): boolean;
begin

	exit(NOT (lhs = rhs));
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

type
	TDelsArray = array of Word;

function GetDels(a: Word): TDelsArray;
var
	i, j, k: Integer;
	ar: TDelsArray;
begin
	SetLength(ar, 0);
	i := 2;
	j := 0;
	while (a > 0) AND (i <= a) do 
	begin
		if (a mod i) = 0 then
		begin
			a := a div i;

			// Пропуск повторов
			for k := 0 to j do if (k < j) and (i = ar[k]) then break;
			if k <> j then continue;

			j += 1;
			SetLength(ar, j);
			ar[j - 1] := i;
		end
		else
			i += 1
	end;
	exit(ar);
end;


function binpow(a: TLongNumber; n: QWord): TLongNumber;
var
	res: TLongNumber;
begin
	res := 1;

	while n > 0 do
	begin
		res := res * a;
		n -= 1;
	end;

	exit(res);
end;

var
	F:Text;
	ch : Char;
	dels: TDelsArray;
	delCount: array of QWord;
	ost, q: QWord;
	i: Integer;
	s: String;	// 4000 байт
	a, b, res: TLongNumber; // 5392 * 3 = 16176 байт
	/// 20176 b ‪
	/// ‪0,020176‬ мегабайт
begin

	// 0.
	assign(F,'input.txt'); reset(F);// 

	s := '';
	read(F, q); readln(F);
	while not eof(F) do
	begin
		Read(F, ch);
		if (ch = #13) or (ch = #10) then continue;
		s += ch;
	end;
	close(F);


	// 1 делители
	dels := GetDels(q);
	
	// 2
	SetLength(delCount, Length(dels));

	a := fromString(s, q);
	if a = 0 then
	begin
		assign(output,'output.txt'); rewrite(output);
		writeln('1' + s);
		close(output);
		halt();
	end;

	for i := 0 to Length(dels) - 1 do 
	begin
		b := copy(a);

		while b > 1 do
		begin
			b := divmod(b, dels[i], ost);

			if ost = 0 then 
				delCount[i] += 1
			else 
				break;
		end;
	end;


	// 3. Возвести dels в степени delCount и умножить между собой
	res := 1;
	for i := 0 to Length(dels) - 1 do 
	begin
		res *= binpow(dels[i], delCount[i]);
	end;

	assign(output,'output.txt'); rewrite(output);
	writeln(toString(res, q));
	close(output);


	
end.