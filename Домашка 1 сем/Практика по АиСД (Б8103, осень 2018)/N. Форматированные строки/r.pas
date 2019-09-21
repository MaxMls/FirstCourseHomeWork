{$H+}

function nextState(var i, b, p: QWord; const text: String): Boolean;
begin
	while true do
		if p > length(text) then
		begin
			p := 0;
			break;
		end
		else if (p < 1) OR (text[p] = ' ') then 
			p += 1
		else if text[p] = '<' then
			if text[p + 1] = '/' then 
			begin
				if text[p + 2] = 'i' then 
					i -= 1
				else 
					b -= 1;
				p += 4;
			end
			else
			begin
				if text[p + 1] = 'i' then 
					i += 1
				else 
					b += 1;
				p += 3;
			end
		else break;
end;

// тест 17 20 25
// ждет  0  0  0
// возв  2  2  2

var
	text1, text2: String;
	pos1, pos2, i1, i2, b1, b2, erStyle, erLenSym: QWord;
	ch: Char;
	nl: Boolean;
	F: Text;
	buf: array[0..8] of Char;  
begin
	assign(F,'input.txt'); SetTextBuf(F, buf); reset(F);
	nl := false;

	while not eof(F) do
	begin
		read(F, ch);
		while (ch = #13) or (ch = #10) do 
		begin
			nl := true;
			read(F, ch);
		end;

		if nl then
			text2 += ch
		else
			text1 += ch; 
	end;
	close(F);


	pos1 := 0; pos2 := 0; i1 := 0; i2 := 0; b1 := 0; b2 := 0; erLenSym := 0; erStyle := 0;


	while true do
	begin
		nextState(i1, b1, pos1, text1);
		nextState(i2, b2, pos2, text2);

		if (pos1 = 0) AND (pos2 = 0) then // обе строки закончились
			break
		else if (pos1 = 0) OR (pos2 = 0) OR (lowercase(text1[pos1]) <> lowercase(text2[pos2])) then // разные буквы
			erLenSym += 1
		else if ((i1 > 0) <> (i2 > 0)) OR ((b1 > 0) <> (b2 > 0)) then // Разные стили
			erStyle += 1;

		pos1 += 1;
		pos2 += 1;
	end;

	assign(output,'output.txt'); rewrite(output);

	if erLenSym > 0 then writeln(0)
	else if erStyle > 0 then writeln(1)
	else writeln(2);

	close(output);
end.