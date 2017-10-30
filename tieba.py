from urllib import request
from urllib import parse
from lxml import etree
import json
from collections import OrderedDict



def get_time(url):
    # 获取最后回复时间，不考虑楼中楼的时间
    with request.urlopen(url) as response:
        resHtml = response.read()
        html = etree.HTML(resHtml, parser=etree.HTMLParser(encoding='utf-8'))
        # 处理源文件的时候，由于没有指定编码，所以它使用了一个默认编码，从而导致和UTF-8冲突，产生乱码
        # http://lxml.de/api/index.html
        spans = html.xpath('//span[@class="tail-info"]')
        a = html.xpath('//li[@class="l_pager pager_theme_5 pb_list_pager"]/a')
        if len(a) > 0:
            end_url = 'http://tieba.baidu.com' + a[-1].attrib['href']
            with request.urlopen(end_url) as end_res:
                resHtml = end_res.read()
                end_html = etree.HTML(resHtml, parser=etree.HTMLParser(encoding='utf-8'))
                spans = end_html.xpath('//span[@class="tail-info"]')
                if len(spans) > 0:
                    print(spans[-1].text)
                    return spans[-1].text
                else:
                    lis = end_html.xpath('//div[@class="l_post j_l_post l_post_bright  "]')
                    if len(lis) > 0:
                        author_content = json.loads(lis[-1].attrib['data-field'])
                        print(author_content['content']['date'])
                        return author_content['content']['date']
            print(end_url)
        elif len(spans) > 0:
            print(spans[-1].text)
            return spans[-1].text
        else:
            lis = html.xpath('//div[@class="l_post j_l_post l_post_bright  "]')
            if len(lis) > 0:
                author_content = json.loads(lis[-1].attrib['data-field'])
                print(author_content['content']['date'])
                return author_content['content']['date']


def main():
    for pn in range(0, 50, 50):
        kw = '网络爬虫'
        url = 'http://tieba.baidu.com/f?kw=' + parse.quote(kw) + '&ie=utf-8&pn=' + str(pn)
        print(url)
        req = request.Request(url)
        res = request.urlopen(req)
        html_dom = etree.HTML(res.read())

        items = OrderedDict()
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

            item = {}
            item['title'] = title
            item['reply_date'] = reply_date
            item['author'] = author
            item['last_responder'] = last_responder
            items['http://tieba.baidu.com' + article_url] = item
        with open('tieba.json', 'w') as f:
            f.write(json.dumps(items, indent=4, ensure_ascii=False))


if __name__ == '__main__':
    main()