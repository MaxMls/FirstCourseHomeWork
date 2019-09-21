strs = open('input.txt').read().split(':)')
out = []

for i in range(len(strs)):
	params = strs[i].split('+++')

	if int(params[1]) % 2 != int(params[2]): continue
	if len(params[0]) > int(params[3]): continue

	n = 0
	for c in params[1]: 
		n += int(c) % 2
	if int(params[4]) != n: continue

	s = ''.join([params[1][i] for i in range(len(params[1])) if i % 2 == 0])
	if s != s[::-1]: continue

	out.append(strs[i])

open('output.txt', 'w').write(':)'.join(out))