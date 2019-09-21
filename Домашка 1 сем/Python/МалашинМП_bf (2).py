s = input()
size = 30000
array = [0] * size
ind = 0;
i = 0
while i < len(s):
	c = s[i]
	if c == '>':
		ind = (ind + 1) % size
	elif c == '<':
		ind = ind - 1
		if ind < 0:
			ind = size + ind
	elif c == '+':
		array[ind] = (array[ind] + 1) % 256;
	elif c == '-':
		array[ind] -= 1
		if array[ind] < 0:
			ind = 256 + ind
	elif c == '.':
		print(array[ind])
	elif c == '[':
		if array[ind] == 0:
			while s[i] != ']':
				i += 1
	elif c == ']':
		if array[ind] == 0:
			while s[i] != '[':
				i -= 1


	i += 1