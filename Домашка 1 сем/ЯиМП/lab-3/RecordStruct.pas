//Текущий модуль содержит процедуры для работы со стеком и очередью на основе массивов и связных списков;
//TODO: Требуется дописать реализацию отдельных методов!

unit RecordStruct;

{$mode objfpc}

interface

type
	TData = Integer;	//Тип элемента структуры;

	//Дескрипторы для стека и очереди:
	PArrayStack = ^TArrayStack;
	PArrayQueue = ^TArrayQueue;
	PListStack = ^TListStack;
	PListQueue = ^TListQueue;
	//...
	PListNode = ^TListNode;

	//Структура стека (на основе массива):
	TArrayStack = record
		size, maxSize: dword; data: array of TData;
	end;

	//Структура стека (на основе связных списков):
	TListStack = record
		head: PListNode;
		size: dword;
	end;

	//Структура очереди (на основе массива):
	TArrayQueue = record
		head, size, maxSize: dword;
		data: array of TData;
	end;

	//Структура очереди (на основе связных списков):
	TListQueue = record
		head: PListNode;
		tail: PListNode;
		size: dword;
	end;

	//Структура узла списка:
	TListNode = record
		next: PListNode;
		data: TData;
	end;

//Функции конструкторов (в случае неудачи возвращают nil):
function newArrayStack(maxSize: dword): PArrayStack;
function newArrayQueue(maxSize: dword): PArrayQueue;
function newListStack(): PListStack;
function newListQueue(): PListQueue;

//Функции деструкторов (после удаления структур открепляют связанные с ними указатели):
procedure delStack(var Stack: PArrayStack);
procedure delQueue(var Queue: PArrayQueue);
procedure delStack(var Stack: PListStack);
procedure delQueue(var Queue: PListQueue);

//Выполняют вставку элемента (в случае неудачи возвращают false, иначе --- true):
function pushData(Stack: PArrayStack; const data: TData): boolean;
function pushData(Queue: PArrayQueue; const data: TData): boolean;
function pushData(Stack: PListStack; const data: TData): boolean;
function pushData(Queue: PListQueue; const data: TData): boolean;

//Выполняют удаление элемента (в случае неудачи возвращают false, иначе --- true):
function popData(Stack: PArrayStack): boolean;
function popData(Queue: PArrayQueue): boolean;
function popData(Stack: PListStack): boolean;
function popData(Queue: PListQueue): boolean;

//Возвращают значение крайнего элемента (зависит от типа структуры):
function getData(Stack: PArrayStack): TData;
function getData(Queue: PArrayQueue): TData;
function getData(Stack: PListStack): TData;
function getData(Queue: PListQueue): TData;

//Возвращают число элементов:
function getSize(const Stack: PArrayStack): dword;
function getSize(const Queue: PArrayQueue): dword;
function getSize(const Stack: PListStack): dword;
function getSize(const Queue: PListQueue): dword;

implementation

function newArrayStack(maxSize: dword): PArrayStack;
var
	p: PArrayStack;
begin
	new(p);
	if(p = nil) then exit(nil);
	try SetLength(p^.data, maxSize);
	except 
		dispose(p);
		exit(nil);
	end;
	p^.size := 0;
	p^.maxSize := maxSize;
 	exit(p);
end;

function newArrayQueue(maxSize: dword): PArrayQueue;
var
	p: PArrayQueue;
begin
	new(p);
	if(p = nil) then exit(nil);
	try SetLength(p^.data, maxSize);
	except 
		dispose(p);
		exit(nil);
	end;
	p^.head := 0;
	p^.size := 0;
	p^.maxSize := maxSize;
	exit(p);
end;

function newListStack(): PListStack;
var
	p: PListStack;
begin
	new(p);
	if(p = nil) then exit(nil);
	p^.head := nil;
	p^.size := 0;
	exit(p);
end;

function newListQueue(): PListQueue;
var
	p: PListQueue;
