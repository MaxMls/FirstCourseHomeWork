const
	STRING_LEN = 3;

type
	TArray = array of String[STRING_LEN];

var
	a: TArray;

function inc(var n: Integer): Integer;
begin
	n += 1;
	exit(n-1);
end;


procedure Sort(var a: TArray; k: Integer);
var 
	buckets: array [0..255] of TArray;
	i, j: Integer;
begin
	for i := 0 to Length(a) - 1 do
	begin
		SetLength(buckets[ord(a[i][k])], Length(buckets[ord(a[i][k])]) + 1);
		buckets[ord(a[i][k])][Length(buckets[ord(a[i][k])]) - 1] := a[i];
	end;

	if k < STRING_LEN then
		for i in [0..255] do
    		Sort(buckets[i], k + 1);

    k := 0;
    for i in [0..255] do
    	for j := 0 to Length(buckets[i]) - 1 do
    		a[inc(k)] := buckets[i][j];
end;


var 
	i, n: Integer;
begin
	// Ввод
	assign(input, 'input.txt'); reset(input);
	readln(n);
	SetLength(a, n);
	for i := 0 to n - 1 do readln(a[i]);
	close(input);

	Sort(a, 1);

	// Вывод
	assign(output, 'output.txt'); rewrite(output);
	for i := 0 to n - 1 do writeln(a[i]);
	close(output);
end.
