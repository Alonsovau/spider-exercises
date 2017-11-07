from urllib import request
from urllib import parse
import json


url = "http://www.hdgtjy.com/Index/PublicResults"
send_headers = {'X-Requested-With': 'XMLHttpRequest', 'Content-Type': 'application/x-www-form-urlencoded'}
result = None
for page in range(1, 10):
    data = {'page': page,
            'size': 10
            }
    data = parse.urlencode(data).encode('utf-8')
    req = request.Request(url, data=data, headers=send_headers)
    res = request.urlopen(req)
    data = res.read().decode('utf-8')
    temp = json.loads(data)
    print(len(temp['data']))
    if result is None:
        result = temp
    else:
        result['data'] += temp['data']
print(len(result['data']))
with open('hdgtjy.json', 'w') as f:
    f.write(json.dumps(result, indent=4, ensure_ascii=False))
