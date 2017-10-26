from lxml import etree
from urllib import request
import json
from collections import OrderedDict


with request.urlopen('http://hr.tencent.com/position.php?&start=10#a') as response:
    data = response.read()
    html = etree.HTML(data)
    results = html.xpath('//tr[@class="odd"] | //tr[@class="even"]')

    positions = OrderedDict()
    i = 1
    for result in results:
        item = {}
        item['name'] = result.xpath('./td[1]/a')[0].text
        item['detailLink'] = result.xpath('./td[1]/a')[0].attrib['href']
        item['catalog'] = result.xpath('./td[2]')[0].text
        positions['position' + str(i)] = item
        i += 1

    with open('tencent_position.json', 'w') as f:
        f.write(json.dumps(positions, indent=4, ensure_ascii=False))