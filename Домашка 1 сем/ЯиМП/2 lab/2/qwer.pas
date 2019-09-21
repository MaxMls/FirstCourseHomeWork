Uses math;





function SegmentSegment(x11, y11, x12, y12,  x21, y21, x22, y22: Double): Boolean;
var
	mul, dx1, dy1, dx2, dy2, dxx, dyy, d: Double;

begin
	writeln('ddsdsf');

	if (min(x11, x12) >  max(x21, x22)) or (max(x11, x12) < min(x21, x22)) or (min(y11, y12) > max(y21, y22)) or (max(y11, y12) < min(y21, y22)) then
	begin
		writeln('Линии имеют одну общую вершину...');
		exit(false);  // линии имеют одну общую вершину...
	end;
	 
	dx1 := x12-x11;
	dy1 := y12-y11; // Длина проекций первой линии на ось x и y
	dx2 := x22-x21;
	dy2 := y22-y21; // Длина проекций второй линии на ось x и y
	dxx := x11-x21;
	dyy := y11-y21;
	
	d := dy2 * dx1 - dx2 * dy1;

	if d = 0 then
	begin
		exit(false);
		writeln('Линии параллельны...');
	end;

	if (d > 0) then
	begin
		mul := dx1*dyy-dy1*dxx;
		if (mul < 0) or (mul > d) then
		begin
			exit(false);
			writeln('Первый отрезок пересекается за своими границами...');
		end;
		mul := dx2*dyy-dy2*dxx;
		if (mul < 0) or (mul > d) then
		begin
			exit(false);
			writeln('Второй отрезок пересекается за своими границами...');
		end;
	end;
	
	mul := -(dx1*dyy-dy1*dxx);
	if (mul < 0) or (mul > -d) then
	begin
		exit(false);
		writeln('Первый отрезок пересекается за своими границами...');
	end;
	mul := -(dx2*dyy-dy2*dxx);
	if (mul < 0) or (mul > -d) then
	begin
		exit(false);
		writeln('Второй отрезок пересекается за своими границами...');
	end;
	exit(true);

end;










var
	n, i, j: Integer;
	arr: array of Double;
	isTrue: Boolean;

begin
	isTrue := false;

	writeln('Количество ребер:');
	read(n);

	SetLength(arr, n * 4);

	writeln('x1, y1, x2, y2');
	
	for i := 0 to n*4-1 do read(arr[i]);


	//for i := 0 to n*4-1 do write(arr[i], ' '); writeln; 





	for i := 0 to n - 1 do
	begin
		for j := i + 1 to n - 1 do
		begin			
			writeln(i,' ',j);
			if SegmentSegment(arr[i*4], arr[i*4+1], arr[i*4+2], arr[i*4+3],       arr[j*4], arr[j*4+1], arr[j*4+2], arr[j*4+3]) then
			begin
				isTrue := true;
				break;
			end;
		end;
	end;


	if isTrue then
		writeln('Пересекаются')
	else
		writeln('Не пересекаются');

	//9 0 -9 0
	//0 9 0 -9
		


end.