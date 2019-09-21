type
	UInt = QWord;
	UIntArray = array of UInt;


procedure LSDq(var arr: UIntArray);
var
	a, a2: ^UIntArray;
	c: Pointer;
	iter, i, n: Integer;
	t, j: Byte;
begin
	a := @arr;
	new(a2);
	SetLength(a2^, Length(arr));

	// Сортировка
	// Какой по счету байт слева с 1 = SizeOf(UInt) - j
	for j in [0..SizeOf(UInt)-1] do // По разрядам
	begin
		iter := 0;
		for t in [0..255] do // перебор возможных значений разрядов
			for i in [0..Length(a^)-1] do // По массиву чисел
			begin
				//n +=1;
				if a^[i] shr j * 8 and 255 = t then
				begin
					a2^[iter] := a^[i];
					iter += 1;
				end;
			end;
		c := a; a := a2; a2 := c;
	end;
	//writeln(n);	
end;


{ В качестве примера рассмотрим сортировку чисел. Как говорилось выше, в такой ситуации в качестве устойчивой сортировки применяют сортировку подсчетом, так как обычно количество различных значений разрядов не превосходит количества сортируемых элементов. Ниже приведен псевдокод цифровой сортировки, которой подается массив A размера n m-разрядных чисел . Сам по себе алгоритм представляет собой цикл по номеру разряда, на каждой итерации которого элементы массива A размещаются в нужном порядке во вспомогательном массиве B. Для подсчета количества объектов, i-й разряд которых одинаковый, а затем и для определения положения объектов в массиве B используется вспомогательный массив C. Функция digit(x,i) возвращает i-й разряд числа x. Также считаем, что значения разрядов меньше k. }

procedure LSD2(var arr: UIntArray);
var
	c: array [0..$FF] of QWord;
	b, a, w: ^UIntArray;
	j, d, count, tmp: QWord;
	i: Word;
begin
	a := @arr;
	new(b); SetLength(b^, Length(arr));

	for i in [0..SizeOf(UInt)-1] do
	begin
		
		for j in [0..$FF] do c[j] := 0;    

		for j in [0..Length(arr)-1] do
		begin
			d := a^[j] shr i * 8 and $FF;
			c[d] += 1;
		end;

		count := 0;
		for j in [0..$FF] do
		begin
			tmp := c[j];
			c[j] := count;
			count += tmp;
		end;

		for j in [0..Length(arr)-1] do
		begin
			d := a^[j] shr i * 8 and $FF;
			b^[c[d]] := a^[j];
			c[d] += 1;
		end;

		w := b; b := a; a := w;
	end;
end;
// ' '.join([str(r.randint(0, 18446744073709551616)) for _ in range(0, 100)])

procedure LSD(var arr: UIntArray);
procedure MSD(l, r, d: Integer);
const
	k = 255;
	m = SizeOf(UInt);
var
	j, i, p: Integer;
	cnt: array of Word;
	c: UIntArray;
begin
	if (d > m) or (l >= r) then
		exit;

	SetLength(c, Length(arr));
	SetLength(cnt, k+1);
	p:=0;
	for i := l to r do
	begin
		j := arr[i] shr ((m - d)*8) and k;
		cnt[j] += 1;
		p += 1;
	end; // Подсчет количества одинаковых разрядов

	//writeln(p);

	for j := 1 to k do
		cnt[j] += cnt[j - 1]; // порядок разрядов в конечном массиве

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


// 644 832 743 654 235 4 3 210 4000 999 2999 1999 3999 4095 4096


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
	// Вывод
	for i := 0 to Length(a) - 1 do write(a[i], ' '); writeln;
	LSD(a);

	// Вывод
	for i := 0 to Length(a) - 1 do write(a[i], ' '); writeln;
end.