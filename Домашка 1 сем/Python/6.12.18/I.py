inp = open('input.txt')
dek = []
for s in inp:
	s = s.strip()
	if s[:10] == 'push_front':
		dek.insert(0, s[11:])
		print('ok')
	elif s[:9] == 'push_back':
		dek.append(s[10:])
		print('ok')
	elif s == 'pop_front':
		if len(dek) < 1: print('error')
		else: print(dek.pop(0))
	elif s == 'pop_back':
		if len(dek) < 1: print('error')
		else: print(dek.pop())
	elif s == 'front':
		if len(dek) < 1: print('error')
		else: print(dek[0])
	elif s == 'back':
		if len(dek) < 1: print('error')
		else: print(dek[len(dek)-1])
	elif s == 'size':
		print(len(dek))
	elif s == 'clear':
		dek = []
		print('ok')
	elif s == 'exit':
		print('bye')