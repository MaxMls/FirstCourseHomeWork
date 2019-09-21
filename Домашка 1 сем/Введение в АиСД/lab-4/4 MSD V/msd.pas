type
	UInt = QWord;
	UIntArray = array of UInt;



procedure Sort(var arr: UIntArray);
procedure MSD(l, r, d: Integer);
const
	k = 255;
	m = SizeOf(UInt); // максимально разрядов в числах
var
	j, i: Integer;
	cnt: array of Word;
	c: UIntArray;
begin
	if (d > m) or (l >= r) then
		exit;

	SetLength(c, Length(arr));
	SetLength(cnt, k+1); // 256 возможных значений разрядов

	for i := l to r do
	begin
		j := arr[i] shr ((m - d)*8) and k;
		cnt[j] += 1;
	end; // Подсчет количества одинаковых разрядов


	for j := 1 to k do
		cnt[j] += cnt[j - 1]; // порядок значений разрядов в конечном отрeзке массива

	//for i := 0 to Length(cnt) - 1 do write(i,': ',cnt[i], ' '); writeln;

	for i := l to r do
	begin
		j := arr[i] shr ((m - d)*8) and k;
		c[l + cnt[j] - 1] := arr[i];
		cnt[j] -= 1;
	end;

	for i := l to r do
		arr[i] := c[i];

	// Сортировка по остальным разрядам
	MSD(l, l + cnt[0] - 1, d + 1);
	for i := 1 to k do
		MSD(l + cnt[i - 1], l + cnt[i] - 1, d + 1);

end;
begin
	MSD(0, Length(arr) - 1, 1);
end;


var
	a: UIntArray;
	i: Integer;
begin
	
	SetLength(a, 0);
	
	// Ввод
	assign(input, 'input.txt'); reset(input);
	while not eof(input) do
	begin
		SetLength(a, Length(a) + 1);
		read(a[Length(a)-1]);
	end;
	close(input);

	// Вывод до
	for i := 0 to Length(a) - 1 do write(a[i], ' '); writeln;

	Sort(a);

	// Вывод после
	for i := 0 to Length(a) - 1 do write(a[i], ' '); writeln;
end.