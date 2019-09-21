

function Karpa(const t: String; var f: Text): Boolean;
var
	ht, hs: QWord;
	i: Integer;
	c: Char;
	s: array of Char;
	start, // Íà÷àëî áóôåğà ïîäñòğîêè
	len: Integer; // äëèíà ïîäñòğîêè

begin
	ht := 0; hs := 0; start := 0; len := Length(t);
	SetLength(s, len);

	for i := 1 to len do
	begin
		ht += ord(t[i]);
		read(f, c);
		hs += ord(c);
		s[i - 1] := c;
	end;


	while true do // Ñäåëàòü áóôåğ òåêñòà áåç delete
	begin

		if (ht = hs) then 
		begin
			for i := start to start + len - 1 do
				if s[i mod len] <> t[i - start + 1] then break;

		 	if i = start + len - 1 then exit(true);
		end;

		if eof(f) then exit(false);

		read(f, c);
		hs += ord(c) - ord(s[start]);
		s[start] := c;
		start := (start + 1) mod len; // ñäâèã âïğàâî
	end;
	
end;

var
	Buf: Array[1..65355] of Byte;
begin
	assign(input, 'input1.txt'); 
	SetTextBuf(input, Buf);
	reset(input);

	writeln(Karpa('uvmkgdkhkqpisqqebduyujcnxgnpbhuyunwtecxfqiwleodã', input));
	
end.