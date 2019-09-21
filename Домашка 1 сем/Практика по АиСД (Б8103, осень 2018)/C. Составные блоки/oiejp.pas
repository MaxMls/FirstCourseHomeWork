var
	m, n, a, b, c, d, z: QWord;
begin
	assign(input,'input.txt'); reset(input); assign(output,'output.txt'); rewrite (output);
	read(m, n);

	a := 1;
	while a <= m div a do
	begin
		if m mod a = 0 then
		begin
	  		z := m div a;
			b := 1;
			while b <= z div b do
			begin
				if z mod b = 0 then
				begin
					c := z div b;
					if (a*(b+1) + b*(a+1))*(c+1) + (a+1)*(b+1)*c = n then 
					begin
						writeln(1);
						close(input); close(output);
						halt();
					end;
				end;
				b += 1;
			end;
		end;
		a += 1;
	end;
	writeln(0);
	close(input); close(output);
end.