var 
	d, m, n, kMax, b, k: Integer;

begin
	assign(input, 'input.txt'); reset(input); 
	read(d, m); 
	

	assign (output, 'output.txt'); rewrite(output);
	for n := 1 to m do
	begin

		kMax := 1;
		k := 1; 

		while true do
		begin
			b := 2 * n - d * (k - 1) * k;
			
			if b <= 0 then 
				break;

			if b mod (2 * k) = 0 then 
				kMax := k;
			
			k += 1;
		end;
	
		write(KMax, ' ');
	end;
	close(input); close(output);
end.