Uses math;

type QWordArray = array of QWord;
function GetDels(a:QWord): QWordArray;
var
	i, j: QWord;
	ar: QWordArray;
begin
	i:=2;
	j:=0;
	while (i*i <= a) do 
	begin
		if (a mod i) = 0 then
		begin
			a := a div i;
			j += 1;
			SetLength(ar, j);
			ar[j - 1] := i;
		end
		else
			i += 1
	end;
	if a > 1 then
	begin
		SetLength(ar, j+1);
		ar[j] := a;
	end;

	GetDels := ar;
end;

var
	old, a, b, q, i, c, j, n: QWord;
	dels, delsCount, delsKey, count: QWordArray;
begin
  	assign(input,'input.txt'); reset(input); assign(output,'output.txt'); rewrite (output);
  	
	read(a,b,q);
	dels := GetDels(q);

	n := 0;
	old := dels[0]+1;
	i := 0;
	while i < length(dels) do 
	begin
		if dels[i] <> old then
		begin
			n += 1;
			SetLength(delsCount,n);
			SetLength(delsKey,n);
			delsKey[n-1] := dels[i];
			delsCount[n-1] := 1;
			old:=dels[i];
		end
		else
			delsCount[n-1] += 1;
		i+=1;
	end;



	SetLength(count,n);
	i := a;
	while i <= b do
	begin
		j:=0;
		while j<n do 
		begin
			c := i;
			while c mod delsKey[j] = 0 do
			begin
				count[j] += 1;
				c := c div delsKey[j];
			end;
			j+=1;
		end;
		i += 1;
	end;


	SetLength(dels, n);

	c := high(qword);
	i := 0;
	while i<n do
	begin
		dels[i] := count[i] div delsCount[i];

		if c > dels[i] then 
			c := dels[i];
		i+=1;
	end;
	writeln(c);

  	close(input);
	close(output); 
end.