from distutils.log import debug
from middleware import FileUpload
from flask import Flask
from middleware import Customers
from middleware import SyncDb
from flask_restful import Api


app = Flask(__name__)
api = Api(app)

# ! initialize DB
api.add_resource(SyncDb, '/db')

api.add_resource(Customers, '/customers')
api.add_resource(FileUpload, "/fileUpload")

app.run(debug=True, port=5000)
