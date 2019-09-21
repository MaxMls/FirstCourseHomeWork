n = int(input())
s = input().split()
k = int(input()) * -1

for i in range(n):
	print(s[(i + k) % n], end=" ")