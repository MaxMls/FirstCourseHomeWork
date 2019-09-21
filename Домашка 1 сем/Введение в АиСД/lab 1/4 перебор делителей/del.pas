var
	input,i,n: QWord;
begin
		
	
	writeln('Число:');
	read(input);
	//input := high(dword) - 4;
	//input := 20;
	i:=2;
	n:=0;
	
	while (i*i <= input) do 
	begin
		if (input mod i) = 0 then
		begin
			input := input div i;
			n += 1;
			if (input mod i) <> 0 then
				writeln(i,'	', n);
		end
		else
		begin
			n := 0;
			i += 1;
		end;
		
	end;
	writeln(input,'	1');
	writeln('Конец');
end.