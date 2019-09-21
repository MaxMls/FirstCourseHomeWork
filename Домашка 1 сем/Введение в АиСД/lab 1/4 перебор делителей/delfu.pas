
function GetDels(a: Integer): array of QWord;
var
	i, j: QWord;
	ar: array of QWord;
begin
	i:=2;
	j:=0;
	while (a > 0) AND (i <= a) do 
	begin
		if (a mod i) = 0 then
		begin
			a := a div i;
			j += 1;
			SetLength(ar, j);
			ar[j - 1] := i;
		end
		else
			i += 1
	end;
	exit(ar);
end;


var
	inp,i: Integer;
	arr: array of Integer;
begin
	writeln('Число:');
	read(inp);
	arr := GetDels(inp);

	for i := 0 to length(arr)-1 do 
		writeln(arr[i]);


end.