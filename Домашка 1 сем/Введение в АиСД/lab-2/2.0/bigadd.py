import random as r

base = 1000000000
# a , b < n
def add(a, b): # Возвращает остаток от результата сложения, деленного на систему счисления, и частное
	c = base - b
	if (a >= c):
		return 1, a - c
	else:
		return 0, a + b



def bigAdd(listA, listB):
	ym = 0
	res = []
	i = 0
	while 1:
		a = listA[i] if i < len(listA) else 0
		b = listB[i] if i < len(listB) else 0
		b += ym
		vy, vr = add(a, b)
		if vr == 0 and i >= len(listA) and i >= len(listB):
			break
		res.append(vr)
		ym = vy
		
		i += 1
	return res

def bigMultiple(a,b):
	mul = a
	i = 1
	
	while i < b:
		i *= 2 
		mul = bigAdd(mul, mul)
	return mul
		



def randBig():
	a = [r.randint(0,9) for x in range(r.randint(1, 100))]
	if (a[-1] == 0): a.append(r.randint(1,9))
	return a

def bigToInt(b):
	return int(''.join([str(x) for x in b[::-1]]))


for i in range(1):
	# a = randBig()
	# b = randBig()
	# c = bigToInt(bigAdd(a, b))
	
	# if bigToInt(a) + bigToInt(b) != c:
	# 	print(f"{False} {c} ")

	a = randBig()
	b = 6
	c = bigToInt(bigMultiple(a, b))
	
	# if bigToInt(a) * b != c:
	print(f"{c} {bigToInt(a) * b == c} ")
	print(bigToInt(a) * b)


