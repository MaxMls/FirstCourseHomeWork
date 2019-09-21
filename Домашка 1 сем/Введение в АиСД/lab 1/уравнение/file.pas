var
	a,b,c,a1,b1,x0,y0,x1,x2,y1,y2,nod,r,q: Integer;

begin
	read(a,b,c);
	writeln(a,'X + ',b,'Y = ',c);




{ 





5 7 1


2 7 1


 }


	nod := 0;
	a1 := a;
	b1 := b;
	//найти нод a и b
	x2 := 1;
	x1 := 0;
	y2 := 0;
	y1:= 1;

	while b1 > 0 do
	begin
		q := a div b;
		r := a - q*b;
		x0 := x2 - q*x1;
		y0 := y2 - q*y1;
		a := b;
		b:=r;
		x2:=x1;
		x1:=x0;
		y2:=y1;
		y1:=y0;
	end;
	nod:=a;
	x0:=x2;
	y0:=y2;



	writeln(nod);

	if c mod nod <> 0 then 
		writeln('Решений нет')
	else
	begin
		x0 := a1 * (c div nod);
		y0 := b1 * (c div nod);

		writeln(x0,' ',y0);

		
	end;



end.