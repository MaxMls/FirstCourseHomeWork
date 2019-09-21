s = list(map(int, input().split()))

p = [str(x) for x in range(1, s[0] + 1)]
p[s[1]-1:s[2]] = reversed(p[s[1]-1:s[2]])
p[s[3]-1:s[4]] = reversed(p[s[3]-1:s[4]])

print(' '.join(p))