var
	m, n, i, a, b, c, d: QWord;
begin
	//assign(input,'input.txt'); reset(input); assign(output,'output.txt'); rewrite (output);
	read(m, n);

	i := 1;
	while i <= m div i do
	begin
		if m mod i = 0 then
		begin
			b := 1;
			while b <= i div b do
			begin
				if i mod b = 0 then
				begin
					a := m div i;
					c := i div b;
					d := (a*(b+1)+b*(a+1))*(c+1)+(a+1)*(b+1)*c;
					//d := a*(b+1)*(c+1)+(a+1)*b*(c+1)+(a+1)*(b+1)*c;
					//d := (a+1)*(2*b*(c+1)+(b+1)*c);
					//writeln(a,' ',b,' ',c);
					if d = n then 
					begin
						writeln(1);
						close(input); close(output);
						halt();
					end;
				end;
				b += 1;
			end;
		end;
		i += 1;
	end;
	writeln(0);
	close(input); close(output);
end.