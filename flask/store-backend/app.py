
# ? step 1
# * install "pip install -U Flask-SQLAlchemy"
# * install "pip install pymysql"


from flask import Flask
from routes.index import addRoutes
from db import db

app = Flask(__name__)
app = addRoutes(app)

# ? step 2
# * specify your connection URL
# * url format : "mysql+pymysql://<username>:<password>@<host>/<dbName>" here <> represent place holders
app.config['SQLALCHEMY_DATABASE_URI'] = "mysql+pymysql://root:password@localhost/sql_clothing"

# ! this code will only execute if we run app.py directly
if __name__ == "__main__":
    db.init_app(app)
    app.run(debug=True, port=5000)
