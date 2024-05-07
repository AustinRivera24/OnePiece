#allows flask to be used
from flask import Flask, make_response, jsonify, request, session, g

#imports SQLAlchemy
from flask_sqlalchemy import SQLAlchemy

#allows migration usage
from flask_migrate import Migrate

#import the models that need routes
from models import db

#allows json usage
import json

#from flask_cors import CORS

#allows for encrpytion
from flask_bcrypt import Bcrypt


# Here, we're initializing the Database for our use purposes.
app = Flask(__name__)
# We're also running our app in debug mode.
app.debug = True
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///app.db"
# We're also disabling the modification tracking system to conserve on significant computing power.
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
migrate = Migrate(app, db)
db.init_app(app)



#a test route, once the server is running, call this route and see if it shows in the browser
@app.route("/", methods=["GET"])
def home():
    return jsonify({"message": "Up and running"}), 200

##############################################
#####################GET######################
##############################################



##############################################
###################POST#######################
##############################################



##############################################
####################PATCH#####################
##############################################



##############################################
###################DELETE#####################
##############################################







if __name__ == "__main__":
    app.run(port=5555, debug=True)