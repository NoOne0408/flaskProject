from back_end.pricedao import PriceDao


class Service:
    priceDao = PriceDao()

    # 以字典类型返回某省市具体统计数据 按平均价格由高到低排序
    def getProStatistics(self, pro):
        result = None
        try:
            result = self.priceDao.getAvgPriceOfPro(pro)
        finally:
            self.priceDao.close()
        return result
        pass

    # 以字典类型返回全国具体统计数据
    def getCNStatistics(self):
        result = None
        try:
            result = self.priceDao.getAvgPrice()
        finally:
            self.priceDao.close()
        return result
        pass

    # 以字典类型返回某省/直辖市各地区不同面积房屋百分比
    def getAreaPercent(self, pro):
        result = None
        try:
            result = self.priceDao.getAreaPercentInThePro(pro)
        finally:
            self.priceDao.close()
        return result
        pass

    # 以字典类型返回全国各省市平均价格随建造时间的变化关系
    def getAvgPriceByBuildTimeService(self):
        result = None
        try:
            result = self.priceDao.getAvgPriceByBuildTime()
        finally:
            self.priceDao.close()
        return result
        pass

    # 以字典类型返回指定省市平均价格随建造时间的变化关系
    def getProAvgPriceByBuildTimeService(self, pro):
        result = None
        try:
            result = self.priceDao.getProAvgPriceByBuildTime(pro)
        finally:
            self.priceDao.close()
        return result
        pass

    # 以字典类型返回指定区域平均价格随建造时间的变化关系
    def getRegAvgPriceByBuildTimeService(self, pro_reg):
        result = None
        try:
            result = self.priceDao.getRegionAvgPriceByBuildTime(pro_reg)
        finally:
            self.priceDao.close()
        return result
        pass

    # 根据所给条件进行房价预测 返回全直辖市/省 区域：价格 字典
    def getPricePredictions(self, kv):
        result = None
        try:
            result = self.priceDao.randomForestForHouseData(kv)
        finally:
            self.priceDao.close()
        return result
        pass

    # 根据所给条件进行房源检索 返回符合条件的全信息字典 键为序号
    def getHouseDataPlan(self, kv):
        result = None
        try:
            result = self.priceDao.searchHouse(kv)
        finally:
            self.priceDao.close()
        return result
        pass

    pass
