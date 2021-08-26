import pymysql
import json


class BaseDao:

    def __init__(self, config="mysql.json"):
        self.__params = json.load(open(config, "r"))
        self.__connection = None
        self.__cursor = None
        pass

    def getConnection(self):
        if self.__connection is not None:
            return self.__connection
            pass
        try:
            self.__connection = pymysql.connect(**self.__params)
        except pymysql.DatabaseError as e:
            print(e)
            pass
        finally:
            return self.__connection
        pass

    def execute(self, sql, params=None, ctype="tuple"):
        result = 0
        try:
            self.__connection = self.getConnection()
            if ctype == "dict":
                self.__cursor = self.__connection.cursor(pymysql.cursors.DictCursor)
            else:
                self.__cursor = self.__connection.cursor()
            result = self.__cursor.execute(sql, params)
        except Exception as e:
            print(e)
            pass
        return result
        pass

    def fetchOne(self):
        if self.__cursor is not None:
            return self.__cursor.fetchone()
        pass

    def fetchAll(self):
        if self.__cursor is not None:
            return self.__cursor.fetchall()
        pass

    def commit(self):
        if self.__connection is not None:
            self.__connection.commit()
            pass
        pass

    def rollback(self):
        if self.__connection is not None:
            self.__connection.rollback()
            pass
        pass

    def close(self):
        if self.__cursor is not None:
            return self.__cursor.close()
            pass
        if self.__connection is not None:
            self.__connection.close()
            pass
        pass

    pass
