var
	a, b, q, i, j, c, p, maxQDel, fDelCount, maxQDelCount: QWord;
	qDel, qDelCount: array of QWord; 
begin
  	assign(input,'input.txt'); reset(input); assign(output,'output.txt'); rewrite (output);
  	// 1 18446744073709551615 10
	read(a, b, q);

	j := 0;
	c := 0;
	i := 2;
	p := q;
	while i*i < q do
		if p mod i = 0 then
		begin
			p := p div i;
			j += 1;
			if p mod i <> 0 then 
			begin
				c += 1;
				SetLength(qDel, c);
				SetLength(qDelCount, c);
				qDel[c-1] := i;
				qDelCount[c-1] := j;
				j := 0;
			end;
		end
		else
			i+=1;
	if p > qDelCount[c-1] then
	begin
		c += 1;
		SetLength(qDel, c);
		SetLength(qDelCount, c);
		qDel[c-1] := p;
		qDelCount[c-1] := 1;
	end;


	i := 0;
	j := high(QWord);

	while i < c do
	begin
		if qDelCount[i] < j then
			j := qDelCount[i];
			p := i;
		i+=1;
	end;

	maxQDel := qDel[p];
	maxQDelCount := qDelCount[p];


	p := b;
	c := 0;
	while p > 0 do
	begin
		p := p div maxQDel;
		c += p;
	end;

 	p := b div a;
	while p > 0 do
	begin
		p := p div maxQDel;
		c := p - c;
	end;

	writeln(c);



  	close(input); close(output);
end.