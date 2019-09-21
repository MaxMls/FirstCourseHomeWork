type
	TVariety = array of QWord;



procedure qSort(l, r: Int64; var a: TVariety);
var
	i, j, x, y: Int64;
begin
	i := l; j := r; x := a[l + random(r - l + 1)]; { x := a[(l + r) div 2]; - для выбора среднего элемента }
	repeat
		while a[i] < x do i := i + 1; { a[i] > x  - сортировка по убыванию}
		while x < a[j] do j := j - 1; { x > a[j]  - сортировка по убыванию}
		if i <= j then
		begin
			if a[i] > a[j] then {это условие можно убрать} {a[i] < a[j] при сортировке по убыванию}
			begin
				y := a[i]; a[i] := a[j]; a[j] := y;
			end;
			i := i + 1; j := j - 1;
		end;
	until i >= j;
	if l < j then qSort(l, j, a);
	if i < r then qSort(i, r, a);
end;



procedure Sort(v: TVariety);
begin
	qSort(0, Length(v)-1, v);
end;


var
	n, i: Integer;
	v: TVariety;
	sum: QWord;
begin
	assign(input,'input.txt'); reset(input); assign(output,'output.txt'); rewrite(output);
	read(n);

	SetLength(v, n);
	for i := 0 to n - 1 do read(v[i]);

	Sort(v);

	//for i := 0 to n - 1 do write(v[i],' '); writeln;

	i := 0; sum := 0;
	while Length(v) mod 6 + i * 6 < Length(v) do
	begin
		sum += v[Length(v) mod 6 + i * 6];
		i += 1;
	end;
	writeln(sum);

	close(input); close(output);
end.
