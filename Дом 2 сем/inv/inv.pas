type
	TArray = array of Int64;

var
	count: QWord;

function inc(var n: Int64): Int64;
begin
	n += 1;
	exit(n-1);
end;

// Сортировка по убыванию
procedure Sort(var a: TArray);
	var
		res: TArray;

	procedure Merge(left, mid, right: Int64);
	var 
		i, j, k: Int64;
	begin
		i := left;
		j := mid;
		k := left;

		while (i <= mid - 1) and (j <= right) do
			if a[i] <= a[j] then
				res[inc(k)] := a[inc(i)]
			else
			begin
				res[inc(k)] := a[inc(j)];
				count += mid - i; 
			end;


		while (i <= mid - 1) do
        	res[inc(k)] := a[inc(i)];
        while (j <= right) do
        	res[inc(k)] := a[inc(j)];

        j := left;
		while j <= right do a[j] := res[inc(j)];
		
	end;





	procedure MergeSort(left, right: Int64);
	var
		mid: Int64;
	begin
		if left < right then
		begin
			mid := (right+left) div 2;

			MergeSort(left, mid); // левую
			MergeSort(mid + 1, right); // правую
			Merge(left, mid + 1, right);
		end;
	end;
begin
	SetLength(res, Length(a));
	MergeSort(0, Length(a) - 1);
end;

var
	a: TArray;
	i, n: Longint;
begin
	assign(input,'input.txt'); reset(input);
	read(n);
	SetLength(a, n);
	for i := 0 to n - 1 do read(a[i]);
	close(input);

	Sort(a);
	
	assign(output, 'output.txt'); rewrite(output);
	writeln(count);
end.