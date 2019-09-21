const
	MONTH : Array [1..12] Of Integer = (31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
	MONTH_LEAP : Array [1..12] Of Integer = (31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
	DAY_NAMES : Array [1..7] Of String = ( 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье');
var
	d, m, y, daysInMonth: Integer;

function WhatDay(Year: Integer; Month: Integer; Day: Integer):integer;
var a, y, m: integer;
begin // 20 10 2018
	a := (14 - Month) div 12;
	y := year - a;
	m := month + 12 * a;
	WhatDay := (day + y + y div 4 - y div 100 + y div 400 + (31 * m) div 12) mod 7;
end;

begin
	read(d,m,y);

	if(m<1) OR (m>12) then
	begin
		writeln('Неверное значение месяца');
		exit;
	end;
	
	daysInMonth := MONTH[m];
	if (((y mod 4) = 0) AND ((y mod 100) <> 0)) OR ((y mod 400) = 0) then
		daysInMonth := MONTH_LEAP[m];		


	if (d < 1) OR (d > daysInMonth) then
	begin
		writeln('Неверное значение дня');
		exit;
	end;

	writeln(d);
	writeln(m);
	writeln(y);

	writeln(DAY_NAMES[WhatDay(d,m,y)]);


	

	end.