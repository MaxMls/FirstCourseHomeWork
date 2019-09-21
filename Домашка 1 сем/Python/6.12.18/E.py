inp = open('input.txt')
arr = []
l = 0
for s in inp:
	if s[0] == '+':
		arr.append(s[2:])
		l += 1
	elif s[0] == '-':
		print(arr.pop(0))
		l -= 1
	elif s[0] == '*':
		arr.insert(l // 2 + l % 2, s[2:])
		l += 1