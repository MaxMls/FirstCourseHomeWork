Uses SysUtils, DateUtils;
var
	d, m, y: Longint;
begin
	read(d,m,y);
	if (y < 1) OR (y > 9999)  then
	begin
		writeln('������ � �������� ����');		
	end
	else if (m < 1) OR (m > 12) then 
	begin
		writeln('������ � �������� ������');		
	end
	else if (d < 1) OR (d > DaysInMonth(EncodeDate(y, m, 1))) then 
	begin
		writeln('������ � �������� ���');		
	end
	else
	begin
		writeln(LongDayNames[DayOfWeek(EncodeDate(y, m, d))]);
	end
end.