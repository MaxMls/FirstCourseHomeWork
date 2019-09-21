var 
	A, B, q, M, k, mMin, kp, l: uint64;

begin
	assign(input, 'input.txt'); reset(input);
	read(A, B, q);
	close(input);

	
	k := 2;
	mMin := high(uint64);

	while k <= q div k do
	begin
		if q mod k = 0 then
		begin
			l := 0;
			while (q mod k = 0) do
			begin
				l += 1;
				q := q div k;
			end;

			M := 0;
			kp := k;
			while kp <= B do
			begin
				M += B div kp - (A - 1) div kp;
				if kp <= high(uint64) div k then
					kp *= k
				else 
					break;
			end;

			M := M div l;

			if M < mMin then 
				mMin := M;
		end;

		k += 1;
	end;


	if q > 1 then
	begin
		kp := q;
		M := 0;

		while kp <= B do
		begin
			M += B div kp - (A - 1) div kp;
			if kp <= high(uint64) div q then
				kp *= q 
			else 
				break;
		end;

		if M < mMin then mMin := M;
	end;

	assign(output, 'output.txt'); rewrite(output);
	write(mMin);
	close(output);
end.