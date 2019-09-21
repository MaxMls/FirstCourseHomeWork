# Парсит пример и решает его
import math as m
e = '2.71828182846'
pi = '3.14159265359'

# 1. удалить пробелы
# 1. разбить строку на элементы и поместить в массив
# больше число - выше приоритет

OPERS_BIN = ['+', '-', '*', '/', '^', '#'] # - корень
OPERS_UN = ['abs', 'sin', 'cos', 'tan', 'sinm', 'cosm', 'tanm', 'sqrt', 'log', 'ln', 'dms', 'deg', 'fact', 'neg']

opers = [ '(', ')',
		'+', '-', '*', '/', '^', '#',
		'abs', 'sin', 'cos', 'tan', 'sinm', 'cosm', 'tanm', 'sqrt', 'log', 'ln', 'dms', 'deg', 'fact', 'neg']

power = [   6,   0,
		  1,   1,   2,   2,   3,   3,
		    5,     5,     5,     5,      5,      5,      5,      5,     5,    5,     5,     5,      5,     5]


def StrToExeption(s):
	exeption = []
	el = ''

	for sym in s:
		if sym == ' ': continue
		if sym in opers:
			if len(el) != 0: 
				exeption.append(el)
				el = ''
			exeption.append(sym)
		else:
			el += sym

	if len(el) != 0: 
		exeption.append(el)
	return exeption

def ReversePolyNot(e):
	outArray = []
	operationStack = []
	mayYnary = True

	for el in e:
		if not el in opers:
			mayYnary = False
			outArray.append(el)
			continue
		operIndex = opers.index(el)

		if el == '-' and mayYnary:
			el = 'neg'
			operIndex = opers.index(el)

		if el == ')':
			mayYnary = False
			while operationStack[-1] != '(':
				outArray.append(operationStack.pop())
			operationStack.pop()
			
		else:
			mayYnary = True
			if len(operationStack) > 0 and operationStack[-1] != '(' and operationStack[-1] in opers and power[operIndex] <= power[opers.index(operationStack[-1])]:
				outArray.append(operationStack.pop())
			operationStack.append(el)
			
	while len(operationStack) > 0:
		outArray.append(operationStack.pop())

	return outArray

def IsNum(a):
	return type(a) == float or a.isdigit();

def Compute(e):
	res = []
	for el in  e:
		if el in OPERS_BIN:

			if len(res) < 2: return 'ERROR bin. out of range'
			a, b = res.pop(), res.pop()
			if (not IsNum(a) or not IsNum(b)): return 'ERROR bin. Expected type Numbers, found Sign(s)'
			a, b = float(a), float(b)

			if el 	== '+':		res.append(b + a)
			elif el == '-':		res.append(b - a)
			elif el == '*':		res.append(b * a)
			elif el == '/':		res.append(b / a)

		elif el in OPERS_UN:

			if len(res) < 1: return 'ERROR yn. out of range'
			a = res.pop()
			if (not IsNum(a)): return 'ERROR yn. Expected type Number, found Sign'
			a = float(a)

			if el == 'sin':		res.append(m.sin(a))
			elif el == 'cos':	res.append(m.cos(a))
			elif el == 'neg':	res.append(-a)
			elif el == 'abs':	res.append(abs(a))
			elif el == 'sqrt':	res.append(m.sqrt(a))

		else:
			res.append(el)
	if (len(res) > 1): return 'ERROR excess numbers'
	return f"{res[0]:0.3f}"

		
	

s = '(-2 + 2)'
print(s)
s = StrToExeption(s)
print(s)
s = ReversePolyNot(s)
print(s)
s = Compute(s)
print(s)



# Если число, положить в массив и продолжить

# Если '-' или '+'; Если прошлого нет или прошлый есть и прошлый не число и не ')' превращать в унарный '--' или '-+'

# Если ')' перекладывать операции из стека пока не наткнусь на '(' в массиве нет скобок
# Иначе Если приоритет равен или меньше выкладывать последний из стека в массив и ложить в стек новый
# Иначе Если приоритет выше ложить в стек

# sin(29)+-45*69


# массив выхода 29
# стек операций sin 

# решениеы

# 1 3 -- 4 + +		()
# 3 -- 4 + +			(1)
# -- 4 + +			(1 3)
# -- 4 + +			(1 3)
# 4 + +				(1 -3)
# + +					(1 -3 4)
# +					(1 1)
# 					(2)




