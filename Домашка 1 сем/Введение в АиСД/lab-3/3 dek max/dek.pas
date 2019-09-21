
var
	arr: array of Integer;
	i: Integer;
begin
	



	assign(input, 'input.txt'); reset(input);
	while not eof(input) do
	begin
		SetLength(arr, Length(arr) + 1);
		read(arr[Length(arr) - 1]);
	end;


	for i := 0 to Length(arr) - 1 do write(arr[i], ' '); writeln; 

end.