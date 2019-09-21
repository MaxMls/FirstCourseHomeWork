const
	MONTH : Array [1..12] Of Integer = (31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
 	MONTH_SUM : Array [1..12] Of Integer = (0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334);
	DAY_NAMES : Array [0..6] Of String = ('�������', '�����������', '�����������', '�������', '�����', '�������', '�������');
var
	d, m, y, yc, dc: QWord;
	leap: Boolean;
begin
	read(d,m,y);

	if(m<1) OR (m>12) then
	begin
		writeln('�������� �������� ������');
		exit;
	end;
	//15 10 1582 ������a
	if  ((y < 1582) OR ((y = 1582) AND ((m < 10) OR ((m = 10) AND (d < 15)))))  then
	begin
		writeln('�������� �������� ����');
		exit;
	end;

	leap := (y mod 400 = 0) OR ((y mod 4 = 0) AND (y mod 100 <> 0));

	if ((NOT leap) AND (d > MONTH[m])) OR (d < 1) OR ((m = 2) AND leap AND ( d > 29)) then
	begin
		writeln('�������� �������� ���');
		exit;
	end;

	// ���������� ���������� ��� �� ���� y, �� ������� ��� y
	yc := (y-1) div 400 + (y-1) div 4 - (y-1) div 100;

	// ���������� ���� �� ���� d m y
	// (y - yc) * 365 + yc * 366 + (m > 2 AND leap) + MONTH_SUM[m] + d;
	dc := yc + y * 365 + Ord((m > 2) AND leap) + MONTH_SUM[m] + d;

	writeln(DAY_NAMES[dc mod 7]);
end.
