from urllib import request
from urllib import parse
from lxml import etree


def get_time(url):
    with request.urlopen(url) as response:
        resHtml = response.read()
        html = etree.HTML(resHtml)
        time = html.xpath('//span[@class="tail-info"]')[-1].text
        print(time)
        return time


def main():
    for pn in range(0, 50, 50):
        kw = '网络爬虫'
        url = 'http://tieba.baidu.com/f?kw=' + parse.quote(kw) + '&ie=utf-8&pn=' + str(pn)
        print(url)
        req = request.Request(url)
        res = request.urlopen(req)
        html_dom = etree.HTML(res.read())
        for site in html_dom.xpath('//li[@data-field]'):
            title = site.xpath('.//a[@class="j_th_tit "]')[0].text
            article_url = site.xpath('.//a[@class="j_th_tit "]')[0].attrib['href']
            reply_date = get_time('http://tieba.baidu.com' + article_url)
            divs = site.xpath('.//*[@class="threadlist_abs threadlist_abs_onlyline "]')
            jieshao = ""
            last_responder = ""
            if len(divs) > 0:
                jieshao = divs[0].text.strip()
            author = site.xpath('.//a[@class="frs-author-name j_user_card "]')[0].text
            if len(site.xpath('.//a[@class="frs-author-name j_user_card "]')) > 1:
                last_responder = site.xpath('.//a[@class="frs-author-name j_user_card "]')[1].text
            print(title)
            print(article_url)
            print(author)
            print(last_responder)


if __name__ == '__main__':
    url = "http://tieba.baidu.com/p/5356514742?fid=1033257"
    with request.urlopen(url) as response:
        resHtml = response.read()
        html = etree.HTML(resHtml, parser=etree.HTMLParser(encoding='utf-8'))
        # 处理源文件的时候，由于没有指定编码，所以它使用了一个默认编码，从而导致和UTF-8冲突，产生乱码
        # http://lxml.de/api/index.html
        spans = html.xpath('//span[@class="tail-info"]')
        a = html.xpath('//li[@class="l_pager pager_theme_5 pb_list_pager"]/a')
        print(len(a))
        print(etree.tostring(a[4]))
        print(a[4].text)
        if len(spans) > 0:
            time = spans[0].text
        elif 0:
            pass
        # print(time)