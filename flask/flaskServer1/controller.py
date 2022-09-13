import mysql.connector


class DbSync():

    @classmethod
    def create(cls):
        myDb = mysql.connector(
            host="localhost", user="root", passwd="password")
        dbCursor = myDb.cursor()
        dbCursor.execute("CREATE DATABASE sql_clothing")
        dbCursor.execute(
            "CREATE TABLE sql_customers (customerId int AUTO_INCREMENT, fullName VARCHAR(50) , address VARCHAR(100) , number VARCHAR(10), prime BIT)s")

    @classmethod
    def update(cls):
        # TODO : update dB and tables over here
        pass


class CustomersCont():
    @classmethod
    def create(cls):
        # TODO : Create SQL command to make a new customer
        pass

    @classmethod
    def updateNumber(cls):
        # TODO : Create SQL command to update phone number
        pass


class StoreCont():
    @classmethod
    def create(cls):
        # TODO : Create SQL command to make a new Store
        pass

    @classmethod
    def updateInventory(cls):
        # TODO : Create SQL command to update inventory
        pass
