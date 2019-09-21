const
	accuracy = 0.0000001;
var
	n: Integer;
	input, max, min, sq: Double;
	minus: Boolean;

{ function Pow(a, b:Double): Double;
var
	p: Double;
begin
	p := 1;
	while b > 0 do 
	begin
		p := p * a;
		b := b - 1;
	end;
	Pow := p;
end; }

function Pow(a: Double; n:Integer): Double;
var
	b: Double;
begin
	if a = 0 then
		Pow := 0
	else if n = 0 then
		Pow := 1
	else
	begin
		b := (n mod 2) * a;
		a := Pow(a, n div 2);
		a := a * a;
		if b <> 0 then
			a *= b;
		Pow := a;
	end;
end;

begin
	writeln('Введите число и корень');
	read(input,n);
	minus := input < 0;
	input := abs(input);
	sq := input;
	min := 1;
	max := input;
	if input < 1 then
	begin
		min := max;
	 	max := 1;
	end;

	if minus and (n mod 2 = 0) then 
		writeln('Вычислить корень невозможно')
	else
	begin
		if n <= 0 then
			sq := 1 / Pow(input, abs(n))
		else
		begin
			while (max - min) > accuracy do 
			begin
				sq := ((max - min) / 2) + min;
				if(Pow(sq, n) > input) then
					max := sq
				else
					min := sq
			end;
		end;
		writeln('Корень:');
		if minus then 
			sq *= -1
		else 
			writeln((-1*sq):0:5);
		writeln(sq:0:5);
	end;
end.