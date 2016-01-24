import urllib
import json
try:
	import oauth2 as oauth
except:
	import pip
	pip.main(['install', 'oauth2'])
	import oauth2 as oauth


class color:
   BLUE = '\033[94m'
   GREEN = '\033[92m'
   YELLOW = '\033[93m'
   RED = '\033[91m'
   BOLD = '\033[1m'
   CYAN = '\033[36m'
   END = '\033[0m'

def credentials():
	oauth_credentials = {}
	details = open('twitterapikeys.txt', 'r')
	for line in details:
		oauth_credentials[str(line.split(':')[0]).strip()] = str(line.split(':')[1].strip())
	return oauth_credentials


def oauthify(url):
	credits = credentials()
	consumer = oauth.Consumer(key=credits['consumer_key'], secret=credits['consumer_secret'])
	token = oauth.Token(key=credits['token_key'], secret=credits['token_secret'])
	client = oauth.Client(consumer, token)
	response, stuff = client.request(url, method='GET', body='', headers=None)
	return stuff

def parser(material, movie):
	data = json.loads(material)
	print color.GREEN + '\nRetrieved ' + str(len(data['statuses'])) + ' tweets...\n\n' + color.END
	for instance in data['statuses']:
		name = color.RED + instance['user']['name'].encode('ascii', 'ignore') + color.END
		screen_name = color.BLUE + instance['user']['screen_name'].encode('ascii', 'ignore') + color.END
		tweet = color.BOLD + instance['text'].encode('ascii', 'ignore')+ color.END
		date_created = instance['created_at'].encode('ascii', 'ignore').split()
		date_created = ' '.join(date_created[0:3]) + ' ' + date_created[5] + ' at ' + ' '.join(date_created[3:5])
		date_created = color.CYAN + date_created.replace('+0000', 'UTC')+ color.END
		print color.GREEN + '\nTweet Number: ' + str(data['statuses'].index(instance) + 1) + color.END + '\n' + name + ' with a screen name ' + screen_name + ' tweeted on ' + date_created + ' :\n\n' + tweet + '\n'
	if len(data['statuses']) < 100:
		print color.RED + 'We could only find ' + str(len(data['statuses'])) + ' tweets with the movie name "' + movie + '". Please try with another query' + color.END
		main_func()


def main_func():
	movie_name = raw_input('\n\nEnter the name of your Favourite Movie: ')
	if len(movie_name) > 0:
		print color.YELLOW + '\nQuerying for 100 tweets containing the movie name "' + movie_name +'"...' + color.END + '\n'
		search_url = 'https://api.twitter.com/1.1/search/tweets.json?q="' + urllib.quote_plus(movie_name) +'"+movie&count=100'
		content = oauthify(search_url)
		parser(content, movie_name)
	else:
		print color.RED + '\nNo name given. The program will now exit...' + color.END


main_func()
