Uses SysUtils, DateUtils;
const
	NUMBER: Array [1..23] Of String = (
	'первое',
	'второе',
	'третье',
	'четвертое',
	'п€тое',
	'шестое',
	'седьмое',
	'восьмое',
	'дев€тое',
	'дес€тое',
	'одинадцатое',
	'двенадцатое',
	'тринадцатое',
	'четырнадцатое',
	'п€тнадцатое',
	'шетстнадцатое',
	'семнадцатое',
	'восемнадцатое',
	'дев€тнадцатое',
	'двадцатое',
	'двадцать',
	'тридцатое',
	'тридцать'
	);
	MONTH : Array [1..12] Of String = (
	'€нвар€',
	'феврал€',
	'марта',
	'апрел€',
	'ма€',
	'июн€',
	'июл€',
	'августа',
	'сент€бр€',
	'окт€бр€',
	'но€бр€',
	'декабр€'
		);
	YEAR_TH: Array [1..10] Of String = (
	'тыс€чный',
	'двухтыс€чный',
	'трехтыс€чный',
	'четырехтыс€чный',
	'п€титыс€чный',
	'шеститыс€чный',
	'семитыс€чный',
	'восьмитыс€чный',
	'дев€титыс€чный',
	'дес€титыс€чный'
	);
	YEAR_THS: Array [1..10] Of String = (
	'одна тыс€ча',
	'две тыс€чи',
	'три тыс€чи',
	'четыре тыс€чи',
	'п€ть тыс€ч',
	'шесть тыс€ч',
	'семь тыс€ч',
	'восемь тыс€ч',
	'дев€ть тыс€ч',
	'дес€ть тыс€ч'
		);
	YEAR_HUN: Array [1..9] Of String = (
	'сотый',
	'двухсотый',
	'трехсотый',
	'четырехсотый',
	'п€тисотый',
	'шестисотый',
	'семисотый',
	'восьмисотый',
	'дев€тисотый'
		);
	YEAR_HUNS: Array [1..9] Of String = (
	'сто',
	'двести',
	'триста',
	'четыреста',
	'п€тьсот',
	'шетьсот',
	'семьсот',
	'восемьсот',
	'дев€тьсот'
		);
	YEAR_DE: Array [1..9] Of String = (
	'дес€тый',
	'двадцатый',
	'тридцатый',
	'сороковой',
	'п€тидес€тый',
	'шестидес€тый',
	'семидес€тый',
	'восьмидес€тый',
	'дев€ностый'
		);
	YEAR_DES: Array [2..9] Of String = (
	'двадцать',
	'тридцать',
	'сорок',
	'п€тьдес€т',
	'шестьдес€т',
	'семдес€т',
	'восемдес€т',
	'дев€носто'
		);
	YEAR_SI: Array [1..19] Of String = (
	'первый',
	'второй',
	'третий',
	'четвертый',
	'п€тый',
	'шестой',
	'седьмой',
	'восьмой',
	'дев€тый',
	'',
	'одинадцатый',
	'двенадцатый',
	'тринадцатый',
	'четырнадцатый',
	'п€тнадцатый',
	'шестнадцатый',
	'семнадцатый',
	'восемнадцатый',
	'дев€тнадцатый'
		);

function dateToString(d, m, y: Integer): String;
var
	s: String;
begin
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
		if d <= 20 then
			s := NUMBER[d]
		else if d < 30 then
			s := NUMBER[21] + ' ' + NUMBER[d mod 10]
		else if d = 30 then
			s := NUMBER[22]
		else
			s := NUMBER[23] + ' ' + NUMBER[d mod 10];

		s += ' ' + MONTH[m] + '. ';

		// “ыс€чи
		if y mod 1000 = 0 then
			s += YEAR_TH[y div 1000]
		else
		begin
			if y > 1000 then
				s += YEAR_THS[y div 1000] + ' ';
			// —отни
			if y mod 100 = 0 then
				s += YEAR_HUN[(y mod 1000) div 100]
			else
			begin
				if y mod 1000 > 100 then
					s += YEAR_HUNS[(y mod 1000) div 100] + ' ';
				// ƒес€тки
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