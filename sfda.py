import requests
from urllib import parse
import re
from urllib import request
from urllib import response


def main():
    curstart = 2
    values = {
        'tableId': '32',
        'State': '1',
        'bcId': '124356639813072873644420336632',
        'State': '1',
        'curstart': '2',
        'State': '1',
        'tableName': 'TABLE32',
        'State': '1',
        'viewtitleName': 'COLUMN302',
        'State': '1',
        'viewsubTitleName': 'COLUMN303,COLUMN299',
        'State': '1',
        'tableView': '%E5%9B%BD%E4%BA%A7%E8%8D%AF%E5%93%81%E5%95%86%E5%93%81%E5%90%8D',
        'State': '1',
        'cid': '0',
        'State': '1',
        'ytableId': '0',
        'State': '1',
        'searchType': 'search',
        'State': '1'
    }
    print(values)
    post_headers = {
        "cache-control": "no-cache",
        "Content-Type": "application/x-www-form-urlencoded",
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:56.0) Gecko/20100101 Firefox/56.0'
    }
    url = "http://app1.sfda.gov.cn/datasearch/face3/search.jsp"
    values = b'tableId=32&State=1&bcId=124356639813072873644420336632&State=1&curstart=2&State=1&tableName=TABLE32&State=1&viewtitleName=COLUMN302&State=1&viewsubTitleName=COLUMN303,COLUMN299&State=1&tableView=%25E5%259B%25BD%25E4%25BA%25A7%25E8%258D%25AF%25E5%2593%2581%25E5%2595%2586%25E5%2593%2581%25E5%2590%258D&State=1&cid=0&State=1&ytableId=0&State=1&searchType=search&State=1'

    res = requests.post(url, data=values, headers=post_headers)
    resHtml = res.text
    print(res.status_code)
    with open('sfda.html', 'w') as f:
        f.write(resHtml)

    Urls = re.findall(r'callbackC,\'(.*?)\',null', resHtml)
    for url in Urls:
        print(url)
        # url = re.sub('tableView=.*?&', 'tableView=' + urllib.quote("国产药品商品名") + "&", url)
        # ParseDetail('http://app1.sfda.gov.cn/datasearch/face3/' + url.encode('gb2312'))


if __name__ == '__main__':
    headers = {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:56.0) Gecko/20100101 Firefox/56.0',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    url = 'http://app1.sfda.gov.cn/datasearch/face3/search.jsp?MmEwMD=GBK-1_v0SWm_BS3k4fqIOE6CJ8XQ8wBytJQSxBUva0KBWnd0_uB3.ticHKCAX6nzqS.0EAaDnmtg5tOsJ10B9CBnYz7ctejoghK560Gg21OE6k6DiNeEy.PS.IYTOPp4yeltd1uqmOrdYRYsU5yAt2IVkNIQP9ylY8_6W6oEcYmcQfxzz9B3qa.HAk4mlzJ8tHgJuyBJMomkrEa.CJp7pTe_OaPMQGOBHYAm3VYyodUtiUlliM0YD1M6NIOVjvoucpGgvtAXeefGNwt1Rqb0Hys25GKCkC1IFAy49yRazzt518MT3d4csrqQ4pnnJeAkY9j_sjgsZ8gcAe3Th7aLBwnHkuwjm27HGpnNKktWWYmWgg0e2OGJR54rpClxndfB9m4ZsS4nqXQuRpSqRQbzV3S8PnbPMVHwgJzC4Mi3FTGxdOqkH6hOgCor_sXrm3'
    data = b'tableId=32&State=1&bcId=124356639813072873644420336632&State=1&curstart=2&State=1&tableName=TABLE32&State=1&viewtitleName=COLUMN302&State=1&viewsubTitleName=COLUMN303,COLUMN299&State=1&tableView=%25E5%259B%25BD%25E4%25BA%25A7%25E8%258D%25AF%25E5%2593%2581%25E5%2595%2586%25E5%2593%2581%25E5%2590%258D&State=1&cid=0&State=1&ytableId=0&State=1&searchType=search&State=1'
    req = request.Request(url=url, headers=headers)
    with request.urlopen(req, data) as f:
        with open('sfda.html', 'wb') as ff:
            ff.write(f.read())
    # main()
