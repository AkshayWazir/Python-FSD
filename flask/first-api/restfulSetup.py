from flask import Flask, request
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)


class Store(Resource):
    def get(self, name):
        return {'store-name': name}

    def post(self):
        body = request.get_json()
        return {'name': 'Result'}


class Car(Resource):
    def get(self):
        return {'name': 'tat'}


api.add_resource(Store, '/store/<string:name>')

api.add_resource(Car, '/car')


app.run(debug=True, port=5000)
