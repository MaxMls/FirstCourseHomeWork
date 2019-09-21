program test;

{$mode objfpc}

uses
	GenericStruct;

type
	TClassStructInt = specialize TClassStruct<integer>;
	TArrayStackInt = specialize TArrayStack<integer>;
	TArrayQueueInt = specialize TArrayQueue<integer>;
	TListStackInt = specialize TListStack<integer>;
	TListQueueInt = specialize TListQueue<integer>;

var
	S: TClassStructInt;
	i: integer;
begin
	S := TArrayStackInt.Create(10);
	for i := 0 to 9 do S.Push(i);
	S.Destroy();
	S := TArrayQueueInt.Create(10);
	for i := 0 to 9 do S.Push(i);
	S.Destroy();
	//...
	S := TListStackInt.Create();
	for i := 0 to 9 do S.Push(i);
	S.Destroy();
	S := TListQueueInt.Create();
	for i := 0 to 9 do S.Push(i);
	S.Destroy();
	//...
end.
