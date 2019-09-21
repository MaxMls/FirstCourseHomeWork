
facs = input().split(', ')
studs = {}
n = 0

for i in range(len(facs)):
	info = input().split(': ')
	print(info)

	ss = info[1].split(', ')
	for name in ss:
		if not name in studs: studs[name] = []
		studs[name].append(info[0][::-1])
		n += 1


getStuds = sorted(input().split(', '))

studsSorted = {}
for name in getStuds:
	studsSorted[name] = studs[name]

studs = studsSorted


for pr in studsSorted.values():
	if len(pr) < n:
		n = len(pr)


for name in studsSorted.keys():
	if len(studsSorted[name]) == n:
		print(f"{name}: {', '.join(sorted(studsSorted[name]))}")
		break

