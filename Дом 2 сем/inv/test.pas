
function a(): Integer;
begin
	writeln('a');
	exit(3);
end;

function b(): Integer;
begin
	writeln('b');
	exit(2);

end;

var
	ar: array[0..24] of Integer; 
	i, j, c , n: Integer;
begin
	ar[a()] := b();
	

end.