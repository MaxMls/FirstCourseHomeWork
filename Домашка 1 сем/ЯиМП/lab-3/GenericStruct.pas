//Текущий модуль содержит обобщенные классы для работы со стеком и очередью на основе массивов и связных списков;
//TODO: Требуется дописать реализацию отдельных методов!

unit GenericStruct;

{$mode objfpc}
{$inline on}

interface

type
	//Обобщенный абстрактный класс для стека и очереди:
	generic TClassStruct<TData> = class
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

	//Обобщенный класс стека на основе массива:
	generic TArrayStack<TData> = class(specialize TClassStruct<TData>)
	private
		//...
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

	//Обобщенный класс стека на основе связного списка:
	generic TListStack<TData> = class(specialize TClassStruct<TData>)
	private
		//...
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

	//Обобщенный класс очереди на основе массива:
	generic TArrayQueue<TData> = class(specialize TClassStruct<TData>)
	private
		//...
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

	//Обобщенный класс очереди на основе связного списка:
	generic TListQueue<TData> = class(specialize TClassStruct<TData>)
	private
		//...
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
	//...
end;

function TArrayStack.Pop(): boolean;
begin
	//...
end;

function TArrayStack.Get(): TData;
begin
	//...
end;

constructor TArrayStack.Create(maxSize: dword);
begin
	//...
end;

destructor TArrayStack.Destroy();
begin
	//...
end;

{-TListStack-}

function TListStack.Push(const data: TData): boolean;
begin
	//...
end;

function TListStack.Pop(): boolean;
begin
	//...
end;

function TListStack.Get(): TData;
begin
	//...
end;

constructor TListStack.Create();
begin
	//...
end;

destructor TListStack.Destroy();
begin
	//...
end;

{-TArrayQueue-}

function TArrayQueue.Push(const data: TData): boolean;
begin
	//...
end;

function TArrayQueue.Pop(): boolean;
begin
	//...
end;

function TArrayQueue.Get(): TData;
begin
	//...
end;

constructor TArrayQueue.Create(maxSize: dword);
begin
	//...
end;

destructor TArrayQueue.Destroy();
begin
	//...
end;

{-TListQueue-}

function TListQueue.Push(const data: TData): boolean;
begin
	//...
end;

function TListQueue.Pop(): boolean;
begin
	//...
end;

function TListQueue.Get(): TData;
begin
	//...
end;

constructor TListQueue.Create();
begin
	//...
end;

destructor TListQueue.Destroy();
begin
	//...
end;

end.
