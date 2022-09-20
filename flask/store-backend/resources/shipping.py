from flask import request
from flask_restful import Resource
from model.shippingTable import ShippingTable
from db import db


class Shipper(Resource):
    def put(self, shipId):
        reBo = request.json
        tempObj = ShippingTable(reBo["orderId"], reBo["prId"], reBo["loca"])
        tempObj.save_shipment()
        return {"message": "done"}, 200

    def get(self, order_id):
        result = ShippingTable.query.filter_by(order_id=order_id).first()
        return result.convertRes()
