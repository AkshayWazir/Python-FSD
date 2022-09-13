# Open ‘Run’ Window by using Win key + R
# Type ‘services.msc’
# Now search for MySQL service based on the version that is installed.
# Click on ‘start’ the service option.

import mysql.connector

myDb = mysql.connector.connect(
    host="localhost", passwd="password", database="sql_store")

myCursor = myDb.cursor()

# selectCommand = "SELECT first_name, last_name FROM orders o JOIN customers c ON o.customer_id = c.customer_id"

# selectCommand = "CREATE TABLE appUsers (id int, username text, password text)"

# appUser = (1, "Akshay", "abc")
appUsers = [(2, "Lakshay", "abc"), (3, "Divya", "abc"), (4, "Rohan", "abc")]
insertQuery = "INSERT INTO appUsers VALUES (%s, %s, %s)"
myCursor.executemany(insertQuery, appUsers)
# print(myCursor.fetch())
# result = myCursor.fetchall()
# for row in result:
#     print(f"{row[0]} {row[1]}")

myDb.commit()
myDb.close()

# ? Create Table
# * To create database for a Clothing brand that sells all kinds of clothes
# * We need one Database : sql_clothing
# *     table name : columns required
# *     sql_customers : customerId(int, autoIncrement) , fullName(varchar: 50, notNull), address, number, prime
# *     sql_store : storeID, name, address, invId, locationCode
# *     sql_inventory : prodId, name, description, Qty, price, locId
# *     sql_location : locId, name

# ? create Data
# * Function 1 : toCreate New Customers (everything except customerId)
# * func 2 : to Create a new Store : (everything except storeId)
# * func 3 : to Create a new Inventory : (everything except prodId)
# * func 4 : to creaete location with name (except locId)

# ? Create Relation
# * Foregin key between location code in sql_store and sql_location
# * Foregin key between location code in prod_id and invId
