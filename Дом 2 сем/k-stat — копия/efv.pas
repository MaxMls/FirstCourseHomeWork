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
		//writeln('l:', l, ' j:', j, ' i:', i, ' r:', r);
	end;

	//for ic := 0 to n - 1 do write(v[ic], ' '); writeln;

	if (k < i) and (l < j) then QuickSort(l, j)
	else if (k >= i) and (i < r) then QuickSort(i, r)

end;

var
	a: array of Longint;
	k1, k2: Longint;

begin
	randomize;
	//assign(input,'input.txt'); reset(input);
	read(n); 
	read(k); k -= 1;
	SetLength(a, n);
	SetLength(v, n);
	for ic := 0 to n - 1 do
	begin
		read(v[ic]); 
		a[ic] := v[ic];
	end;
	close(input);


	if k = -1 then 
		writeln(a[0] - 1)
	else
	begin
		QuickSort(0, n - 1);
		k1 := v[k];
		v := a;
		k += 1;
		QuickSort(0, n - 1);
		k2 := v[k];

		if (k1 = k2) or (k1 < 1) then
		 	writeln(-1)
		else
			writeln(k1);
	end;
end.