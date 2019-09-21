var
	n, m, i, j, sum, chsum: Integer;
	arr: array of array of Integer;
begin
	//assign(input,'input.txt'); reset(input); assign(output,'output.txt'); rewrite (output);
	writeln('Кол. столбцов, кол. строк, сумма элементов по модулю в строке: ');
	read(n, m, sum);
	SetLength(arr, n, m);

	writeln('Массив: ');
	for i := 0 to n - 1 do
	begin
		for j := 0 to m - 1 do
		begin
			read(arr[i,j]);
		end;
	end;

	writeln('Вывод:');


	for i := 0 to n - 1 do
	begin
		chsum := 0;
		for j := 0 to m - 1 do
			chsum += arr[i, j];

		if abs(chsum) < sum then 
			for j := 0 to m - 1 do
				write(arr[i,j], ' ');

		writeln();
	end;


		
end.



