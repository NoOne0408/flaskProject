from flask import app
import jieba
import datetime
from itsdangerous import json
import requests


# 加载初始化数据
def dataLoading():
    # 返回可选的建造年份
    years = []
    year = datetime.datetime.now().year
    while year - 10 >= 1980:
        interval = str(year - 10) + "-" + str(year)
        years.append(interval)
        print(interval)
        year -= 10

    # 返回可选房型
    roomType = ['1居室', '1室1厅', '2室1厅', '2室2厅', '3室1厅', '3室2厅', '4室1厅', '4室2厅']

    # 可选楼层类型
    floorType = ['低层', '中层', '高层']

    return roomType, floorType, years


# 根据经纬度获取城市
def getCityNow(latitude, longitude):
    # 获取前端传来经纬度 并获取完整url
    url = 'http://api.map.baidu.com/reverse_geocoding/v3/?ak=nXyAXdETM2NjnmuABSvXSvliRvxGb5Em&output=json' \
          '&coordtype=wgs84ll&location=' + latitude + ',' + longitude + '&oe=utf-8&format=json';

    # 访问api获取经纬度所对应的城市信息
    res = requests.get(url)
    res.encoding = 'utf-8'
    result = json.loads(res.text)["result"]["formatted_address"]

    # 获取并返回省级行政区信息
    province = list(jieba.cut(result))[0]  # jieba分割句子，得出省份
    city = list(jieba.cut(result))[1]
    dict = {'province': province, 'city': city}
    print(province + city)
    return dict
