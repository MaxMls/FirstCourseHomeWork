Uses SysUtils, DateUtils;
const
	NUMBER: Array [1..23] Of String = (
	'������',
	'������',
	'������',
	'���������',
	'�����',
	'������',
	'�������',
	'�������',
	'�������',
	'�������',
	'�����������',
	'�����������',
	'�����������',
	'�������������',
	'�����������',
	'�������������',
	'�����������',
	'�������������',
	'�������������',
	'���������',
	'��������',
	'���������',
	'��������'
	);
	MONTH : Array [1..12] Of String = (
	'������',
	'�������',
	'�����',
	'������',
	'���',
	'����',
	'����',
	'�������',
	'��������',
	'�������',
	'������',
	'�������'
		);
	YEAR_TH: Array [1..10] Of String = (
	'��������',
	'������������',
	'������������',
	'���������������',
	'������������',
	'�������������',
	'������������',
	'��������������',
	'��������������',
	'��������������'
	);
	YEAR_THS: Array [1..10] Of String = (
	'���� ������',
	'��� ������',
	'��� ������',
	'������ ������',
	'���� �����',
	'����� �����',
	'���� �����',
	'������ �����',
	'������ �����',
	'������ �����'
		);
	YEAR_HUN: Array [1..9] Of String = (
	'�����',
	'���������',
	'���������',
	'������������',
	'���������',
	'����������',
	'���������',
	'�����������',
	'�����������'
		);
	YEAR_HUNS: Array [1..9] Of String = (
	'���',
	'������',
	'������',
	'���������',
	'�������',
	'�������',
	'�������',
	'���������',
	'���������'
		);
	YEAR_DE: Array [1..9] Of String = (
	'�������',
	'���������',
	'���������',
	'���������',
	'�����������',
	'������������',
	'�����������',
	'�������������',
	'����������'
		);
	YEAR_DES: Array [2..9] Of String = (
	'��������',
	'��������',
	'�����',
	'���������',
	'����������',
	'��������',
	'����������',
	'���������'
		);
	YEAR_SI: Array [1..19] Of String = (
	'������',
	'������',
	'������',
	'���������',
	'�����',
	'������',
	'�������',
	'�������',
	'�������',
	'',
	'�����������',
	'�����������',
	'�����������',
	'�������������',
	'�����������',
	'������������',
	'�����������',
	'�������������',
	'�������������'
		);

function dateToString(d, m, y: Integer): String;
var
	s: String;
begin
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
		if d <= 20 then
			s := NUMBER[d]
		else if d < 30 then
			s := NUMBER[21] + ' ' + NUMBER[d mod 10]
		else if d = 30 then
			s := NUMBER[22]
		else
			s := NUMBER[23] + ' ' + NUMBER[d mod 10];

		s += ' ' + MONTH[m] + '. ';

		// ������
		if y mod 1000 = 0 then
			s += YEAR_TH[y div 1000]
		else
		begin
			if y > 1000 then
				s += YEAR_THS[y div 1000] + ' ';
			// �����
			if y mod 100 = 0 then
				s += YEAR_HUN[(y mod 1000) div 100]
			else
			begin
				if y mod 1000 > 100 then
					s += YEAR_HUNS[(y mod 1000) div 100] + ' ';
				// �������
				if y mod 10 = 0 then
					s += YEAR_DE[(y mod 100) div 10]
				else
				begin
					if y mod 100 >= 20 then
					begin
						s += YEAR_DES[(y mod 100) div 10];
						if y mod 10 <> 0 then
							s += ' ' + YEAR_SI[y mod 10];
					end
					else
						s += YEAR_SI[y mod 100];
				end;
			end;
		end;

		s += ' ���';
		exit(s);

	end;	
end;


var
	date: String;
	dateAr: array of String;
begin
	assign(input,'input.txt'); reset(input); assign(output,'output.txt'); rewrite (output);


	while (not eof(input)) do
	begin
			readln(date);
			dateAr := date.Split('.');
			writeln(dateToString(StrToInt(dateAr[0]), StrToInt(dateAr[1]), StrToInt(dateAr[2])));
			
	end;

	close(input); close(output);

end.