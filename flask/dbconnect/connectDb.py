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
