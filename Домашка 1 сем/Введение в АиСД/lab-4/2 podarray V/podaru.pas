// O(n)
//тз Идти вправо по массиву пока последний элемент стабильно меньше или больше всех прошлых, 
// иначе сбросить итератор на текущий

const
	a: array[0..7] of Integer = (0, 5, 4, 3, -2, -3, -4, 0);

var
	il, ir, i, // стенки
	ilMax, irMax // Максимальный упорядоченный
	:Integer;
begin

	il := 0; ir := 0;

	for i := 0 to Length(a) do // На уменьшение
	begin
		if a[ir] < a[i] then
		begin
			if (ir - il) > (irMax - ilMax) then
			begin
				irMax := ir;
				ilMax := il;
			end;
			il := i;
		end;
		ir := i;
	end;


	writeln(' l:',ilMax, ' r:', irMax, ' len:', irMax - ilMax);
	
end.