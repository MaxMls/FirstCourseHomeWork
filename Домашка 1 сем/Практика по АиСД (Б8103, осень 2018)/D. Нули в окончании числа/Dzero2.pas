var
	a, b, q, i, j, c, p: QWord;
	qDel, qDelCount, fDelCount: array of QWord; 
begin
  	assign(input,'input.txt'); reset(input); assign(output,'output.txt'); rewrite (output);
  	// 1 18446744073709551615 10
	read(a, b, q);

	// Получить делители q:
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
	if p > 1 then
	begin
		c += 1;
		SetLength(qDel, c);
		SetLength(qDelCount, c);
		qDel[c-1] := p;
		qDelCount[c-1] := 1;
	end;

	// Поиск делителей факториала без умножения
	SetLength(fDelCount, c);
	while a <= b do
	begin
		j := 0;
		while j < c do
		begin
			p := a;
			while p mod qDel[j] = 0 do
			begin
				fDelCount[j] += 1;
				p := p div qDel[j];
			end;
			j += 1;
		end;
		a += 1;
	end;

	// Поиск количества нулей
	j := high(qword);
	i := 0;
	while i < c do
	begin
		p := fDelCount[i] div qDelCount[i];
		if j > p then 
			j := p;
		i += 1;
	end;

	// Вывод
	writeln(j);
	
  	close(input); close(output);
end.