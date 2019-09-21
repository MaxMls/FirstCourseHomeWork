import math as m

def IsNum(a):
	return type(a) == float or a.isdigit();

opersUn = ['sin', 'cos', 'abs', 'sqrt']#, 'neg']
opersBin = ['+', '-', '*', '/']

def Compute(e):
	res = []
	for el in e:
		# if (el == '-') and (len(res) < 2 or (not IsNum(res[0]))): el = 'neg' # унарный минус
			
		if el in opersBin:
			if len(res) < 2: return 'ERROR'
			a, b = res.pop(), res.pop()
			if (not IsNum(a) or not IsNum(b)): return 'ERROR'
			a, b = float(a), float(b)

			if el 	== '+': 	res.append(b + a)
			elif el == '-': 	res.append(b - a)
			elif el == '*': 	res.append(b * a)
			elif el == '/': 	res.append(b / a)
		elif el in opersUn:
			if len(res) < 1: return 'ERROR'
			a = res.pop()
			if (not IsNum(a)): return 'ERROR'
			a = float(a)

			if el == 'sin':		res.append(m.sin(a))
			elif el == 'cos':	res.append(m.cos(a))
			#elif el == 'neg':	res.append(-a)
			elif el == 'abs':	res.append(abs(a))
			elif el == 'sqrt':	res.append(m.sqrt(a))
		else:
			res.append(el)
	if (len(res) > 1): return 'ERROR'
	return f"{res[0]:0.3f}"


inp = open('input.txt')
pol = []

for s in inp: 
	if s.strip()[1] == '=':
		pol = [s[2:].strip() if pol[key] == s[0] else pol[key] for key in range(len(pol))]
	else:
		pol = s.split()


print(Compute(pol))