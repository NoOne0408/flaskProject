from flask import Blueprint
import json
from back_end.service import Service

Controller = Blueprint("Controller", __name__)

service = Service()


# 北京部分区统计数据 显示为按平均价格由高到低排序的字典
@Controller.route("/BJCount", methods=['GET', 'POST'])
def BJHousePriceData():
    jsonData = service.getProStatistics("北京")
    return json.dumps(jsonData, ensure_ascii=False)
    pass


# 上海部分区统计数据 显示为按平均价格由高到低排序的字典
@Controller.route("/SHCount", methods=['GET', 'POST'])
def SHHousePriceData():
    jsonData = service.getProStatistics("上海")
    return json.dumps(jsonData, ensure_ascii=False)
    pass


# 河北部分地级市统计数据 显示为按平均价格由高到低排序的字典
@Controller.route("/HBCount", methods=['GET', 'POST'])
def HBHousePriceData():
    jsonData = service.getProStatistics("河北")
    return json.dumps(jsonData, ensure_ascii=False)
    pass


# 北京、上海、河北综合数据 显示为按平均价格由高到低排序的字典
@Controller.route("/CNCount", methods=['GET', 'POST'])
def CNHousePriceData():
    jsonData = service.getCNStatistics()
    return json.dumps(jsonData, ensure_ascii=False)
    pass


# 以字典形式返回平均价格的预测结果
@Controller.route("/PricePre", methods=['GET', 'POST'])
def HousePricePredictions():
    preData = service.getPricePredictions()
    return json.dumps(preData, ensure_ascii=False)
    pass


# 以字典形式返回某省/直辖市各地区不同面积房屋百分比
@Controller.route("/AreaPercent", methods=['GET', 'POST'])
def AreaPercent(pro="北京"):
    preData = service.getAreaPercent(pro)
    return json.dumps(preData, ensure_ascii=False)
    pass
