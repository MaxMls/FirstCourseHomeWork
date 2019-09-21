# Контейнеры
n = int(input())
conts = []
opers = []
for _ in range(n):
	conts.append(input()[1:].split())

def checkEquals(arr):
	if len(arr) == 0: return True
	old = arr[0]
	for el in arr:
		if el != old:
			return False
	return True



# Особые случаи
if n == 0:
	...
elif n == 1:
	if not checkEquals(conts[0]):
		print(0)
elif n == 2:

	e = True;
	if not checkEquals(conts[0]) and not checkEquals(conts[1]):
		e = False
	elif checkEquals(conts[0]):
		for _ in range(len(conts[1])):
			el = conts[1].pop();
			if el == conts[0][0]:	
				conts[0].append(el)
				opers.append('2 1')
			else:
				break
	elif checkEquals(conts[1]):
		for _ in range(len(conts[0])):
			el = conts[0].pop();
			if el == conts[1][0]:	
				conts[1].append(el)
				opers.append('1 2')
			else:
				break

	if e:
		for x in opers:
			print(x)
	else:
		print(0)
	

else:
	# Пееместить все в 1
	# print('Исходный')
	# print(conts)р

	for i in range(1, n):
		for _ in range(len(conts[i])):
			conts[0].append(conts[i].pop())
			opers.append(str(len(conts[i])) + ' 1')


	por = [] # Порядок элементов в массиве
	# print('Перемещено в 1')
	# print(conts)

	# Переметить из 1 равномерно
	for _ in range(len(conts[0])):
		el = conts[0].pop()

		for i in range(1, n):
			if len(conts[i]) == 0 or conts[i][0] == el:
				conts[i].append(el)
				opers.append('1 ' + str(i + 1))
				break
			elif i == n - 1:
				conts[1].append(el)
				opers.append('1 2')


		
	# print('Распределено из 1')
	# print(conts)


	temp = conts[1][0]
	# переместить из 2 в 1 или 3
	for _ in range(len(conts[1])):
		el = conts[1].pop()

		if el == temp:
			conts[2].append(el)
			opers.append('2 3')
		else:
			conts[0].append(el)
			opers.append('2 1')
	# print('из 2 в 3 и 1')
	# print(conts)

	# переместить из 3 в 2 остатки
	while True:
		if not (temp in conts[2]):
			break
		el = conts[2].pop()
		opers.append('3 2')
		conts[1].append(el)

	e = True;
	for c in conts:
		if checkEquals(c): continue
		print(0)
		e = False
		break

	if e:
		for x in opers:
			print(x)


