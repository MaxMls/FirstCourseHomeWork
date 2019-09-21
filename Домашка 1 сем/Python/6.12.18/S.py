inp = open('input.txt')
arr = []
error = False
for s in inp:
	s = s.strip(' \n\r')
	if s[0] == '+':
		if s[1:] in arr:
			error = True
			break
		arr.insert(0, s[1:])
	elif s[0] == '^':
		if len(arr) < 1:
			error = True
			break
		arr.pop(0)
	elif s[0] == '#':
		if s[1:] in arr:
			error = True
			break
		arr.append(s[1:])
	elif s[0] == '/':
		if len(arr) < 1:
			error = True
			break
		arr.pop()

out = open('output.txt', 'w')

if error:
	out.write('ERROR')
elif len(arr) < 1:
	out.write('EMPTY')
else:
	out.write(' '.join(arr))

inp.close()
out.close()