begin
	new(p);
	if(p = nil) then exit(nil);
	p^.head := nil;
	p^.tail := nil;
	p^.size := 0;
	exit(p);
end;

procedure delStack(var Stack: PArrayStack);
begin
	dispose(Stack);
	Stack := nil;
end;

procedure delQueue(var Queue: PArrayQueue);
begin
	dispose(Queue);
	Queue := nil;
end;

procedure delStack(var Stack: PListStack);
begin
	while getSize(Stack) > 0 do
		popData(Stack);
	dispose(Stack);
	Stack := nil;
end;

procedure delQueue(var Queue: PListQueue);
begin
	while getSize(Queue) > 0 do
		popData(Queue);
	dispose(Queue);
	Queue := nil;
end;

function pushData(Stack: PArrayStack; const data: TData): boolean;
begin
	if Stack^.size >= Stack^.maxSize then exit(false);
	Stack^.data[Stack^.size] := data;
	Stack^.size += 1;
	exit(true);
end;

function pushData(Queue: PArrayQueue; const data: TData): boolean;
begin
	if Queue^.size >= Queue^.maxSize then exit(false);
	Queue^.data[(Queue^.size + Queue^.head) mod Queue^.maxSize] := data;
	Queue^.size += 1;
	exit(true);
end;

function pushData(Stack: PListStack; const data: TData): boolean;
var
	p: PListNode;
begin
	new(p);
	if p = nil then exit(false);
	p^.next := Stack^.head;
	Stack^.head := p;
	Stack^.head^.data := data;
	Stack^.size += 1;
	exit(true);
end;

function pushData(Queue: PListQueue; const data: TData): boolean;
var
	p: PListNode;
begin
	new(p);
	if p = nil then exit(false);
	p^.data := data;
	if Queue^.head <> nil then Queue^.head^.next := p
	else Queue^.tail := p;
	Queue^.head := p;
	Queue^.size += 1;
	exit(true);
end;

function popData(Stack: PArrayStack): boolean;
begin
	if Stack^.size = 0 then exit(false);
	Stack^.size -= 1;
	exit(true); 
end;

function popData(Queue: PArrayQueue): boolean;
begin
	if Queue^.size = 0 then exit(false);
	Queue^.head := (Queue^.head+1) mod Queue^.maxSize;
	Queue^.size -= 1;
	exit(true); 
end;

function popData(Stack: PListStack): boolean;
var
	p: PListNode;
begin
	if(Stack^.size = 0) then exit(false);
	p := Stack^.head;
	Stack^.head := Stack^.head^.next;
	Stack^.size -= 1;
	dispose(p);
	exit(true);
end;

function popData(Queue: PListQueue): boolean;
var
	p: PListNode;
begin
	if(Queue^.size = 0) then exit(false);
	p := Queue^.tail^.next;
	dispose(Queue^.tail);
	Queue^.tail := p;
	Queue^.size -= 1;
	exit(true);
end;

function getData(Stack: PArrayStack): TData;
begin
	if Stack^.size = 0 then exit(0);
	exit(Stack^.data[Stack^.size - 1]); 
end;

function getData(Queue: PArrayQueue): TData;
begin
	if Queue^.size = 0 then exit(0);
	exit(Queue^.data[Queue^.head]);
end;

function getData(Stack: PListStack): TData;
begin
	if Stack^.size = 0 then exit(0);
	exit(Stack^.head^.data);
end;

function getData(Queue: PListQueue): TData;
begin
	if Queue^.size = 0 then exit(0);
	exit(Queue^.tail^.data);
end;

function getSize(const Stack: PArrayStack): dword;
begin
	exit(Stack^.size);
end;

function getSize(const Queue: PArrayQueue): dword;
begin
	exit(Queue^.size);
end;

function getSize(const Stack: PListStack): dword;
begin
	exit(Stack^.size);
end;

function getSize(const Queue: PListQueue): dword;
begin
	exit(Queue^.size);
end;

end.
