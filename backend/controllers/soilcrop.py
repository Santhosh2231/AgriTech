import sys
# setting path
sys.path.append('../models')
from flask import request,Response
from flask_restful import Resource
# from models import soil_crop
import joblib
from pathlib import Path
import pandas as pd
import numpy as np




class soilcrop(Resource):
    def post(self):
        body = request.get_json()
        print(body)
        N = body["N"]
        P = body["P"]
        K = body["K"]
        temp = body["temperature"]
        humidity = body["humidity"]
        ph = body["ph"]
        rainfall = body["rainfall"]
        test_data = np.array([[N,P,K,temp,humidity,ph,rainfall]])
        data = pd.DataFrame(test_data)

        path_2 = Path.cwd()
        path_2 = str(path_2)+"\\controllers\\"+"soil_crop.pkl"
        print(path_2)
        SVC_from_joblib = joblib.load(path_2)
        
        # Use the loaded model to make predictions
        y_pred = SVC_from_joblib.predict(data)
        print(y_pred)
        res = "The suitable crop for given soil conditions is "
        print(body)
        return {'content':res}, 200