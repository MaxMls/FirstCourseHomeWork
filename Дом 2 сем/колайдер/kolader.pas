type
	TParticles = array of Longint;




procedure push(var a: TParticles; const v: Longint);
begin
	SetLength(a, Length(a) + 1);
	a[Length(a)-1] := v;
end;


procedure add(var a: TParticles; const v: Longint);
var
	i: Integer;
begin
	for i := 0 to Length(a) - 1 do a[i] += v;
end;



procedure deleteDuplicates(var arrayL, arrayR: TParticles);
var
	l, r, i: Integer;
	nArrayL, nArrayR: TParticles;
begin

	if (Length(arrayR) = 0) or (Length(arrayL) = 0) then exit; 

	l := 0;
	r := 0;
	while true do 
	begin
		// проверить совпадение позиций
		// наименьшую сохранить
		// наиб сравнить со следующей, если она не = и меньше, тогда сохранить и вз€ть следующую
		// если равна, то вз€ть обе следующие
		// повторить

		if arrayR[r] < arrayL[l] then
		begin
			push(nArrayR, arrayR[r]);
			r += 1;
		end
		else if arrayL[l] < arrayR[r] then 
		begin
			push(nArrayL, arrayL[l]);
			l += 1;
		end
		else
		begin
			l += 1;
			r += 1;
		end;

		// ќтправить остатки
		if l = Length(arrayL) then
			for i := r to Length(arrayR) - 1 do push(nArrayR, arrayR[i])
		else if r = Length(arrayR) then
			for i := l to Length(arrayL) - 1 do push(nArrayL, arrayL[i])
		else continue;
		break;
	end;
	arrayR := nArrayR;
	arrayL := nArrayL; 
end;


var
	arrayR, arrayL: TParticles;
	o, n, m, i, p, e, offset, j: Integer;
begin

	// READ
	assign(input, 'linear.in'); reset(input);
	read(n);

	for i := 0 to n - 1 do
	begin
		read(p);
		read(e);
		if e = 1 then push(arrayR, p)
		else push(arrayL, p);
	end;
	//for i := 0 to Length(arrayL) - 1 do write(arrayL[i], ' '); writeln(' left');  
	//for i := 0 to Length(arrayR) - 1 do write(arrayR[i], ' '); writeln(' right');


	read(m);
	read(offset);

	o := 0;
	i := 0;

	assign(output, 'lineartest.out'); rewrite(output);
	while true do
	begin
		// ѕроверка и удаление лишних
		deleteDuplicates(arrayL, arrayR);
		
		if i = offset then
		begin
			writeln(Length(arrayL) + Length(arrayR));
			read(offset);
			o += 1;
			if o = m then break; 	
		end;
		i += 1;

		// —мещение частиц вправо
		add(arrayR, 1);

		// ѕроверка и удаление лишних
		deleteDuplicates(arrayL, arrayR);

		// —мещение частиц влево
		add(arrayL, -1);

	end;

	close(input); close(output);
end.