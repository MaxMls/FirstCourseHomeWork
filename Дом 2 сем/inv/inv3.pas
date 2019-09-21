
type
	TElem = record
		check: Boolean;
		ind: Integer;
		v: Integer;
	end;


var
	a: array of TElem;
	w: TElem;
	c: Integer;


procedure QuickSort(const l, r: Longword);
var
	q, p, i, j: Longint;
begin

	i := l; 
	j := r;
	p := random(r - l) + l;
	q := a[p].v;

	while i <= j do
	begin
		while a[i].v < q do i += 1;
		while a[j].v > q do j -= 1;
		if i <= j then
		begin


			if ((a[i].v > a[j].v) and (a[i].ind < a[j].ind)) or ((a[i].v < a[j].v) and (a[i].ind > a[j].ind)) then c += 1;
			w := a[i]; 
			a[i] := a[j]; 
			a[j] := w;


			j -= 1;
			i += 1;
		end;
	end;

	if l < j then QuickSort(l, j);
	if i < r then QuickSort(i, r);

end;

var
	i, j, n: Integer;
begin

	assign(input,'input.txt'); reset(input);
	read(n);
	SetLength(a, n);
	for i := 0 to n - 1 do
	begin
		read(a[i].v);
	 	a[i].check := false;
	 	a[i].ind := i;
	end; 
	c := 0;

	QuickSort(0, (n) - 1);

	writeln(c);
	
end.