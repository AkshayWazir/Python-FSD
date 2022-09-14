from flask_restful import Api
from resources.customers import Customer, UpdateUser


def addRoutes(app):
    api = Api(app)
    api.add_resource(Customer, "/auth/<int:custId>")
    api.add_resource(UpdateUser, "/updateUser")
    return app
    # TODO : Just need to add the routes here
