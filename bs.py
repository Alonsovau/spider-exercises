from bs4 import BeautifulSoup
from urllib import request

with request.urlopen('http://hr.tencent.com/position.php?&start=10#a') as response:
    resHtml = response.read()
    soup = BeautifulSoup(resHtml, 'lxml')
    results = soup.select('tr[class="even"]')
    results2 = soup.select('tr[class="odd"]')
    results += results2
    for result in results:
        name = result.select('td a')[0].get_text()
        dataLink = result.select('td a')[0].attrs['href']
        print(name)
        print(dataLink)


