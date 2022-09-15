from cmath import log
from flask import request
from flask_restful import Resource
from model.orderTable import OrdersTable
from db import db


class Orders(Resource):
    def get(self, orderId):
        s_res = OrdersTable.get_order_by_id(orderId)
        if s_res is not None:
            return s_res.json(), 200
        return {"message", "Not found"}, 404

    def put(self, orderId):
        req_obj = request.json
        new_order = OrdersTable(req_obj.get(
            "ship_id", -1), req_obj.get("products", ""), req_obj.get("cust_id", -1))
        new_order.add_order()
        return {"message": "Added new Order"}, 200


class FetchAllOrders(Resource):
    def get(self):
        result = OrdersTable.query.all()
        temp = []
        for ele in result:
            temp.append(ele.json())
        temp = {"res": temp}
        return temp
