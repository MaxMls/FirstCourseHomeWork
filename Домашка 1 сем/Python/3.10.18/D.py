r = int(input())

s = ''

while r > 0:
    s = str(r % 10) + " " + s
    r = r // 10

print(s)
