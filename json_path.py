import jsonpath
from urllib import request
import json


url = 'http://www.lagou.com/lbs/getAllCitySearchLabels.json'
with request.urlopen(url) as response:
    jsondata = response.read()
    jsonobj = json.loads(jsondata.decode('utf8'))
    citylist = jsonpath.jsonpath(jsonobj, '$..name')
    print(citylist)
