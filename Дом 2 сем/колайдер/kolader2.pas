type
	TArray = array of Longint;
var
	v: TArray;

procedure QuickSort(const l, r: Longword);
var
	q, p, i, j: Longint;
	w: Longint;
begin

	i := l; 
	j := r;
	p := random(r - l) + l;
	q := v[p];
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
	end;

	if l < j then QuickSort(l, j);
	if i < r then QuickSort(i, r);

end;

procedure push(var a: TArray; const v: Longint);
begin
	SetLength(a, Length(a) + 1);
	a[Length(a)-1] := v;
end;

function pop(var a: TArray): Longint;
var 
	r: Longint;
begin
	r := a[Length(a)-1];
	SetLength(a, Length(a) - 1);
	exit(r);
end;



var
	stack: TArray;
	n, m,  i, j,  p, d, e: Longint;
begin
	assign(input, 'linear.in'); reset(input); assign(output,'linear.out'); rewrite(output);

	read(n);
	for i := 0 to n - 1 do
	begin
		read(p);
		read(d);
		
		if d = 1 then push(stack, p)
		else if Length(stack) <> 0 then
		begin
			p -= pop(stack);
			push(v, (p) div 2 + (p) mod 2);
		end;

	end;
	QuickSort((0), Length(v) - 1);
	for i := 0 to Length(v) - 1 do write(v[i], ' '); writeln;
	read(m);

	j := 0;
	for i := 0 to m - 1 do
	begin
		read(e);
		while v[j] <= e do j += 1;
		writeln(n - j * 2);
	end;

	close(input); close(output);
end.