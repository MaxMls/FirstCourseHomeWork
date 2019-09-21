alph = str(input())
lenght = int(input())

alphLen = len(alph)
count = alphLen ** lenght

for i in range(0, count):
    n = i
    s = ''
    while n > 0:
        s = alph[n % alphLen] + s
        n = n // alphLen
    print(s.rjust(lenght, alph[0]))

print(count)
