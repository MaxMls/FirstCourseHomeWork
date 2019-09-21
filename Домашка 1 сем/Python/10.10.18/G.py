import calendar as c

m = int(input())

if m in range(1, 13):
    print(c.monthrange(2019, m)[1])
else:
    print(0)
