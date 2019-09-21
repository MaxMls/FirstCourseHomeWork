inp = open('input.txt')

ar = {}

for line in inp:
	s = line.split()

	if ar.get(s[1]) == None:
		if s[0] == "BALANCE":
			print("ERROR")
			continue
		else: ar[s[1]] = 0

	if s[0] == "DEPOSIT":
		ar[s[1]] += int(s[2])
	elif s[0] == "WITHDRAW":
		ar[s[1]] -= int(s[2])
	elif s[0] == "BALANCE":
		print(ar[s[1]])
	elif s[0] == "TRANSFER":
		ar[s[1]] -= int(s[3])
		if ar.get(s[2]) == None:
			ar[s[2]] = int(s[3])
		else:
			ar[s[2]] += int(s[3])
	elif s[0] == "INCOME":
		for x in ar.keys():
			if ar[x] > 0:
				ar[x] += (ar[x] * int(s[1])) // 100




