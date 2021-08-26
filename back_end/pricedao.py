import json
import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestRegressor

from back_end.basedao import BaseDao


class PriceDao(BaseDao):
    with open('back_end/data.json', 'r+',encoding="utf-8") as file:
        data = json.load(file)

    def __init__(self):
        super().__init__()
        self.regionList = None
        self.regionDict = None
        # self.deleteHouseData()
        # self.createHouseData()
        # self.dumpDataToBase()
        # 训练模型
        self.__train__ = pd.read_csv('dtzData.csv', header=None, names=['A', 'B', 'C', 'D', 'E', 'F', 'G'])
        self.__x_train__ = self.__train__.drop('G', axis=1)
        self.__y_train__ = np.array(self.__train__['G'])
        self.__model__ = None

    # 建立二级地域词典
    def getRegionList(self):
        regionList = []
        sql = "select location from houseData group by location"
        self.execute(sql, ctype="dict")
        dataDict = self.fetchAll()
        for datum in dataDict:
            loc = datum['location'].split(" ")[1]
            region = loc.split('-')[1]
            if region not in regionList:
                regionList.append(region)
                pass
            pass

        self.regionList = regionList
        pass

    # 建立一二级地域词典
    # 返回值：包含唯一地域名的字典 regionDict 键为一级地名 值为二级地名列表
    def getRegionDict(self):
        regionDict = {}
        sql = "select location from houseData group by location"
        self.execute(sql, ctype="dict")
        dataDict = self.fetchAll()
        for datum in dataDict:
            loc = datum['location'].split(" ")[1]
            pro = loc.split('-')[0]
            region = loc.split('-')[1]
            if pro not in regionDict.keys():
                regionDict[pro] = [region]
            elif region not in regionDict[pro]:
                regionDict[pro].append(region)
                pass
            pass

        self.regionDict = regionDict
        pass

    # 将数据库存储的字典类型转化为预测需要的离散化数据列表
    # 参数：houseData字典
    # 返回值：houseDataList列表
    def dataDict2List(self, dataDict):
        # 面积离散化
        dtzDatum = [float(dataDict['area'][0].replace('平方米', ''))]
        # 层数离散化
        dtzDatum += [3 if '高' in dataDict['floor'][0] else 2 if '中' in dataDict['floor'][0] else 1]
        # 建造时间离散化
        dtzDatum += [float(dataDict['build_time'][0].replace('年建造', ''))]
        # 房型离散化
        dtzDatum += [int(dataDict['room_shape'][0].split("室")[0])]
        dtzDatum += [int(dataDict['room_shape'][0].split("室")[1].split("厅")[0])]
        # 地区离散化
        region = dataDict['location'][0].split("\n")[2].strip('[').strip(']').split('-')[1]
        dtzDatum += [int(self.regionList.index(region)) + 1]  # 拉普拉斯平滑
        # 价格离散化
        dtzDatum += [float(dataDict['average_price'][0].replace("元/m²", ""))]
        return dtzDatum
        pass

    # 数据预处理
    # 输出：dtzData.csv
    def dataPreprocess(self):
        sql = "select * from houseData"
        self.execute(sql, ctype="dict")
        dataDict = self.fetchAll()

        dtzDataList = []
        self.getRegionList()

        for datum in dataDict:
            dtzDataList.append(self.dataDict2List(datum))
            pass

        np.savetxt('dtzData.csv', dtzDataList, delimiter=',')
        pass

    # 某省市各地区平均房价获取
    # 参数：pro(str):目标省市的名字，如："北京"、"上海"
    # 返回值：priceDict(dict):key: 区域名，value: 平均价格（单位：m²/元）按value由高到低排序
    def getAvgPriceOfPro(self, pro):
        priInThePro = []
        dataDict = self.getLocationsAndAvgPrice()

        for datum in dataDict:
            loc = datum['location'].split(" ")[1]
            if loc.split('-')[0] == pro:
                priInThePro.append(datum)
                pass
            pass

        priceDict = {}
        for item in priInThePro:
            loc = item['location'].split(" ")[1]
            region = loc.split('-')[1]
            if region not in priceDict:
                priceDict[region] = []
                pass
            priceDict[region].append(float(item["average_price"].replace("元/m²", "")))
            pass

        for region in priceDict:
            priceDict[region] = np.round(np.average(priceDict[region]), 2)
            pass
        sorted_priceDict = sorted(priceDict.items(), key=lambda d: d[1], reverse=True)
        return dict(sorted_priceDict)
        pass

    # 全国各省市平均房价获取
    # 参数：无
    # 返回值：priceDict(dict):key: 省市名，value: 平均价格（单位：m²/元）
    def getAvgPrice(self):
        priceDict = {}
        dataDict = self.getLocationsAndAvgPrice()

        for datum in dataDict:
            loc = datum['location'].split(" ")[1]
            pro = loc.split('-')[0]
            if pro not in priceDict:
                priceDict[pro] = []
                pass
            priceDict[pro].append(float(datum["average_price"].replace("元/m²", "")))
            pass

        for pro in priceDict:
            priceDict[pro] = np.round(np.average(priceDict[pro]), 2)
            pass
        sorted_priceDict = sorted(priceDict.items(), key=lambda d: d[1], reverse=True)
        return dict(sorted_priceDict)
        pass

    # 预测房价函数
    # 参数: inputData(目标房屋条件) 字典类型，键为条件名，值为字符串类型
    # 返回值：预测房价 字典类型
    def randomForestForHouseData(self, inputData=None):
        if inputData is None:
            inputData = {"area": ["66"], "floor": ["中层"], "build_time": ["1995-2005"], "location": ["北京-丰台"],
                         "room_shape": ["2室1厅"]}
        if self.__model__ is None:
            self.__model__ = RandomForestRegressor(n_estimators=100, max_features=None)
            self.__model__.fit(self.__x_train__, self.__y_train__)
            pass
        if self.regionList is None:
            self.getRegionList()
            pass
        if self.regionDict is None:
            self.getRegionDict()
            pass
        preDict = {}

        # 面积离散化
        dtzDatum = [float(inputData['area'][0])]
        # 层数离散化
        dtzDatum += [3 if '高' in inputData['floor'][0] else 2 if '中' in inputData['floor'][0] else 1]
        # 建造时间离散化
        dtzDatum += [np.average([float(x) for x in inputData['build_time'][0].split('-')])]
        # 房型离散化
        dtzDatum += [int(inputData['room_shape'][0].split("室")[0])]
        dtzDatum += [int(inputData['room_shape'][0].split("室")[1].split("厅")[0])]
        # 地区离散化及扩展
        pro = inputData['location'][0].split('-')[0]
        region = inputData['location'][0].split('-')[1]
        dtzDatum += [int(self.regionList.index(region)) + 1]  # 拉普拉斯平滑

        prediction = self.__model__.predict([dtzDatum, dtzDatum])
        preDict[region] = np.round(prediction[0], 2)

        for datum in self.regionDict[pro]:
            dtzDatum.pop()
            if datum is not region:
                dtzDatum += [int(self.regionList.index(datum)) + 1]
            prediction = self.__model__.predict([dtzDatum, dtzDatum])
            preDict[datum] = np.round(prediction[0], 2)
            pass

        return preDict
        pass

    # 筛选房源函数
    # 参数: inputData(目标房屋条件) 字典类型，键为条件名，值为字符串类型
    # 返回值：符合条件的房源信息 字典类型
    def searchHouse(self, inputData=None):
        if inputData is None:
            inputData = {"area": ["66"], "floor": ["中层"], "build_time": ["1995-2005"], "location": ["北京-丰台"],
                         "room_shape": ["2室1厅"]}
        resDict = {}
        idCnt = 0

        build_time_start = float(inputData["build_time"][0].split("-")[0])
        build_time_end = float(inputData["build_time"][0].split("-")[1])
        area_max = float(inputData["area"][0]) + 5
        area_min = float(inputData["area"][0]) - 5

        houseData = self.getAllDetails()
        for datum in houseData:
            if (inputData["location"][0] == datum["loc"] and
                    inputData["floor"][0] in datum["floor"] and
                    inputData["room_shape"][0] == datum["room_shape"] and
                    area_max >= float(datum["area"].replace("平方米", "")) >= area_min and
                    build_time_end >= float(datum['build_time'].replace('年建造', '')) >= build_time_start):
                resDict[idCnt] = datum
                idCnt += 1
                pass

        return resDict
        pass

    # 获取各省、直辖市不同区域的房屋面积占比
    # 参数：pro(str):目标省市的名字，如："北京"、"上海"
    # 返回值：priceDict(dict):key: 区域名，value: 平均价格（单位：m²/元）按value由高到低排序
    def getAreaPercentInThePro(self, pro):
        AreaInThePro = []
        dataDict = self.getLocationsAndArea()

        for datum in dataDict:
            loc = datum['location'].split(" ")[1]
            if loc.split('-')[0] == pro:
                AreaInThePro.append(datum)
                pass
            pass

        AreaDict = {}
        for item in AreaInThePro:
            loc = item['location'].split(" ")[1]
            region = loc.split('-')[1]
            if region not in AreaDict.keys():
                AreaDict[region] = []
                pass
            area = float(item["area"].replace("平方米", ""))
            AreaDict[region] += [
                "0-50" if area < 50 else "50-100" if area < 100 else "100-150" if area < 150 else "150-200" if area < 200 else "200以上"]
            pass

        result = {}
        for region in AreaDict:
            result[region] = {}
            for areaGra in AreaDict[region]:
                div = np.round(AreaDict[region].count(areaGra) / len(AreaDict[region]), 4)
                result[region][areaGra] = str(div * 100) + "%"
                pass
            pass
        return result

    # 获取全国各省、直辖市平均价格与建造时间的关系
    def getAvgPriceByBuildTime(self):
        data = self.getLocations_BuildTimes_AvgPrice()

        priceByTimeDict = {}
        for datum in data:
            if datum["pro"] not in priceByTimeDict.keys():
                priceByTimeDict[datum["pro"]] = {"1980之前": [], "1980-1984": [], "1985-1989": [],
                                                 "1990-1994": [], "1995-1999": [], "2000-2004": [],
                                                 "2005-2009": [], "2010-2014": [], "2015至今": []}
                pass

            keyName = str(int((198 + datum["time_grade"] / 2) * 10)) + "-" + str(
                int((198 + datum["time_grade"] / 2) * 10 + 4))
            avg_price = float(datum["average_price"].replace("元/m²", ""))
            if datum["time_grade"] > 6:
                priceByTimeDict[datum["pro"]]["2015至今"].append(avg_price)
            elif datum["time_grade"] < 0:
                priceByTimeDict[datum["pro"]]["1980之前"].append(avg_price)
            else:
                priceByTimeDict[datum["pro"]][keyName].append(avg_price)
                pass
            pass

        for key, value in priceByTimeDict.items():
            for yearSep, priceList in value.items():
                if not priceList:
                    value[yearSep] = 0
                else:
                    value[yearSep] = np.round(np.average(priceList), 2)
                    pass
            pass

        return priceByTimeDict
        pass

    # 获取指定省、直辖市平均价格与建造时间的关系
    def getProAvgPriceByBuildTime(self, pro):
        data = self.getBuildTimes_AvgPriceInThePro(pro)

        priceByTimeDict = {"1980之前": [], "1980-1984": [], "1985-1989": [],
                           "1990-1994": [], "1995-1999": [], "2000-2004": [],
                           "2005-2009": [], "2010-2014": [], "2015至今": []}
        for datum in data:
            keyName = str(int((198 + datum["time_grade"] / 2) * 10)) + "-" + \
                      str(int((198 + datum["time_grade"] / 2) * 10 + 4))
            avg_price = float(datum["average_price"].replace("元/m²", ""))
            if datum["time_grade"] > 6:
                priceByTimeDict["2015至今"].append(avg_price)
            elif datum["time_grade"] < 0:
                priceByTimeDict["1980之前"].append(avg_price)
            else:
                priceByTimeDict[keyName].append(avg_price)
                pass
            pass

        for key, value in priceByTimeDict.items():
            if not value:
                priceByTimeDict[key] = 0
            else:
                priceByTimeDict[key] = np.round(np.average(value), 2)
                pass

        return priceByTimeDict
        pass

    # 获取指定地级市/区域平均价格与建造时间的关系
    def getRegionAvgPriceByBuildTime(self, pro_reg):
        data = self.getBuildTimes_AvgPriceInTheRegion(pro_reg)

        priceByTimeDict = {"1980之前": [], "1980-1984": [], "1985-1989": [],
                           "1990-1994": [], "1995-1999": [], "2000-2004": [],
                           "2005-2009": [], "2010-2014": [], "2015至今": []}
        for datum in data:
            keyName = str(int((198 + datum["time_grade"] / 2) * 10)) + "-" + \
                      str(int((198 + datum["time_grade"] / 2) * 10 + 4))
            avg_price = float(datum["average_price"].replace("元/m²", ""))
            if datum["time_grade"] > 6:
                priceByTimeDict["2015至今"].append(avg_price)
            elif datum["time_grade"] < 0:
                priceByTimeDict["1980之前"].append(avg_price)
            else:
                priceByTimeDict[keyName].append(avg_price)
                pass
            pass

        for key, value in priceByTimeDict.items():
            if not value:
                priceByTimeDict[key] = 0
            else:
                priceByTimeDict[key] = np.round(np.average(value), 2)
                pass

        return priceByTimeDict
        pass

    # 创建数据表 houseData
    def createHouseData(self):
        sql = "CREATE TABLE IF NOT EXISTS houseData (" \
              "id INT UNSIGNED AUTO_INCREMENT," \
              "area VARCHAR(20) NOT NULL," \
              "average_price VARCHAR(20) NOT NULL," \
              "floor VARCHAR(20) NOT NULL," \
              "build_time VARCHAR(20) NOT NULL," \
              "location VARCHAR(255) NOT NULL," \
              "room_shape VARCHAR(20) NOT NULL," \
              "price VARCHAR(20) NOT NULL," \
              "PRIMARY KEY (id));"
        result = self.execute(sql)
        self.commit()
        return result
        pass

    # 将data.json文件持久化
    def dumpDataToBase(self):
        i = 0
        while i < 3000:
            i += 1
            print(u'正在载入第%s行......' % i)
            text = self.data[i - 1]  # 使用逐行读取的方法
            params = [text['area'],
                      text['average_price'],
                      text['floor'],
                      text['build_time'],
                      text['location'][0].replace('\n', '').replace('[', ' ').replace(']', ''),
                      text['room_shape'],
                      text['price']]
            sql = "INSERT INTO houseData(" \
                  "area, average_price, floor, build_time, location, room_shape, price" \
                  ") VALUES (%s,%s,%s,%s,%s,%s,%s);"
            result = self.execute(sql, params=params)
            self.commit()
            pass
        pass

    # 获取全部数据并提取一二级地点信息
    def getAllDetails(self):
        sql = "select * from houseData"
        self.execute(sql, ctype="dict")
        data = self.fetchAll()

        for datum in data:
            loc = datum['location'].split(" ")[1]
            datum["loc"] = loc.split("-")[0] + "-" + loc.split("-")[1]
            pass

        return data
        pass

    # 获取全部地点信息、建造时间、平均价格并按照建造时间由早到晚分级，提取地点信息
    def getLocations_BuildTimes_AvgPrice(self):
        sql = "select location, build_time, average_price from houseData"
        self.execute(sql, ctype="dict")
        data = self.fetchAll()

        for datum in data:
            # 时间分级
            year = datum['build_time'].replace("年建造", "")
            if len(year) < 4:
                print(datum["location"])
            decade = int(year[:3])
            isUp = int(year[3])
            datum["time_grade"] = (decade - 198) * 2 if isUp < 5 else (decade - 198) * 2 + 1

            # 地点提取
            loc = datum['location'].split(" ")[1]
            datum["pro"] = loc.split("-")[0]
            pass

        return data
        pass

    # 获取指定省市建造时间、平均价格并按照建造时间由早到晚分级，提取地点信息
    def getBuildTimes_AvgPriceInThePro(self, pro):
        sql = "select location, build_time, average_price from houseData"
        self.execute(sql, ctype="dict")
        data = self.fetchAll()
        result = []

        for datum in data:
            res = {}
            # 地点提取
            loc = datum['location'].split(" ")[1]
            province = loc.split("-")[0]
            if province != pro:
                continue
                pass

            res['build_time'] = datum['build_time']
            res['average_price'] = datum['average_price']

            # 时间分级
            year = datum['build_time'].replace("年建造", "")
            decade = int(year[:3])
            isUp = int(year[3])
            res["time_grade"] = (decade - 198) * 2 if isUp < 5 else (decade - 198) * 2 + 1

            result.append(res)
            pass

        print(result)
        return result
        pass

    # 获取指定省市建造时间、平均价格并按照建造时间由早到晚分级，提取地点信息
    def getBuildTimes_AvgPriceInTheRegion(self, pro_reg):
        sql = "select location, build_time, average_price from houseData"
        self.execute(sql, ctype="dict")
        data = self.fetchAll()
        result = []

        for datum in data:
            res = {}
            # 地点提取
            pro = pro_reg.split("-")[0]
            reg = pro_reg.split("-")[1]

            loc = datum['location'].split(" ")[1]
            province = loc.split("-")[0]
            region = loc.split("-")[1]
            if province != pro or region != reg:
                continue
                pass

            res['build_time'] = datum['build_time']
            res['average_price'] = datum['average_price']

            # 时间分级
            year = datum['build_time'].replace("年建造", "")
            decade = int(year[:3])
            isUp = int(year[3])
            res["time_grade"] = (decade - 198) * 2 if isUp < 5 else (decade - 198) * 2 + 1

            result.append(res)
            pass

        print(result)
        return result
        pass

    # 获取指定省市分区信息、建造时间、平均价格并按照建造时间由早到晚分级，提取地点信息
    def getRegions_BuildTimes_AvgPrice(self, pro):
        sql = "select location, build_time, average_price from houseData"
        self.execute(sql, ctype="dict")
        data = self.fetchAll()
        result = []

        for datum in data:
            res = {}
            # 地点提取
            loc = datum['location'].split(" ")[1]
            province = loc.split("-")[0]
            if province != pro:
                continue
                pass
            region = loc.split("-")[1]
            res['region'] = region

            res['location'] = datum['location']
            res['build_time'] = datum['build_time']
            res['average_price'] = datum['average_price']

            # 时间分级
            year = datum['build_time'].replace("年建造", "")
            decade = int(year[:3])
            isUp = int(year[3])
            res["time_grade"] = (decade - 198) * 2 if isUp < 5 else (decade - 198) * 2 + 1

            result.append(res)
            pass

        print(result)
        return result
        pass

    # 获取全部地点信息及面积数据
    def getLocationsAndArea(self):
        sql = "select location, area from houseData"
        self.execute(sql, ctype="dict")
        return self.fetchAll()
        pass

    # 获取全部地点信息及平均价格数据
    def getLocationsAndAvgPrice(self):
        sql = "select location, average_price from houseData"
        self.execute(sql, ctype="dict")
        return self.fetchAll()
        pass

    # 删除数据表 houseData
    def deleteHouseData(self):
        sql = "DROP TABLE IF EXISTS houseData;"
        result = self.execute(sql)
        self.commit()
        return result
        pass

    pass
