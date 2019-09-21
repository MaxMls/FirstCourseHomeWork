s = list(map(int, input().split()))
balls = 0
while True:
	oldid, old, n = None, None, 1

	for idx, x in enumerate(s):
		if old == x:
			n += 1
		else:
			if n >= 3:
				break
			else:
				oldid, old, n = idx, x, 1
	if n >= 3:
		del s[oldid: idx]
		balls += n
	else:
		break

print(balls)
