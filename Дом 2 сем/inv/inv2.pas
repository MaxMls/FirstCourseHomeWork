var
	i, j, n, c: Integer;
	a: array of Integer;
begin
	assign(input,'input.txt'); reset(input);
	read(n);
	SetLength(a, n);
	for i := 0 to n - 1 do read(a[i]);
	c := 0;

	for i := 0 to n - 1 do
		for j := i + 1 to n - 1 do
			c += Ord(a[j] < a[i]);

	assign(output, 'output.txt'); rewrite(output);
	writeln(c);
end.

