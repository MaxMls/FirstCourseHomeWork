var
{$R+}
	tMax,	// ������������ ����� ������
	n,		// ���������� �����

	q,		// ����� �������
	qm,		// ������������ ����� �������

	i, l,
	tn,		// ����� �������
	tr		// ������������ ���������
	: Integer;

	m: array of Integer; // ����� ������ (�������)
	
begin
	assign(input,'input.txt'); reset(input); assign(output,'output.txt'); rewrite (output);
	read(tMax, n);
	SetLength(m, n + 1);
	qm := 0;


	for i := 1 to n do 
	begin
		read(tn, tr);

		if tn > m[i-1] then
			m[i] := tn + tr
		else
			m[i] := m[i-1] + tr;

		if tn >= m[l] then
		begin
			l += 1;

			while m[l] < tn do
			begin
				q -= 1;
				l += 1;
			end;
		end
		else
		begin
			q += 1;
			if q > qm then qm := q;
		end;
	end;// O()

	if m[n] > tMax then m[n] := tMax;
	writeln(qm, ' ', m[n]);

	close(input); close(output);
end.