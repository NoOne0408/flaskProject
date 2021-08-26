from flask import Flask, render_template, request

from view.DataToHTML import dataLoading, getCityNow

from nut_chart import pieEcharts

from flask import json
from back_end.controller import SHHousePriceData,HBHousePriceData,BJHousePriceData,getPriceByTime,getRegPriceByTime

app = Flask(__name__)


def to_js(path, txt):
    f = open(path, "w")
    f.write(txt)
    f.close()


def get_js(fpath):
    f = open(fpath, 'r', encoding='utf-8')
    line = f.readline()
    htmlstr = ''
    while line:
        htmlstr = htmlstr + line
        line = f.readline()
    # print(htmlstr)
    f.close()
    return htmlstr


@app.route('/')
def hello_world():  # put application's code here
    roomType, floorType, years = dataLoading()
    return render_template('city.html', roomTypeList=roomType, floorTypeList=floorType, buildTimeList=years)

#前端选择省/直辖市  城市/区
#传值
@app.route('/progress1Echarts/', methods=['POST', 'GET'])
def progress1Echarts():
    # provienceName = prov
    # areaName = city
    # dict=getLocation()
    # prov=dict.get('province').split("市")[0]

    prov="北京"

    if (prov == "上海"):
        progressData=SHHousePriceData()
        print(progressData)


        a = json.loads(progressData)
    elif (prov == "北京"):
        progressData = BJHousePriceData()

        print("进入北京")
        print(progressData)
        a = json.loads(progressData)
    elif (prov == "河北"):
        progressData = HBHousePriceData()
        print(progressData)
        a = json.loads(progressData)
    else:
        print("错误错误错误")

    return a

#三省市对比
@app.route('/echart4/', methods=['POST', 'GET'])
def echart4():
    # provienceName = prov
    # areaName = city
    # dict=getLocation()
    # prov=dict.get('province').split("市")[0]
    compareData=getPriceByTime()
    a = json.loads(compareData)
    print("进入echart4")
    print(compareData)
    return a

#本地对比
@app.route('/loadTime/', methods=['POST', 'GET'])
def loadTime():
    address1 = request.args.get('address1')
    address2 = request.args.get('address2').split("区")[0]
    dict=address1+"-"+address2
    compareData=getRegPriceByTime(dict)
    a = json.loads(compareData)
    print("进入loadTime")
    print(compareData)
    return a

# 获得预测值
@app.route('/prarmsSubmit/', methods=['POST', 'GET'])
def prarmsSubmit():
    address1 = request.args.get('address1')
    address2 = request.args.get('address2').split("区")[0]
    roomType = request.args.get('roomType')
    floorType = request.args.get('floorType')
    buildTime = request.args.get('buildTime')
    area = request.args.get('area')

    dict = {"area": [area], "floor": [floorType], "build_time": [buildTime], "location": [address1 + "-" + address2],
            "room_shape": [roomType]}
    print(dict)

    # 调用预测函数
    s = "10000"

    pieEcharts(address1, address2)
    #echart4()
    # progress1Echarts(address1, address2)

    hpath1 = 'nut_0_50.html'
    hpath2 = 'nut_50_100.html'
    hpath3 = 'nut_100_150.html'
    hpath4 = 'nut_150_200.html'
    hpath5 = 'nut_200_.html'
    hpath6 = 'nut_all.html'

    fpath1 = 'static/js/pie1.js'
    fpath2 = 'static/js/pie2.js'
    fpath3 = 'static/js/pie3.js'
    fpath4 = 'static/js/pie4.js'
    fpath5 = 'static/js/pie5.js'
    fpath6 = 'static/js/pie6.js'

    h1 = get_js(hpath1).split("<body>")[1].split("</body>")[0].split("</div>")[1]
    h2 = get_js(hpath2).split("<body>")[1].split("</body>")[0].split("</div>")[1]
    h3 = get_js(hpath3).split("<body>")[1].split("</body>")[0].split("</div>")[1]
    h4 = get_js(hpath4).split("<body>")[1].split("</body>")[0].split("</div>")[1]
    h5 = get_js(hpath5).split("<body>")[1].split("</body>")[0].split("</div>")[1]
    h6 = get_js(hpath6).split("<body>")[1].split("</body>")[0].split("</div>")[1]

    to_js(fpath1, h1)
    to_js(fpath2, h2)
    to_js(fpath3, h3)
    to_js(fpath4, h4)
    to_js(fpath5, h5)
    to_js(fpath6, h6)

    print("p1")
    pie1id = get_js(fpath1).split("echarts.init")[0].split("_")[1].split("=")[0].replace(" ", "")
    pie1 = get_js(fpath1).replace(pie1id, "1af4b50fc15548d4a7c1d2a0bdbe4fcfhhhh")

    print("p2")
    pie2id = get_js(fpath2).split("echarts.init")[0].split("_")[1].split("=")[0].replace(" ", "")
    pie2 = get_js(fpath2).replace(pie2id, "f0458ed86c824a34b3b948f888a080e4")

    print("p3")
    pie3id = get_js(fpath3).split("echarts.init")[0].split("_")[1].split("=")[0].replace(" ", "")
    pie3 = get_js(fpath3).replace(pie3id, "cbc38fe58cb74d2e91813eda4ee7e6b6")

    print("p4")
    pie4id = get_js(fpath4).split("echarts.init")[0].split("_")[1].split("=")[0].replace(" ", "")
    pie4 = get_js(fpath4).replace(pie4id, "99ac3f72027740e5b5ba743d20377c54")

    print("p5")
    pie5id = get_js(fpath5).split("echarts.init")[0].split("_")[1].split("=")[0].replace(" ", "")
    pie5 = get_js(fpath5).replace(pie5id, "e5ad5f74632442e5bf022439396a9f50")

    print("p6")
    pie6id = get_js(fpath6).split("echarts.init")[0].split("_")[1].split("=")[0].replace(" ", "")
    pie6 = get_js(fpath6).replace(pie6id, "7ae24e84cda446d99e29ec37d1c77de2")

    print(pie2)

    data = {"price": s, "pie1": pie1, "pie2": pie2, "pie3": pie3, "pie4": pie4, "pie5": pie5, "pie6": pie6}

    return data


# 返回定位结果
@app.route('/getLocation/', methods=['POST', 'GET'])
def getLocation():
    latitude = request.args.get('latitude')
    longitude = request.args.get('longitude')

    dict = getCityNow(latitude, longitude)
    return dict

# 返回区时价字典
# @app.route('/getCityTimeToPrice/', methods=['POST', 'GET'])
# def getCityTimeToPrice():
#     address1 = request.args.get('address1')
#     address2 = request.args.get('address2').split("区")[0]
#     roomType = request.args.get('roomType')
#     floorType = request.args.get('floorType')
#     buildTime = request.args.get('buildTime')
#     area = request.args.get('area')
#
#     dict = {"area": [area], "floor": [floorType],"build_time": [buildTime], "location": [address1 + "-" + address2], "room_shape": [roomType]}
#     print(dict)
#
#     pie1 = get_js()
#
#     # 调用预测函数
#     s = "10000"
#     return s
#返回市时价字典

if __name__ == '__main__':
    app.run()
