//Текущий модуль содержит классы для работы со стеком и очередью на основе массивов и связных списков;
//TODO: Требуется дописать реализацию отдельных методов!

unit ClassStruct;

{$mode objfpc}
{$inline on}

interface

type
	TData = Integer;	//Тип элемента структуры;

	//Абстрактный класс для стека и очереди:
	TClassStruct = class
	protected
		_size: dword;	//Общее число элементов;
	public
		//Выполняет вставку элемента (в случае неудачи возвращает false, иначе --- true):
		function Push(const data: TData): boolean; virtual; abstract;
		//Выполняет удаление элемента (в случае неудачи возвращает false, иначе --- true):
		function Pop(): boolean; virtual; abstract;
		//Возвращает значение крайнего элемента (зависит от типа структуры):
		function Get(): TData; virtual; abstract;
		//Выполняет проверку на пустоту:
		function Empty(): boolean; inline;
		//Возвращает число элементов:
		property size: dword read _size;
	end;

	TListNode = class
	public
		next: TListNode;
		data: TData;
	end;

	//Класс стека на основе массива:
	TArrayStack = class(TClassStruct)
	private
		_maxSize: dword;
		_data: array of TData;
	public
		//Переопределение методов базового класса:
		function Push(const data: TData): boolean; override;
		function Pop(): boolean; override;
		function Get(): TData; override;
		//Конструктор класса:
		constructor Create(maxSize: dword);
		//Деструктор класса:
		destructor Destroy(); override;
	end;

	//Класс стека на основе связного списка:
	TListStack = class(TClassStruct)
	private
		_head: TListNode;
	public
		//Переопределение методов базового класса:
		function Push(const data: TData): boolean; override;
		function Pop(): boolean; override;
		function Get(): TData; override;
		//Конструктор класса:
		constructor Create();
		//Деструктор класса:
		destructor Destroy(); override;

	end;

	//Класс очереди на основе массива:
	TArrayQueue = class(TClassStruct)
	private
		_head, _maxSize: dword;
		_data: array of TData;
	public
		//Переопределение методов базового класса:
		function Push(const data: TData): boolean; override;
		function Pop(): boolean; override;
		function Get(): TData; override;
		//Конструктор класса:
		constructor Create(maxSize: dword);
		//Деструктор класса:
		destructor Destroy(); override;
	end;

	//Класс очереди на основе связного списка:
	TListQueue = class(TClassStruct)
	private
		_head, _tail: TListNode;
	public
		//Переопределение методов базового класса:
		function Push(const data: TData): boolean; override;
		function Pop(): boolean; override;
		function Get(): TData; override;
		//Конструктор класса:
		constructor Create();
		//Деструктор класса:
		destructor Destroy(); override;
	end;


implementation

{-TClassStruct-}

function TClassStruct.Empty(): boolean; inline;
begin
	exit(_size = 0);
end;

{-TArrayStack-}

function TArrayStack.Push(const data: TData): boolean;
begin
	if _size >= _maxSize then exit(false);
	_data[_size] := data;
	_size += 1;
	exit(true);
end;

function TArrayStack.Pop(): boolean;
begin
	if _size = 0 then exit(false);
	_size -= 1;
	exit(true); 
end;

function TArrayStack.Get(): TData;
begin
	if _size = 0 then exit(0);
	exit(_data[_size - 1]); 
end;

constructor TArrayStack.Create(maxSize: dword);
begin
	try SetLength(_data, maxSize);
	except
	end;
	_size := 0;
	_maxSize := maxSize;
end;

destructor TArrayStack.Destroy();
begin
end;

{-TListStack-}

function TListStack.Push(const data: TData): boolean;
var
	p: TListNode;
begin
	p := TListNode.Create();
	if p = nil then exit(false);
	p.next := _head;
	_head := p;
	_head.data := data;
	_size += 1;
	exit(true);
end;

function TListStack.Pop(): boolean;
var
	p: TListNode;
begin
	if(_size = 0) then exit(false);
	p := _head;
	_head := _head.next;
	_size -= 1;
	p.Destroy();
	exit(true);
end;

function TListStack.Get(): TData;
begin
	if _size = 0 then exit(0);
	exit(_head.data);
end;

constructor TListStack.Create();
begin
	_head := nil;
	_size := 0;
end;

destructor TListStack.Destroy();
begin
	while _size > 0 do
		self.Pop();
end;

{-TArrayQueue-}

function TArrayQueue.Push(const data: TData): boolean;
begin
	if _size >= _maxSize then exit(false);
	_data[(_size + _head) mod _maxSize] := data;
	_size += 1;
	exit(true);
end;

function TArrayQueue.Pop(): boolean;
begin
	if _size = 0 then exit(false);
	_head := (_head+1) mod _maxSize;
	_size -= 1;
	exit(true); 
end;

function TArrayQueue.Get(): TData;
begin
	if _size = 0 then exit(0);
	exit(_data[_head]);
end;

constructor TArrayQueue.Create(maxSize: dword);
begin
	try SetLength(_data, maxSize);
	except
	end;
	_head := 0;
	_size := 0;
	_maxSize := maxSize;
end;

destructor TArrayQueue.Destroy();
begin
end;

{-TListQueue-}

function TListQueue.Push(const data: TData): boolean;
var
	p: TListNode;
begin
	p := TListNode.Create();
	if p = nil then exit(false);
	p.data := data;
	if _head <> nil then _head.next := p
	else _tail := p;
	_head := p;
	_size += 1;
        if size = 1 then _tail := _head;
	exit(true);
end;

function TListQueue.Pop(): boolean;
begin
	if(_size <= 0) then exit(false);
	_tail := _tail.next;
	_size -= 1;
	exit(true);
end;

function TListQueue.Get(): TData;
begin
	if _size = 0 then exit(0);
	exit(_tail.data);
end;

constructor TListQueue.Create();
begin
	_head := nil;
	_tail := nil;
	_size := 0;
end;

destructor TListQueue.Destroy();
begin
	while _size > 0 do
		self.Pop();
end;
end.
