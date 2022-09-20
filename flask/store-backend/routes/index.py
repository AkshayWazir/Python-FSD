from flask_restful import Api
from resources.customers import Customer, FetchAllCustomers
from resources.order import Orders
from resources.shipping import Shipper


def addRoutes(app):
    api = Api(app)
    api.add_resource(Customer, "/auth/<int:custId>")
    api.add_resource(FetchAllCustomers, "/customers")
    api.add_resource(Orders, "/orders/<int:orderId>")
    api.add_resource(Shipper, "/ship/<int:shipId>")
    return app
    # TODO : Just need to add the routes here
