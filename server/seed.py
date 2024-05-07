#imports app.py
from app import app

#imports the tables from models.py; add any tables after the db
from models import db

#faker is used for any fake data you'd like to create
from faker import Faker

#importing json info
import json

#allows use of randinit
import random


fake = Faker()

if __name__ == "__main__":

    #shows if the seed.py starts when ran
    print(">> Seeding... starting...") 

    with app.app_context():


##############################################
#################SEEDS########################
##############################################










##############################################
##############################################
##############################################


        #if this shows, the seeding was successful
        print(">> Seeding... done.")