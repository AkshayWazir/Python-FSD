
# * first make the directory
# * py -3 -m venv flask
# * flask\Scripts\activate

# ! in case of any error
# * open powershell with admin access
# * 'set-executionpolicy remotesigned'
# * then write 'A' then enter
# ? try again above process


from flask import Flask, request, jsonify

app = Flask(__name__)

# GET : get the data from the server
# POST ; you send data to server and expect a response
# PUT : When u want to send data to the database and update it
# DELETE : when u want to remove entry


# ? this is called and API
@app.route("/")
def initiate():
    reqObj = request.get_json()  # this is deoctionary
    # string templating
    print(f"Name is {reqObj['name']} and id is {reqObj['id']}")
    reqObj["id"] = 45
    return jsonify(reqObj)
# we can convert only dictionary to JSON object


stores = [{"name": "Raman Store", "items": [
    {"name": "Shirt", "qty": 56}, {"name": "Pants", "qty": 34}]}]

# ! write the following APIS
# * use POST request for all of them and make changes in the above stores variable
# ? get All the stores
# ? get all the items from the store
# ? get the quantity of specific item in the store
# ? add a new store
# ? add a new item to specific store

app.run(debug=True, port=5000)
