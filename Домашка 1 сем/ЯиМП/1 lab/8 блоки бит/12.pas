var a,n,m,v:Qword;

begin
	writeln('Number and bits:');
	v:=0;

	read(a,n);
	m := NOT ((NOT 0) shl(n)); // �����
	while a>0 do
	begin
		v += (m AND a);
		a := a shr(n);
	end;

	writeln('Sum: ', v);
end.