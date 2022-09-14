import mysql.connector


class DbSync():
    def __init__(self) -> None:
        self.db = mysql.connector.connect(
            host="localhost", user="root", passwd="password", database="sql_clothing")
        self.cursor = self.db.cursor()

    def create(self):
        # self.cursor.execute("CREATE TABLE sql_customers (customerId int NOT NULL AUTO_INCREMENT, fullName VARCHAR(50) , address VARCHAR(100) , number VARCHAR(10), prime BIT, PRIMARY KEY (customerId));")
        self.cursor.execute(
            "CREATE TABLE sql_customers (customerId int NOT NULL AUTO_INCREMENT, fullName VARCHAR(50) , address VARCHAR(100) , number VARCHAR(10), prime BIT, PRIMARY KEY (customerId));")


class CustomersCont():
    def __init__(self) -> None:
        self.db = mysql.connector.connect(
            host="localhost", user="root", passwd="password", database="sql_clothing")
        self.cursor = self.db.cursor()

    def addCloth(self, name: str, address: str, number: str, prime: bool):
        insertQuery = "INSERT INTO sql_customers (fullName, address, number, prime) VALUES (%s , %s , %s, %s)"
        vals = (name, address, number, prime)
        self.cursor.execute(insertQuery, vals)
        self.db.commit()
        self.db.close()
        return True

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
