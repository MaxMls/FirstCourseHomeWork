uses RecordStruct;

var
	arrayStack: PArrayStack;
	arrayQueue: PArrayQueue;
	listStack: PListStack;
	listQueue: PListQueue;
	i: Integer;
begin
	// Проверка создания
	arrayStack 	:= newArrayStack(10);
	arrayQueue 	:= newArrayQueue(10);
	listStack	:= newListStack();
	listQueue	:= newListQueue();



	for i := 0 to 5 do pushData(listQueue, i);

	writeln (getData(listQueue));
	popData(listQueue);
	writeln (getData(listQueue));
	popData(listQueue);
	writeln (getData(listQueue));
	popData(listQueue);
	writeln (getData(listQueue));
	popData(listQueue);
	writeln (getData(listQueue));
	popData(listQueue);
	writeln (getData(listQueue));
	popData(listQueue);
	writeln (getData(listQueue));


	{ pushData(arrayStack, 7);
	pushData(arrayStack, 67);
	writeln(getSize(arrayStack) = 2);
	writeln(getData(arrayStack) = 67);

	popData(arrayStack);
	writeln(getData(arrayStack) = 7);

	delStack(arrayStack);
	writeln(arrayStack = nil);


	pushData(arrayQueue, 7);
	pushData(arrayQueue, 89);
	writeln(getSize(arrayQueue) = 2);
	writeln(getData(arrayQueue) = 7);
	popData(arrayQueue);
	writeln(getData(arrayQueue) = 89);
	popData(arrayQueue);
	writeln(getData(arrayQueue) = 0); }


{ 	// Проверка телепорта
	arrayQueue 	:= newArrayQueue(2);
	pushData(arrayQueue, 7);
	pushData(arrayQueue, 8);

	writeln(pushData(arrayQueue, 9));
	popData(arrayQueue);
	writeln(getData(arrayQueue));

	writeln(pushData(arrayQueue, 9));
	popData(arrayQueue);
	writeln(getData(arrayQueue));

	writeln(pushData(arrayQueue, 10));
	popData(arrayQueue);
	writeln(getData(arrayQueue));

 }

{ 

	pushData(listStack, 7);
	writeln(getSize(listStack));
	writeln(getData(listStack));
	popData(listStack);
	writeln(getData(listStack));


	pushData(listQueue, 7);
	writeln(getSize(listQueue));
	writeln(getData(listQueue));
	popData(listQueue);
	writeln(getData(listQueue));  }



	
end.