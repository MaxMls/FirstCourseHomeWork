n = int(input())
ar = {}
for i in range(0, n):
	s = input().split()
	ar[s[0]] = (s[1:])

# Запросы
n = int(input())
for i in range(0, n):
	s = input().split()
	access = ar[s[1]]
	
	if 	((s[0] == "read" and "R" in access) or
		(s[0] == "write" and "W" in access) or
		(s[0] == "execute" and "X" in access)):
		print("OK")
	else:
		print("Access denied")