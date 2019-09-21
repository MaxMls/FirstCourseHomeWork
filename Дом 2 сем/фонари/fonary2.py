import math as m
inp = open('input.txt')


n = int(inp.readline())
a = list(map(float, inp.read().split()))

lightMap = [0]*100 # освещ. участки

for i in range(n):
	x = a[i*2]
	y = a[i*2+1]

	for j in range(int(x - y), int(m.ceil(int(x + y)))):
		if (j >= 0 and j < 100):
			lightMap[j] += 1

maxPower = max(lightMap)



out = open('output.txt', 'w')
out.write(str(maxPower))
#print(maxPower)