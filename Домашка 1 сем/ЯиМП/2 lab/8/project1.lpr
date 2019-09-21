Uses SysUtils, DateUtils;
const
	NUMBER: Array [1..23] Of String = ('первое','второе','третье','четвертое','пятое','шестое','седьмое','восьмое','девятое','десятое','одинадцатое','двенадцатое','тринадцатое','четырнадцатое','пятнадцатое','шетстнадцатое','семнадцатое','восемнадцатое','девятнадцатое','двадцатое','двадцать','тридцатое','тридцать');
	MONTH : Array [1..12] Of String = ('января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря');
	YEAR_TH: Array [1..10] Of String = ('тысячный','двухтысячный','трехтысячный','четырехтысячный','пятитысячный','шеститысячный','семитысячный','восьмитысячный','девятитысячный','десятитысячный');
	YEAR_THS: Array [1..10] Of String = ('одна тысяча','две тысячи','три тысячи','четыре тысячи','пять тысяч','шесть тысяч','семь тысяч','восемь тысяч','девять тысяч','десять тысяч');
	YEAR_HUN: Array [1..9] Of String = ('сотый','двухсотый','трехсотый','четырехсотый','пятисотый','шестисотый','семисотый','восьмисотый','девятисотый'	);
	YEAR_HUNS: Array [1..9] Of String = ('сто','двести','триста','четыреста','пятьсот','шетьсот','семьсот','восемьсот','девятьсот');
	YEAR_DE: Array [1..9] Of String = ('десятый','двадцатый','тридцатый','сороковой','пятидесятый','шестидесятый','семидесятый','восьмидесятый','девяностый');
	YEAR_DES: Array [2..9] Of String = ('двадцать','тридцать','сорок','пятьдесят','шестьдесят','семдесят','восемдесят','девяносто');
	YEAR_SI: Array [1..19] Of String = ('первый','второй','третий','четвертый','пятый','шестой','седьмой','восьмой','девятый','','одинадцатый','двенадцатый','тринадцатый','четырнадцатый','пятнадцатый','шестнадцатый','семнадцатый','восемнадцатый','девятнадцатый');

function dateToString(d, m, y: Integer): String;
var
	s: String;
begin
	if (y < 1) OR (y > 9999) then
		writeln('Ошибка в значении года')
	else if (m < 1) OR (m > 12) then
		writeln('Ошибка в значении месяца')
	else if (d < 1) OR (d > DaysInMonth(EncodeDate(y, m, 1))) then
		writeln('Ошибка в значении дня')
	else
	begin
		if d <= 20 then s := NUMBER[d]
		else if d < 30 then s := NUMBER[21] + ' ' + NUMBER[d mod 10]
		else if d = 30 then s := NUMBER[22]
		else s := NUMBER[23] + ' ' + NUMBER[d mod 10];
		s += ' ' + MONTH[m] + '. ';
		if y mod 1000 = 0 then 
			s += YEAR_TH[y div 1000]
		else
		begin
			if y > 1000 then
				s += YEAR_THS[y div 1000] + ' ';
			if y mod 100 = 0 then
				s += YEAR_HUN[(y mod 1000) div 100]
			else
			begin
				if y mod 1000 > 100 then
					s += YEAR_HUNS[(y mod 1000) div 100] + ' ';
				if y mod 10 = 0 then // Десятки
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
		s += ' год';
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