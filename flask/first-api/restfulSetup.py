from flask import Flask, request
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

stores = []


class Item():
    def __init__(self, name, _id, price) -> None:
        self.id = _id
        self.name = name
        self.price = price


class Store():
    def __init__(self, name: str, _id: int) -> None:
        self.name = name
        self.id = _id
        self.items = []

    def addItem(self, item: Item):
        foundItems = next(filter(lambda x: x.id == item.id), None)
        if foundItems is not None:
            return {'message': 'Item already exists'}
        else:
            self.items.append(item)


class StoreAPI(Resource):
    def get(self, id):
        # TODO fetch the store here
        pass

    def post(self, id):
        # TODO modify store here
        pass

    def put(self, id):
        # TODO Add a new store if it does not exists
        pass

    def delete(self, id):
        # TODO remove the existing store
        pass


app.run(debug=True, port=5000)
