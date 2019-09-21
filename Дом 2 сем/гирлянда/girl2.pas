function getCache(s: String): Word;
var 
	i: Integer;
	cache: Word;
begin
	cache := 0;
	for i := 1 to Length(s) do cache += ord(s[i]);
	exit(cache);
end;

// O(n*m)
var
	colors: array of String;
	colorsCash: array of Word; 
	n, m, i, minL, k, f, ind, j: Longint;
	fir, sec: String;
	up: Byte;
	firCache, secCache: Word;
begin
	
	assign(input, 'input.txt'); reset(input);
	readln(n); SetLength(colors, n);
	SetLength(colorsCash, n);
	for i := 0 to n - 1 do 
	begin
		readln(colors[i]);
		colorsCash[i] := getCache(colors[i]);
	end;	
	readln(m);
	assign(output, 'output.txt'); rewrite(output);

	for i := 0 to m - 1 do
	begin

		readln(fir);
		firCache := getCache(fir);
		readln(sec);
		secCache := getCache(sec);
		

		


		minL := -2;
		k := 0; // 3 если найдены оба цвета 0 если не найдены
		f := 0; // номер прошлого цвета 1 fir или 2 sec // 0 при старте
		ind := 0; // индекс прошлого найденного цвета
		
		if (firCache <> secCache) or (fir <> sec) then
			for j := 0 to n - 1 do
			begin
				if (firCache = colorsCash[j]) and (fir = colors[j]) then
				begin
					if (f = 2) and ((j - ind - 1 < minL) or (minL < 0)) then
						minL := j - ind - 1;
					k := k or 1;
					f := 1;
					ind := j;
				end
				else if (secCache = colorsCash[j]) and (sec = colors[j]) then
				begin
					if (f = 1) and ((j - ind - 1 < minL) or (minL < 0)) then
						minL := j - ind - 1;
					k := k or 2;
					f := 2;
					ind := j;          
				end;
			end
		else
			for j := 0 to n - 1 do
			begin
				if (firCache = colorsCash[j]) and (fir = colors[j]) then
				begin
					if f = 1 then
					begin
						if (j - ind - 1 < minL) or (minL < 0) then
							minL := j - ind - 1;
					end
					else
						f := 1;
					ind := j;
					k := 3;
				end;	
			end;


		if k <> 3 then
			writeln(-1)
		else
			writeln(minL);

	end; 
	close(output);
end.