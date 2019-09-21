var
	x0, x1, x2, x3, y0, y1, y2, y3, a, b, c: Double;
begin
	writeln('Точка треугольника 1:');
	read(x1,y1);
	writeln('Точка треугольника 2:');
	read(x2,y2);
	writeln('Точка треугольника 3:');
	read(x3,y3);
	writeln('Точка для проверки:');
	read(x0,y0);



	a := (x1 - x0) * (y2 - y1) - (x2 - x1) * (y1 - y0);
	b := (x2 - x0) * (y3 - y2) - (x3 - x2) * (y2 - y0);
	c := (x3 - x0) * (y1 - y3) - (x1 - x3) * (y3 - y0);
	
	if 	((a > 0) AND (b > 0) AND (c > 0)) OR
		((a < 0) AND (b < 0) AND (c < 0)) then
		begin
			writeln('Точка внутри треугольника');
		end
		else if (a * b * c) = 0 then 
		begin
			writeln('Точка на границе треугольника');
		end
		else
			writeln('Точка вне треугольника');

end.

