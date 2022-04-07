import json
import requests
import lxml
from bs4 import BeautifulSoup
import boto3

def lambda_handler(event, context):
    
    print('Came here....')
    dynamodb = boto3.client('dynamodb')

    url = "https://www.rottentomatoes.com/top/bestofrt/"
    headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36 QIHU 360SE'
    }
    f = requests.get(url, headers = headers)
    movies_lst = []
    soup = BeautifulSoup(f.content, 'html.parser')
    movies = soup.find('table', {
        'class': 'table'
      }).find_all('a')
    num = 0
    for anchor in movies:
      urls = 'https://www.rottentomatoes.com' + anchor['href']
      movies_lst.append(urls)
      num += 1
      movie_url = urls
      movie_f = requests.get(movie_url, headers = headers)
      movie_soup = BeautifulSoup(movie_f.content, 'html.parser')
      movie_content = movie_soup.find('div', {
        'class': 'movie_synopsis clamp clamp-6 js-clamp'
      })
      print(num, urls, '\n', 'Movie:' + anchor.string.strip())
      print('Movie info:' + movie_content.string.strip())
      
      dynamodb.put_item(TableName='Movies-mp5sd4g4p5bl3gy3mhfvqvsuf4-dev', Item={'id': {'S': str(num)}, 'movie_info':{'S':movie_content.string.strip()}, 'movie_url': {'S': movie_url}, 'movie_name':{'S': anchor.string.strip()}})

    return {
        'statusCode': 200,
        'body': json.dumps('Hello from Lambda!')
    }

