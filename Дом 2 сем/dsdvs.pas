type
	TG = array of Longint;

function Find(var v: Longint; var a: TG): Integer;
begin
	if a[v] = v then exit(1)
	else exit(Find(a[v], a) + 1);
end;


var
	n, m, i, c, ai, aj, li, lj: Longint;
	connect: TG;
begin
	assign(input, 'input.txt'); reset(input);
	read(n);
	read(m);

	SetLength(connect, n);

	for i := 0 to n - 1 do connect[i] := i;


	

	for i := 0 to m - 1 do
	begin
		read(ai);
		read(aj);

		li := Find(ai, connect);
		lj := Find(aj, connect);

		if (li < lj) then
            connect[ai] := lj
        else 
            connect[aj] := li;
	end;

	c := 0;

	for i := 0 to n - 1 do 
	begin
		if connect[i] = i then c += 1;
	end;

	assign(output, 'output.txt'); rewrite(output);
	writeln(c);
	close(output);
end.