n, k = map(int, input().split())
s = list('I' * n)

for i in range(0, k):
	l, r = map(int, input().split())
	s[l - 1:r] = list('.' * (r - l + 1))
print(''.join(s))
