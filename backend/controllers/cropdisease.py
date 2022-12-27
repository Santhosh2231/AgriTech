import sys
# setting path
sys.path.append('../Models')
from flask import request,Response
from flask_restful import Resource
from PIL import Image
import numpy as np
import json
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image

vegModel = load_model("./models/vegetable.h5")
fruitsModel = load_model("./models/fruit.h5")
class cropdisease(Resource):
    def post(self):
        imageData = request.files.get('image')
        type = request.form["type"]
        print(type)

        if imageData:
            # Save the image to a file
            imageData.save('image.jpg')
            img = image.load_img("image.jpg",target_size=(128,128))
            img
                
            
            x=image.img_to_array(img)
            x=np.expand_dims(x,axis=0)
            if type=="vegetable":
                pred = np.argmax(vegModel.predict(x),axis=1)

                index=['Pepper,_bell___Bacterial_spot',
                'Pepper,_bell___healthy',
                'Potato___Early_blight',
                'Potato___Late_blight',
                'Potato___healthy',
                'Tomato___Bacterial_spot',
                'Tomato___Late_blight',
                'Tomato___Leaf_Mold',
                'Tomato___Septoria_leaf_spot',
                'Tomato___healthy']

                val = pred[0].astype(int).tolist()
                data = {'index': val,'type':index[pred[0]]}
                return data,200
            elif type=="fruits":
                pred = np.argmax(fruitsModel.predict(x),axis=1)

                index=['Apple___Black_rot',
                'Apple___healthy',
                'Corn_(maize)___Northern_Leaf_Blight',
                'Corn_(maize)___healthy',
                'Peach___Bacterial_spot',
                'Peach___healthy']

                val = pred[0].astype(int).tolist()
                data = {'index': val,'type':index[pred[0]]}
                return data,200
            
        else:
            return 'No image was uploaded.'

        return {'id':str(id)}, 200