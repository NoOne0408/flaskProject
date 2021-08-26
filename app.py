from flask import Flask, render_template, request

from view.DataToHTML import dataLoading, getCityNow

app = Flask(__name__)

def get_js():
    f = open('static/js/pie1.js', 'r', encoding='utf-8')
    line = f.readline()
    htmlstr = ''
    while line:
        htmlstr = htmlstr + line
        line = f.readline()
    print(htmlstr)
    return htmlstr


@app.route('/')
def hello_world():  # put application's code here
    roomType, floorType, years = dataLoading()
    return render_template('city.html', roomTypeList=roomType, floorTypeList=floorType, buildTimeList=years)


# 获得预测值
@app.route('/prarmsSubmit/', methods=['POST', 'GET'])
def prarmsSubmit():
    address1 = request.args.get('address1')
    address2 = request.args.get('address2').split("区")[0]
    roomType = request.args.get('roomType')
    floorType = request.args.get('floorType')
    buildTime = request.args.get('buildTime')
    area = request.args.get('area')

    dict = {"area": [area], "floor": [floorType],"build_time": [buildTime], "location": [address1 + "-" + address2], "room_shape": [roomType]}
    print(dict)

    pie1 = get_js()

    # 调用预测函数
    s = "10000"
    return s


# 返回定位结果
@app.route('/getLocation/', methods=['POST', 'GET'])
def getLocation():
    latitude = request.args.get('latitude')
    longitude = request.args.get('longitude')

    dict = getCityNow(latitude, longitude)
    return dict


if __name__ == '__main__':
    app.run()
