n = int(input())

lat2en = {}
for x in range(0, n):
	s = input()
	ar = s.split(" - ")
	lat = ar[1].split(", ")
	en = ar[0]

	for word in lat:
		if lat2en.get(word) == None:
			lat2en[word] = []
		lat2en[word].append(en)


print(len(lat2en))
for k in sorted(lat2en.keys()):
	st = ", ".join(sorted(lat2en[k]))
	print(f"{k} - {st}")