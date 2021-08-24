from flask import Flask, render_template, request
import datetime

app = Flask(__name__)



@app.route('/')
def hello_world():  # put application's code here

    roomType = ['一居室', '一室一厅', '两室一厅', '两室两厅', '三室一厅', '三室两厅', '三室一厅', '三室两厅']
    dict = {'name': 'zhangsan'}
    years = build_time_scope()
    return render_template('city.html', roomTypeList=roomType, dict=dict, buildTimeList=years)


# 返回可选的建造年份
def build_time_scope():
    years = []
    year = datetime.datetime.now().year
    while year >= 1980:
        if (year == datetime.datetime.now().year):
            interval = str(year - 10) + "~至今"
        else:
            interval = str(year - 10) + "~" + str(year)
        years.append(interval)
        print(interval)
        year -= 10
    return years


@app.route('/prarmsSubmit/', methods=['POST', 'GET'])
def prarmsSubmit():
    address1 = request.args.get('address1')
    address2 = request.args.get('address2')
    roomType = request.args.get('roomType')
    buildTime = request.args.get('buildTime')
    area = request.args.get('area')
    print(address1 + address2 + roomType + buildTime + area)
    s = "10000"
    return s


if __name__ == '__main__':
    app.run()
