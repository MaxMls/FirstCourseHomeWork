var
	p, s, t, old: String;
	i,ck: Integer;
begin
	readln(s);


	if (Length(s) > 0) AND ((s[1] = '*') OR (s[1] = '/')) then // первый знак * или /
	begin
		writeln('WRONG');
		halt();
	end;

	for i := 0 to Length(s) do
	begin
		if s[i] in ['+', '-', '*', '/'] then
		begin
			t := '+';
		end
		else if (s[i] = '(') OR (s[i] = ')') then
			t := s[i]
		else if (i <> 0)  then
			t := '1';
		if NOT ((t = old) AND (t = '1') AND ((t <> '(') OR (t <> ')'))) then
			p += t;
		old := t;
	end;
	//writeln(p);


	if (Length(p) > 0) AND (p[Length(p)] = '+') then // последний символ знак
	begin
		writeln('WRONG');
		halt();
	end;

	for i := 0 to Length(p) do
	begin

		if (i > 0) then
		begin
			if 	((p[i] = '+') AND (p[i-1] = '+')) OR // 2 знака подряд
				((p[i-1] = ')') AND (p[i] <> '+')) OR // не знак после скобки
				((p[i-1] <> '+') AND (p[i] = '(')) // не знак перед скобкой
			then 
			begin
				writeln('WRONG');
				halt();
			end;
			
		end;

		if p[i] = ')' then 
			ck -= 1
		else if p[i] = '(' then
			ck += 1;

		if ck < 0 then
		begin
			writeln('WRONG');
			halt();
		end

	end;

	if ck <> 0 then 
		writeln('WRONG')
	else
		writeln('RIGHT');

end.

