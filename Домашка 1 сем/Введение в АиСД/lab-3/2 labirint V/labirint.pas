uses ClassStruct;

type
	TSusArray = array of Integer;

function Find(const len, startPoint: Integer; const labirint: array of Boolean): Boolean;
var
	endPoint, width: Integer;
	exitPath: array of Boolean; // Направленный граф от выхода ко входу

var
	visited: array of Boolean;

function is_goal(cell: Integer): Boolean;
begin
	// Если на границах, true иначе false
	//writeln(cell);
	//          
	exit((cell mod width = 0) or (cell div width = 0) or (cell div width = width - 1) or (cell mod width = width - 1));

end;


function successors(cell: Integer): TSusArray;
var
	i: Integer;
	out: TSusArray;
begin
	SetLength(out, 0);
	// Фильтрует стены и возвращает соседние
	//         п             л       в             н             п-н                   п-в             л-н                 л-в
	for i in [cell + 1, cell - 1, cell - width, cell + width{ , cell + width + 1, cell - width + 1, cell - width - 1, cell + width - 1 }] do
		if labirint[i] and not visited[i] then
		begin
			SetLength(out, Length(out) + 1);
			out[Length(out) - 1] := i;
			//write(i,' ');
			visited[i] := true;
		end; //writeln;
	exit(out);
end;


function BFS(start: Integer): Boolean;
var
	queue: TListQueue;
	curr, next: Integer;
begin 
	queue := TListQueue.Create();
	queue.push(start);
	while queue.size <> 0 do
	begin
		curr := queue.get(); queue.pop();
		if is_goal(curr) then
		begin
			endPoint := curr;
			writeln('Exit: ', curr);
			exit(true);
		end;

		for next in successors(curr) do
		begin
			queue.push(next);
			exitPath[next * len + curr] := true;
		end;
	end;
	writeln('Exit: none');
	BFS := false;
end;


var
	i, pathLen: Integer;
	labirintWithPath: array of Byte; 
begin
	width := trunc(sqrt(len));
	SetLength(visited, len);
	SetLength(exitPath, len * len);
	SetLength(labirintWithPath, len);
	pathLen := 0;

	if BFS(startPoint) then // Вывод пути
	begin

		for i := 0 to len - 1 do if not labirint[i] then labirintWithPath[i] := 1;

		

 		while endPoint <> startPoint do 
			for i := 0 to len - 1 do
			begin
				if exitPath[endPoint * len + i] then
				begin
					write(endPoint,' -> ');
					labirintWithPath[i] := 2;
					endPoint := i;
					pathLen += 1;
					break;
				end;
			end;

		writeln(startPoint);
		labirintWithPath[startPoint] := 2;



		for i := 0 to len - 1 do
		begin
			if i mod width = 0 then writeln;

			case labirintWithPath[i] of
				0: write(' ');
				1: write('#');
				2: write('*');
			end;
		end; writeln;
		writeln('PathLen: ', pathLen);

		exit(true);
	end;
	exit(false);

end;



var
	labirint: array of Boolean; // 2d, пустые true
	c: Char;
	start: Integer;
begin
	SetLength(labirint, 0);
	assign(input, 'input.txt'); reset(input);

	while not eof(input) do
	begin
		read(c);
		if c in [#13, #10] then continue;
		if c = '!' then start := Length(labirint);
		SetLength(labirint, Length(labirint) + 1);
		labirint[Length(labirint) - 1] := c <> '#';
	end;


	writeln(Find(Length(labirint), start, labirint));



end.
