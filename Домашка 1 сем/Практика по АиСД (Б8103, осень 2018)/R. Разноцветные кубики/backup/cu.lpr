type
	TVariety = array of QWord;


{ procedure Swap(var a, b: QWord);
var c: QWord;
begin
	c := a; a := b; b := c;
end; }

procedure qSort(l, r: Int64; var v: TVariety);
var
	i, j: Int64;
	w, q: QWord;
begin
	q := v[(l+r) div 2];
	repeat
		while (v[i] < q) do inc(i);
		while (q < v[j]) do dec(j);
		if (i <= j) then
		begin
			w := v[i]; v[i] := v[j]; v[j] := w;
			inc(i); dec(j);
		end;
	until (i > j);
	if (l < j) then qSort(l, j, v);
	if (i < r) then qSort(i, r, v);
end;

procedure Sort(v: TVariety);
begin
	qSort(0, Length(v), v);
end;


var
	n, i: Integer;
	variety: TVariety;
	a, b: QWord;
begin

	read(n);
	SetLength(variety, n);
	for i := 0 to n - 1 do read(variety[i]);

	Sort(variety);


	for i := 0 to n - 1 do write(variety[i],' '); writeln;








end.
