string = str (input())

rep = {'A': 'B', 'B': 'A', 'a': 'b', 'b': 'a'}

n = 0
for ch in string:
	s = rep.get(ch)
    if s == None:
        print(ch, end='')
    else:
        print(s, end='')
        n += 1
print()
print(n)
