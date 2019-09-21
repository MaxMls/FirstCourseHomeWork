n = int(input())

firstPost = input().split(' опубликовал пост, количество просмотров: ')

posts = {} # имя: количество просмотров
reposts = {} # имя: имя у кого репостил

posts[firstPost[0]] = int(firstPost[1])
reposts[firstPost[0]] = None



for _ in range(n-1):
	# Парсинг
	name, secondPart = input().split(' отрепостил пост у ')
	reposts[name], views  = secondPart.split(', количество просмотров: ')

	posts[name] = 0

	while True: # Обратное распространение репоста
		posts[name] += int(views)
		name = reposts[name]
		if name == None: break

print('\n'.join(map(str, posts.values())))