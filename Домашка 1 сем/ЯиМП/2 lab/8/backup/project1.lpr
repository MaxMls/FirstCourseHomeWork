var
	p, s: String;

	t, te, old: String;
	i: Integer;

begin

	readln(s);

	for i := 0 to Length(s) do
	begin
		if (s[i] = '+') OR (s[i] = '-') OR (s[i] = '*') OR (s[i] = '/') then
		begin
			t := '+';
		end
		if (s[i] = '(') OR (s[i] = ')') then
			t := s[i];
		else
		begin
			t := '1'; 
		end;

		if NOT ((t = old) AND ((t <> '(') OR (t <> ')'))) then
			p += t;
	end;

	writeln(p);








end.

