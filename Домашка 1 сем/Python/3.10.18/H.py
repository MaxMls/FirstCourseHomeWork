import random as r
s = input().split()
a, b = float(s[0]), float(s[1])

s = ''

for x in range(0, 5):
    print(f"{(a+r.random()*(b-a)):0.3f}", end=' ')
