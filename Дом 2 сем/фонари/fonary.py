inp = open('input.txt')


n = int(inp.readline())
a = list(map(float, inp.read().split()))

lightMap = [] # точки границ освещения отдельных фонарей
lightBool = [] # начало или конец света false -- Начало true конец

for i in range(n):
	p = a[i*2]
	h = a[i*2+1]

	lightMap.append(p - h/2)
	lightMap.append(p + h/2)
	lightBool.append(False)
	lightBool.append(True)

light = sorted(zip(lightMap, lightBool))

maxPower = 0
power = 0
for _, c in light:
	if c:
		power -= 1
	else:
		power += 1
		if power > maxPower:
			maxPower = power

out = open('output.txt', 'w')
out.write(str(maxPower))