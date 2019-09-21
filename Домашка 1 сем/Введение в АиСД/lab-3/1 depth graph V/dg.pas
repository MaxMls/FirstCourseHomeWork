

function Find(const len: Integer; const graph: array of Boolean): Boolean;
var
	color: array of Byte;

function DFS(const v: Integer): Boolean;
var
	i: Integer;
begin
	color[v] := 1;

	for i := 0 to len - 1 do
	begin
		if (color[i] = 1) then continue;
		
		if graph[len * v + i] and ((color[i] = 2) or not DFS(i)) then
			exit(false);
	end;
	color[v] := 2;

	exit(true);
end;
begin
	SetLength(color, len);
	exit(DFS(0));
end;


var
	graph: array of Boolean;
	i: Integer;
begin
	assign(input, 'input.txt'); reset(input);

	while not eof(input) do
	begin
		read(i);
		SetLength(graph, Length(graph) + 1);
		graph[Length(graph) - 1] := i <> 0;
	end;

	writeln(Find(trunc(sqrt(Length(graph)/1)), graph));


	
end.