from flask_sqlalchemy import SQLAlchemy
from db import db

# ? step: 4
# * create your table represntation like one below


class Customers(db.Model):
    __tablename__ = "sql_customers"
    customerId = db.Column(db.Integer, primary_key=True, nullable=False)
    fullName = db.Column(db.String(50), nullable=False)
    address = db.Column(db.String(100), nullable=False)
    number = db.Column(db.String(10), nullable=False)
    prime = db.Column(db.Boolean, nullable=False)

    def __repr__(self):
        return '<User %r>' % self.fullName
