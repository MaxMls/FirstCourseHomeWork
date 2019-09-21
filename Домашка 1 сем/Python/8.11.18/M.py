inp = open('input.txt')

ar = {}

for line in inp:
	s = line.split()
	if ar.get(s[0]) == None: 
		ar[s[0]] =  int(s[1]) 
	else: 
		ar[s[0]] += int(s[1]) 


for k in sorted(ar.keys()):
	print(f"{k} {ar[k]}")