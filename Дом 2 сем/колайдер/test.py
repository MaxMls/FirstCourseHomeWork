import random
l = 10000
sl = 60
a = [random.randint(-100000,100000) for i in range(l)]
a.sort()
v = [(-1 + 2 * random.randint(0,1)) for i in range(l)]

s = [random.randint(0,200000) for i in range(sl)]
s.sort()



f = open('linear.in', 'w')
f.write(str(l)+"\n")
f.write("\n".join([(str(a[i]) + ' ' + str(v[i])) for i in range(l)])+"\n")

f.write(str(sl)+"\n")
f.write(" ".join(str(i) for i in s))