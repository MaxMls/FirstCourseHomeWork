var
	i: Integer;
	tMax, n, t, m: Integer;
	tLeave, q, qMax, tEnd: Integer;
	tArr, mArr: array of Integer; // Время записи, время обработки
begin
	assign(input,'input.txt'); reset(input); assign(output,'output.txt'); rewrite (output);
	read(tMax, n); 

	SetLength(tArr, n);
	SetLength(mArr, n);
	n -= 1;

	for i := 0 to n do read(tArr[i],mArr[i]);

	tLeave := 0;
	qMax := 0;

	for i := 0 to n do 
	begin
		
		if (i > 0) AND ((tArr[i - 1] + mArr[i - 1]) > tArr[i]) then //Передвинуть время приема
		begin
			tArr[i] := tArr[i - 1] + mArr[i - 1];
			q += 1;
			if qMax < q then qMax := q;
		end
		else if(q > 0) then q -= 1;

		m := mArr[i];
		t := tArr[i];

		if tLeave > t then 
		else tLeave += 1;

		tEnd := t + m;
		if tEnd >= tMax then
		begin
			tEnd := tMax;
			break;
		end;
	end;

	writeln(qMax, ' ', tEnd);

	close(input); close(output);
end.