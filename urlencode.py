from urllib import parse

country = u'中国'
print(country.encode('utf8'))
print(parse.quote(country))

print(country.encode('gb2312'))
print(parse.quote(country, encoding='gb2312'))

query = {
    'city': '北京',
    'district': '朝阳区',
    'bizArea': '望京'
}
print(parse.urlencode(query, encoding='utf8'))

query = {
    'keywords': '手机及配件市场'.encode('gb2312'),
}
print(parse.urlencode(query, 'gb2312'))

query = {
    'q': '安全门'.encode('gb2312'),
}
print(parse.urlencode(query, 'gb2312'))
