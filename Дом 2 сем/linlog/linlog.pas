var 
	v: array of Longint;
	i, j, q, n, w: Longint;

procedure QuickSort(const l, r: Longword);
begin
	i := l; 
	j := r;
	q := v[l];
	while i <= j do
	begin
		while v[i] < q do i += 1;
		while v[j] > q do j -= 1;
		if i <= j then
		begin
			w := v[i]; 
			v[i] := v[j]; 
			v[j] := w;
			if j > 0 then j -= 1;
			i += 1;
		end;
	end;
	if l < j then QuickSort(l, j);
	if i < r then QuickSort(i, r);
end;


begin
	assign(input,'input.txt'); reset(input);
	read(n);
	SetLength(v, n);
	for i := 0 to n - 1 do read(v[i]); 
	close(input);


	QuickSort(0, n - 1);


	assign(output,'output.txt'); rewrite(output);
	for i := 0 to n - 1 do write(v[i], ' '); writeln; 
	close(output);
end.