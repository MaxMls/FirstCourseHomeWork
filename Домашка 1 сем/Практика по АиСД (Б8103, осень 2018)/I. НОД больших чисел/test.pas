type
	typeName = record
		fieldName: array of QWord; 
	end;

operator := (val: int64) res: typeName;
begin
	exit(res);
end;

var
	variableName: typeName;
begin
	read();
	variableName := 0;
	while true do
	begin
		SetLength(variableName.fieldName, 0);
		variableName := 0;
		SetLength(variableName.fieldName, 1000000);
	end;



end.