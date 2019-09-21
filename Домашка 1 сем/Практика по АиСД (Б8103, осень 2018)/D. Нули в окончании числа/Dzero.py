import math as m
a, b, q = map(int, input().split())

f = m.factorial(b)//m.factorial(a)
n = 0;
while f % q == 0:
	f //= q
	n += 1	

print(n)



