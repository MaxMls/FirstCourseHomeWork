Uses SysUtils, DateUtils;
var
	d, m, y: Longint;
begin
	read(d,m,y);
	if (y < 1) OR (y > 9999)  then
	begin
		writeln('ќшибка в значении года');		
	end
	else if (m < 1) OR (m > 12) then 
	begin
		writeln('ќшибка в значении мес€ца');		
	end
	else if (d < 1) OR (d > DaysInMonth(EncodeDate(y, m, 1))) then 
	begin
		writeln('ќшибка в значении дн€');		
	end
	else
	begin
		writeln(LongDayNames[DayOfWeek(EncodeDate(y, m, d))]);
	end
end.