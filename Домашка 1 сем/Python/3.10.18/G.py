import random as r
s = input().split()
a, b = int(s[0]), int(s[1])

for x in range(0, 5):
    print(str(r.randint(a, b)), end='')
