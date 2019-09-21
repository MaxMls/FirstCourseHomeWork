n = int(input())
ar = {}
for i in range(0, n):
	s = input().split()
	for j in s[1:]:
		ar[j] = s[0]

# Запросы
n = int(input())
for i in range(0, n):
	s = input()
	print(ar[s])
		
	