var
	w, q: QWord;
	v: array of DWord;
	n, i, j: Longword;

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


var
	sum: QWord;
begin
	assign(input,'input.txt'); reset(input); assign(output,'output.txt'); rewrite(output);
	read(n);

	if n < 4 then writeln(0)
	else
	begin
		SetLength(v, n);

		i := 0;
		while i < n do begin read(v[i]); i += 1; end;

		QuickSort(0, Length(v) - 1);

		i := 0; sum := 0;
		while Length(v) mod 6 + i * 6 < Length(v) do
		begin
			sum += v[Length(v) mod 6 + i * 6];
			i += 1;
		end;
		writeln(sum);
	end;

	close(input); close(output);
end.