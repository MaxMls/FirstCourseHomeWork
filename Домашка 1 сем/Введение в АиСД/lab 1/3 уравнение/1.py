a = 1
b = 15

bezeX,bezeY = 1, 1
nod = 0
a1, b1 = a, b
while nod != 1:
	if a1 % b == 0:
		nod = b
		break
	elif b1 % a == 0:
		nod = a
		break

	if a > b:
		bezeX = a // b
		a = a - bezeX * b # Остаток
	elif b > a:
		bezeY = -(b // a)
		b = b + bezeY * a # Остаток

print(f"{bezeX} {bezeY}")
print(nod)