n = int(input())

a, b = 0, 1
s = ''

for i in range(0, n):
    print(b, end=' ')
    c = b
    b = a + b
    a = c
