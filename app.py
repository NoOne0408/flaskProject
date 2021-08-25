from flask import Flask, render_template, request
import datetime

app = Flask(__name__)


@app.route('/')
def hello_world():  # put application's code here

    roomType = ['1居室', '1室1厅', '2室1厅', '2室2厅', '3室1厅', '3室2厅', '4室1厅', '4室2厅']
    dict = {'name': 'zhangsan'}
    years = build_time_scope()
    return render_template('city.html', roomTypeList=roomType, dict=dict, buildTimeList=years)


# 返回可选的建造年份
def build_time_scope():
    years = []
    year = datetime.datetime.now().year
    while year - 10 >= 1980:
        interval = str(year - 10) + "-" + str(year)
        years.append(interval)
        print(interval)
        year -= 10
    return years


@app.route('/prarmsSubmit/', methods=['POST', 'GET'])
def prarmsSubmit():
    address1 = request.args.get('address1')
    address2 = request.args.get('address2').split("区")[0]
    roomType = request.args.get('roomType')
    floorType = request.args.get('floorType')
    buildTime = request.args.get('buildTime')
    area = request.args.get('area')

    dict = {"area": [area], "floor": [floorType],
            "build_time": [buildTime], "location": [address1 + "-" + address2], "room_shape": [roomType]}

    print(dict)

    s = "10000"
    return s





if __name__ == '__main__':
    app.run()
