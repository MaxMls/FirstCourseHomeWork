import random as r

base = 1000000000
# a , b < n


def add(a, b):  # Возвращает остаток от результата сложения, деленного на систему счисления, и частное
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


def bigMultiple(a, b):  # a - big b - int
	res = []
	vy = 0
	for i in a:
		c = i * b + vy
		vr = c % base
		vy = c // base
		res.append(vr)
	if vy != 0:
		res.append(vy)
	return res


def bigBigMultiple(a, b):
	res = []
	i = 0
	ym = 0
	for i in range(len(b)):
		re = bigMultiple(a, b[i])
		for j in range(len(re)):

			if(len(res) == j + i):
				res.append(re[j])
			else:
				res[j + i] += re[j]

			ym = res[j + i] // base
			if(ym != 0):
				if(len(res) == j + i + 1):
					res.append(ym)
				else:
					res[j + i + 1] += ym
			res[j + i] %= base

	return res


def subtraction(a, b):
	# если a < b поменять знак и вернуть (b - a)

	for i in range(len(b)):

		if(a[i] < b[i]):
			a[i] = a[i] + base - b[i]

			for j in range(i+1, len(a)):
				if(a[j] != 0):
					a[j] -= 1
					break

		else:
			a[i] -= b[i]



	return a
		



def randBig():
	a = [r.randint(0, 9) for x in range(r.randint(1, 100))]
	if (a[-1] == 0):
		a.append(r.randint(1, 9))
	return a


def bigToInt(b):
	return int(''.join([str(x) for x in b[::-1]]))


print(subtraction([2, 9], [2,8]))

# for i in range(1000):
	# a = randBig()
	# b = randBig()

	# a1 = bigToInt(bigBigMultiple(a, b))
	# a2 = bigToInt(a) * bigToInt(b)

	# if a1 != a2:
	# 	print(False)
	# 	print(bigToInt(a))

a = [0,0,0,0,0,0,0,0,0,1]
a = bigBigMultiple(a, a)

print(bigToInt(a))
