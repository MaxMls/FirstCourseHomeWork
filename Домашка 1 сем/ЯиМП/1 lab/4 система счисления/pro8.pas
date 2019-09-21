function Sys(a,q:Integer): String;
var ost: Integer;
	s: String;
	m:Boolean;
begin
	if q >= 1 then
	begin
		if a < 0 then
			a *= -1
		else
			m := false;
		s := '';
		if q = 1 then
			for q := 1 to a do 
				s += '1'
		else
			while a > 0 do
			begin
				ost := a mod q;
				a := a div q;
				if ost > 9 then
					s := chr(ord('A') + ost - 10) + s
				else
					s := chr(ord('0') + ost) + s
			end;
		if m then 
			s := '-' + s;
	end
	else
		s:='Error';
	Sys:=s;
end;

var a,b:Integer;
begin
	read(a,b);
	writeln(Sys(a,b))
end.