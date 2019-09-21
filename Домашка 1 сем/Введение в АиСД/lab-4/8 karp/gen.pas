
var
	i: Int64;
begin
	Randomize;

	assign(output, 'input.txt'); rewrite(output);
	
	while i < 100000000 do
	begin
		write(char(ord('a') + random(ord('z') - ord('a'))));
		i += 1;
	end;

	close(output);
end.