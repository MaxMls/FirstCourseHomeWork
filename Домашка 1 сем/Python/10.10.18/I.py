s = str(input())
s = s.replace(' ', '')

if s[::-1] == s:
	print('YES')
else:
	print('NO')
    
