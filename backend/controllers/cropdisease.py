import sys
# setting path
sys.path.append('../models')
from flask import request,Response
from flask_restful import Resource


class cropdisease(Resource):
    def post(self):
        body = request.get_json()
        print(body)
        id = 10
        return {'id':str(id)}, 200