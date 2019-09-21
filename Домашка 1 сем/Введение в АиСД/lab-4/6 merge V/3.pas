// O(n*log(n))



type
	TElement = record
		userName: String;
		count: Integer;
		age: Byte;
		gender: Byte;
		weight: QWord;
	end;

	TArray = array of TElement;
	TPriority = array[0..4] of Byte;
	TCmp = function (const a, b: TElement): Smallint;

const
	pri: TPriority = (0, 1, 2, 3, 4);


function cmpUserName(const a, b: TElement): Smallint;
begin
	if a.userName = b.userName then exit(0) else if a.userName < b.userName then exit(-1) else exit(1);
end;

function cmpCount(const a, b: TElement): Smallint;
begin
	if a.count = b.count then exit(0) else if a.count < b.count then exit(-1) else exit(1);
end;

function cmpAge(const a, b: TElement): Smallint;
begin
	if a.age = b.age then exit(0) else if a.age < b.age then exit(-1) else exit(1);
end;

function cmpGender(const a, b: TElement): Smallint;
begin
	if a.gender = b.gender then exit(0) else if a.gender < b.gender then exit(-1) else exit(1);
end;

function cmpWeight(const a, b: TElement): Smallint;
begin
	if a.weight = b.weight then exit(0) else if a.weight < b.weight then exit(-1) else exit(1);
end;


const
	FIELDS: array[0..4] of TCmp = (@cmpUserName, @cmpCount, @cmpAge, @cmpGender, @cmpWeight);

function Compare(const a, b: TElement; const p: TPriority): Smallint;
var 
	comp: Smallint;
	n: Byte;
begin
	for n in p do
	begin
		comp := FIELDS[n](a,b);
		if comp <> 0 then 
			exit(comp);
	end;
end;



procedure Merge(var A: TArray; const first, last: integer; const pri: TPriority);
var 
	middle, start, final, j: Integer;
	tempArr: TArray;
begin
	middle := (first + last) div 2;
	start := first; // начало левой части
	final := middle + 1; // начало правой части

	SetLength(tempArr, Length(a));

	for j := first to last do
		if (start <= middle) and ((final > last) or (Compare(A[start], A[final], pri) = -1)) then
		begin
			tempArr[j] := A[start];
			start += 1;
		end
		else
		begin
			tempArr[j] := A[final];
			final += 1;
		end;

	for j := first to last do 
		A[j] := tempArr[j];
end;


procedure MergeSort(var A: TArray; const first, last: integer; const pri: TPriority);
begin
	if first < last then
	begin
		MergeSort(A, first, (first + last) div 2, pri); // левую
		MergeSort(A, (first + last) div 2 + 1, last, pri); // правую
		Merge(A, first, last, pri);
	end;
end;


// Сортировка по убыванию
procedure Sort(var A: TArray; const pri: TPriority);
begin
	MergeSort(A, 0, Length(A) - 1, pri);
end;


procedure WriteEl(el: TElement);
begin
	writeln('userName:', el.userName, ', count:', el.count, ', age:', el.age, ', gender:', el.gender, ', weight:', el.weight);
end;



var 
	a, b: TElement;
	arr: TArray;
	i: Integer;
	s: String;
begin
	SetLength(arr, 4);

	arr[0].userName	:= 'Ivan';
	arr[0].count	:= 5;
	arr[0].age		:= 10;
	arr[0].gender	:= 5;
	arr[0].weight	:= 5;

	arr[1].userName	:= 'Anna';
	arr[1].count	:= 10;
	arr[1].age		:= 5;
	arr[1].gender	:= 5;
	arr[1].weight	:= 5;

	arr[2].userName	:= 'Anna';
	arr[2].count	:= 9;
	arr[2].age		:= 6;
	arr[2].gender	:= 5;
	arr[2].weight	:= 30;

	arr[3].userName	:= 'Zina';
	arr[3].count	:= 9;
	arr[3].age		:= 50;
	arr[3].gender	:= 5;
	arr[3].weight	:= 90;

	Sort(arr, pri);


	for i := 0 to Length(arr) - 1 do WriteEl(arr[i]);
end.