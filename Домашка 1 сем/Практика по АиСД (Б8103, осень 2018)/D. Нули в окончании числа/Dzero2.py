import math as m
a, b, q = map(int, input().split())


dq = 0
for x in range(2, q):
	c = q
	while c % x == 0:
		c //= x
		dq = x


resa = 0
while(a > 0):
	a //= dq;
	resa += a;


resb = 0
while(b > 0):
  b //= dq;
  resb += b;


print(resb - resa)

# while a / q == 0:
# 	f //= q
# 	n += 1	

# print(n)



