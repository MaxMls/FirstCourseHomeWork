ar = {}

for i in range(0, int(input()) - 1):
	s = input().split()
	ar[s[0]] = s[1]
	if ar.get(s[1]) == None:
		ar[s[1]] = ""


for k in sorted(ar.keys()):  # Для K
	i = 0
	f = k
	while ar.get(ar[f]) != None:
		i += 1
		f = ar[f]
	print(f"{k} {i}")
