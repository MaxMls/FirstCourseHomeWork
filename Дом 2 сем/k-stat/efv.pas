var 
	v: array of Longint;
	i, n, w, k, ic: Longint;

procedure QuickSort(const l, r: Longword);
var
	q, p, i, j: Longint;
begin

	i := l; 
	j := r;
	p := random(r - l) + l;
	q := v[p];

	//writeln(q, ' ', p);
	//writeln('l:', l, ' j:', j, ' i:', i, ' r:', r);
	while i <= j do
	begin
		while v[i] < q do i += 1;
		while v[j] > q do j -= 1;
		if i <= j then
		begin
			w := v[i]; 
			v[i] := v[j]; 
			v[j] := w;
			j -= 1;
			i += 1;
		end;
		writeln('l:', l, ' j:', j, ' i:', i, ' r:', r);
	end;

	//for ic := 0 to n - 1 do write(v[ic], ' '); writeln;

	if (k < i) and (l < j) then QuickSort(l, j)
	else if (k >= i) and (i < r) then QuickSort(i, r)

end;


begin
	randomize;
	assign(input,'input.txt'); reset(input);
	read(n); 
	read(k); k -= 1;
	SetLength(v, n);
	for ic := 0 to n - 1 do read(v[ic]); 
	close(input);
	//for ic := 0 to n - 1 do write(v[ic], ' '); writeln; 

	QuickSort(0, n - 1);

	//writeln(v[k]);
	assign(output,'output.txt'); rewrite(output);
	writeln(v[k]);
	close(output);
end.