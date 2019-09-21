input()
s = list(map(int, input().split()))
r = int(input())

print(len([x for x in s if x >= r]) + 1)
