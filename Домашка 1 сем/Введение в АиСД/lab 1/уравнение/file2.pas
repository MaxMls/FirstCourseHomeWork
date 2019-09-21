var
	a,b,c,a1,b1,x0,y0,x1,x2,y1,y2,nod,r,q: QWord;


function yes(x, l, r: integer): integer;
var
  c: Integer;
begin
  if l > r then
  begin
    yes := 0;
    Exit;
  end;
  c := (l + r) div 2;
  if a[c] = x then
    yes := c
  else if a[c] > x then
    yes := yes(x, l, c - 1)
  else
    yes := yes(x, c + 1, r);
end;

begin
	read(a,b,c);
	writeln(a,'X + ',b,'Y = ',c);


	a1 := a;
	b1 := b;
	while nod = 0 do
	begin
		if a1 mod b1 = 0 then
			nod := b1
		else if b1 mod a1 = 0 then
			nod := a1 
		else if b1 > a1 then
			b1 := b1 mod a1
		else if a1 > b1 then
			a1 := a1 mod b1
		else
			nod := a1;
	end;

	writeln(nod);



end.