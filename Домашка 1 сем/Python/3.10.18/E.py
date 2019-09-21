import math as m
s = input().split()
x1, y1 = float(s[0]), float(s[1])
s = input().split()
x2, y2 = float(s[0]), float(s[1])

print(f"{m.sqrt((x1-x2)**2+(y1-y2)**2):0.3f}")
