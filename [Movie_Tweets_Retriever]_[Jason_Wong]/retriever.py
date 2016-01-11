from urllib2 import Request, urlopen, URLError #Has requests functionality
import urllib #Must use because urllib2 does not have urlencode just in case query string has spaces
import json
import re
from pyquery import PyQuery as pq

parameters = { 'count' : 100, 'q' : 'Star Wars movie'}
parameters = urllib.urlencode(parameters)
url = "http://loklak.org/api/search.json?"+parameters

#new request
request = Request(url, None, {'User-agent' : 'Mozilla/5.0 (Windows; U; Windows NT 5.1; de; rv:1.9.1.5) Gecko/20091102 Firefox/3.5.5'})

try:
 	#Open the response
	response = urlopen(request)
	results = response.read()
	results = json.loads(results)
	#The results are equal to the statuses
	results = results["statuses"]
	#for each tweet block in results
	for result in results:
		#get the actual tweet
		tweet = result["text"]
		#if the tweet doesn't have emojis, print the tweet
		if "Emoji--forText" not in tweet:
			print tweet.encode('utf-8'), '\n'
		#Otherwise use regex to find all the image tags
  	else:
		  regex = re.compile('(<img class=\\\"Emoji Emoji--forText\\" src=.+>)')
		  r = regex.search(tweet)
		  for itemFound in r.groups():
				#Then for each image tag replace it with its alt (which is the actual emoji)
		    img = pq(itemFound)('img')
		    tweet = tweet.replace(itemFound, img.attr("alt"))
		    #Sometimes loklak returns unclosed spans
		    tweet = tweet.replace('</span>', '')
		  
		  print tweet.encode('utf-8')
#Return an error if request fails
except URLError, e:
    print 'Error Code:', e