from db import db


class ShippingTable(db.Model):
    __tablename__ = "sql_shipping"
    ship_id = db.Column(db.Integer, primary_key=True, nullable=False)
    order_id = db.Column(db.Integer, nullable=False)
    product_id = db.Column(db.Integer, nullable=False)
    location = db.Column(db.String(50), nullable=False)
    status = db.Column(db.String(1), nullable=False)

    def __init__(self, order_id: int, product_id: int, location: str) -> None:
        self.order_id = order_id
        self.product_id = product_id
        self.location = location
        self.status = "0"

    @classmethod
    def get_shippings_by_order_id(cls, orderId):
        cls.query.filter_by(order_id=orderId).all()

    def json(self):
        return {"id": self.ship_id, "orderId": self.order_id}

    def save_shipment(self):
        db.session.add(self)
        db.session.commit()
