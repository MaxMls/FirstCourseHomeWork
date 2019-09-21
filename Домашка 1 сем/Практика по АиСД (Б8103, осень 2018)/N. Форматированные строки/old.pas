{$H+}
type
	TStyle = array of Boolean;
	TString = array of Char;
var
	i, len1, len2: Integer;
	text: String;
	stringArray1, stringArray2: TString; //Строка без тегов и пробелов
	iArray1, iArray2: TStyle; // маска курсива
	bArray1, bArray2: TStyle; // маска жирного


function StringParse(const text: String; var stringArray: TString; var iArray: TStyle; var bArray: TStyle): Boolean;
var
	len, j,c: Integer;
	i, b: Boolean;
begin
	len := length(text);
	i := false;
	b := false;
	j := 1;
	c := 0;

	while j < len do 
	begin
		if (text[j] = '<') then
		begin
			if text[j + 1] = '/' then 
			begin
				if text[j + 2] = 'i' then i := false //    </i>i
				else b := false;
				j += 4;
			end
			else
			begin
				if text[j + 1] = 'i' then i := true
				else b := true;
				j += 3;
			end;
			continue;
		end;

		if (text[j] = ' ') then 
		begin
			j += 1;
			continue;
		end;
		

		SetLength(stringArray, c + 1);
		SetLength(iArray, c + 1);
		SetLength(bArray, c + 1);

		stringArray[c] := text[j];
		iArray[c] := i;
		bArray[c] := b;
		j += 1;
		c += 1;
	end;
	exit(true);	
end;


procedure Stop();
begin
	close(input); close(output); halt();
end;
	
begin
	assign(input,'input.txt'); reset(input);// assign(output,'output.txt'); rewrite (output);

	readln(text);
	StringParse(text, stringArray1, iArray1, bArray1);
	readln(text);
	StringParse(text, stringArray2, iArray2, bArray2);	

	len1 := length(stringArray1);
	len2 := length(stringArray2);


	if len1 <> len2 then // Разная длина - разные строки
	begin
		writeln(0);
		Stop();
	end;



	for i := 0 to len1 - 1 do // Сравнение строк посимвольно
		if Upcase(stringArray1[i]) <> Upcase(stringArray2[i]) then
		begin
			writeln(0);
			Stop();
		end;

	for i := 0 to len1 - 1 do // Сравнение стилей
		if (iArray1[i] <> iArray2[i]) OR (bArray1[i] <> bArray2[i]) then
		begin
			writeln(1);
			Stop();
		end;


	writeln(2);

	Stop();
end.