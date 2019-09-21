Uses sysutils;
type
	TLongNumber = array of QWord;
const
	BASE = 1000000000;


function multiple(const lhs: TLongNumber; rhs: QWord): TLongNumber;
var
	i: Integer;
	ym, c: QWord;
	res: TLongNumber;
begin
	ym := 0;
	SetLength(res, Length(lhs));
	for i := 0 to Length(lhs)-1 do
	begin
		c := lhs[i] * rhs + ym;
		ym := c div BASE;
		res[i] := c mod BASE;
	end;
	if ym <> 0 then
	begin
		SetLength(res, Length(lhs) + 1);
		res[i + 1] := ym;
	end;
	exit(res);
end;


function multiple(const a, b: TLongNumber): TLongNumber;
var
	res, re: TLongNumber;
	i, j: Integer;
	ym: QWord;
begin
	for i := 0 to Length(b)-1 do
	begin
		re := multiple(a, b[i]);
		for j := 0 to Length(re)-1 do 
		begin
			
			if Length(res) = j + i then
			begin
				SetLength(res, Length(res)+1);
				res[Length(res)-1] := re[j];
			end
			else
				res[j + i] += re[j];

			ym := res[j + i] div BASE;
			if ym <> 0 then
				if Length(res) = j + i + 1 then
				begin
					SetLength(res, Length(res)+1);
					res[Length(res)-1] := ym;
				end
				else
					res[j + i + 1] += ym;
			res[j + i] := res[j + i] mod BASE;
		end;
	end;
	exit(res);
end;

procedure binpow(var a: TLongNumber; var n: Word);
var
	res: TLongNumber;
begin
	SetLength(res, 1);
	res[0] := 1;
	while (n > 0) do
	begin
		if n mod 2 = 1 then
		begin
			res := multiple(res, a);
			n -= 1;
		end
		else
		begin
			a := multiple(a, a);
			n := n div 2;
		end;
	end;
	a := res;
end;

var
	num: TLongNumber;
	s: AnsiString;
	n: Word;
	i, j: Integer;
	temp: String;
begin
	assign(input,'input.txt'); reset(input); assign(output,'output.txt'); rewrite(output);

	read(s, n);

	if Length(s) mod 9 = 0 then
		SetLength(num, Length(s) div 9)
	else
		SetLength(num, Length(s) div 9 + 1);

	// Ввод
	temp := '';
	for i := Length(s) downto 1 do
	begin
		temp := s[i] + temp;
		if Length(temp) = 9 then
		begin
			num[(Length(s) - i) div 9] := StrToInt(temp);
			temp := '';
		end;
	end;
	if Length(temp) > 0 then
	begin
		num[Length(num) - 1] := StrToInt(temp);
		temp := '';
	end;

	binpow(num, n);

	// Вывод
 	for i := Length(num) - 1 downto 0 do 
 	begin
 		temp := IntToStr(num[i]);
 		if i <> Length(num) - 1 then for j := 1 to 9 - Length(temp) do write('0');
	 	write(temp);
 	end;
 	writeln;

	close(input); close(output);
end.