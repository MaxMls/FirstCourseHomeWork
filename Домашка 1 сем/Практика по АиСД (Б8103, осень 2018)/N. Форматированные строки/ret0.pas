begin
	assign(output, 'output.txt'); rewrite(output);
	writeln(0);
	close(output);
end.