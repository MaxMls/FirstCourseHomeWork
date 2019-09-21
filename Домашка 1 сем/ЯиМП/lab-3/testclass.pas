uses ClassStruct;
var
	S: TClassStruct;
	i:Integer;
begin
	S := TListQueue.Create();
	for i := 0 to 9 do S.Push(i);
	for i := 0 to 9 do 
	begin
		writeln( S.Get());
		S.Pop();
	end;
	 
	S.Destroy();
	S := TArrayQueue.Create(10);
	for i := 0 to 9 do S.Push(i);
	S.Destroy();
	//...
	S := TListStack.Create();
	for i := 0 to 9 do S.Push(i);
	S.Destroy();
	S := TListQueue.Create();
	for i := 0 to 9 do S.Push(i);
	S.Destroy(); 
	//... 
end.