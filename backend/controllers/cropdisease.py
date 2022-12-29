import sys
# setting path
# sys.path.append('../Models')
from flask import request,Response
from flask_restful import Resource
from PIL import Image
import numpy as np
import json
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image

apple = load_model("./Models/apple.h5")
corn = load_model("./Models/corn.h5")
peach = load_model("./Models/peach.h5")
pepper = load_model("./Models/pepper.h5")
potato = load_model("./Models/potato.h5")
tomato = load_model("./Models/tomato.h5")
check = load_model("./Models/check.h5")
appleIndex = ["Apple - Black rot","Apple - Healthy Plant"]
cornIndex = ["Corn - Northern Leaf Blight","Corn - Healthy  Plant"]
peachIndex = ["Peach - Bacterial Spot","Peach - Healthy  Plant"]
pepperIndex = ["Pepper - Bell Bacterial Spot","Pepper - Healthy Plant"]
potatoIndex = ["Potato - Early Blight","Potato - Late Blight","Potato - Healthy  Plant"]
tomatoIndex = ["Tomato - Bacterial Spot","Tomato - Late Blight","Tomato - Leaf Mold","Tomato - Healthy Plant","Tomato - Septoria Leaf Spot"] 
class cropdisease(Resource):
    def post(self):
        imageData = request.files.get('image')
        type = request.form["type"]
        plant = request.form["plant"]
        print(type)
        print(plant)


        if imageData:
            # Save the image to a file
            imageData.save('image.jpg')
            img = image.load_img("image.jpg",target_size=(128,128))
            img
                
            
            x=image.img_to_array(img)
            x=np.expand_dims(x,axis=0)
            val=0
            if plant=="apple":
                pred = np.argmax(apple.predict(x),axis=1)
                if pred[0]==0:
                    msg="Oopps!! Your apple plant is infected by Black Rots. This infection is a fungal infection. To control balck rot, remove the cankers by pruning at least 15 inches below the end and burn or bury them. Treating the sites with the antibiotic streptomycin or a copper-based fungicide will be helpful."
                elif pred[0]==1:
                    val=1
                    msg="Yaayy!! Your apple plant is healthy. But, maintain the soil pH of 6.0 to 7.0 for healthy growth. Avoid planting apples in a low spot where cold air or frost can settle."
                data = {'res':appleIndex[pred[0]],'msg':msg,"val":val}
                return data,200
            elif plant=="corn":
                pred = np.argmax(corn.predict(x),axis=1)
                if pred[0]==0:
                    msg="Oopps!! Your corn plant is infected by Northern Leaf Blight. The primary management strategy to reduce the incidence and severity of NCLB is planting resistant products. Using fungicides is also helpful."
                elif pred[0]==1:
                    val=1
                    msg="Yaayy!! Your corn plant is healthy. But, maintain the soil consistently moist, but not soggy and only need fertilizer every 6 months. It prefers temperatures of 75 to 80 degrees F."
                data = {'res':cornIndex[pred[0]],'msg':msg,"val":val}
                return data,200
            elif plant=="peach":
                pred = np.argmax(peach.predict(x),axis=1)
                if pred[0]==0:
                    msg="Oopps!! Your peach plant is infected by Bacterial Spots. This is a difficult disease to control when environmental conditions favor pathogen spread. Compounds for the treatment include copper, oxytetracycline (Mycoshield and generic equivalents), and syllit+captan; however, repeated applications are typically necessary for even minimal disease control."
                elif pred[0]==1:
                    val=1
                    msg="Yaayy!! Your peach plant is healthy. But, you should have deep sandy soil that ranges from a loam to a clay loam for healthy growth. Poor drainage in the soil will kill the root system of growing peach trees, so make sure the soil is well drained. Growing peach trees prefer a soil pH of around 6.5."
                data = {'res':peachIndex[pred[0]],'msg':msg,"val":val}
                return data,200
            elif plant=="pepper":
                pred = np.argmax(pepper.predict(x),axis=1)
                if pred[0]==0:
                    msg="Oopps!! Your pepper plant is infected by Bacterial Leaft Spot. The disease cycle can be stopped by using the Sango formula for disinfectants. Bleach treatment and hot water treatment is also helpful."
                elif pred[0]==1:
                    val=1
                    msg="Yaayy!! Your pepper plant is healthy. But, take the necessary precautions like, putting the plant where it gets at least 10 hours of direct sunlight. Keep soil evenly moist for good growth. Peppers need well draining soil that is rich and loamy, but avoid too much nitrogen in the soil. Too much nitrogen can cause plenty of leaves and little to no peppers. Your soil should have a pH between 6.0 and 6.5."
                data = {'res':pepperIndex[pred[0]],'msg':msg,"val":val}
                return data,200
            elif plant=="potato":
                pred = np.argmax(potato.predict(x),axis=1)
                if pred[0]==0:
                    msg="Oopps!! Your potato plant is Early Blight. Avoid irrigation in cool cloudy weather and time irrigation to allow plants time to dry before nightfall. Protectant fungicides (e.g. maneb, mancozeb, chlorothalonil, and triphenyl tin hydroxide) are effective. "
                elif pred[0]==1:
                    msg="Oopps!! Your potato plant is Late Blight. The late blight can be effectively managed with prophylactic spray of mancozeb, cymoxanil+mancozeb or dimethomorph+mancozeb."
                if pred[0]==2:
                    val=1
                    msg="Yaayy!! Your potato plant is healthy. But, take the necessary precautions like, putting the plant where it gets at least 10 hours of direct sunlight. Potatoes do best in well-drained and fertile soil. Maintain the pH between 5.0 and 5.5. Keep soil evenly moist for good growth. Do not add large amounts of organic matter to the soil as it may contribute to potato scab, a disease that frequently infects potatoes."
                data = {'res':potatoIndex[pred[0]],'msg':msg,"val":val}
                return data,200
            elif plant=="tomato":
                pred = np.argmax(tomato.predict(x),axis=1)
                print(pred)
                if pred[0]==0:
                    msg="Oopps!! Your tomato plant is effected by bacterial spots. To protect the uninfected plants remove the infected leaves and bury or burn them s there is no cure for this infection. To prevent future infections plant pathogen-free seeds or transplants to prevent the introduction of bacterial spot pathogens on contaminated seed or seedlings."
                elif pred[0]==1:
                    msg="Oopps!! Your tomato plant is late blight. Early treatment for this disease is needed. Fungicides like e Daconil fungicides from GardenTech brand prevent, stop, and control late blight and more than 65 types of fungal disease. Planting resistant cultivars and watering the plants early in the mornings help to prevent this infection."
                elif pred[0]==2:
                    msg="Oopps!! Your tomato plant has leaf molds. Watering the plants early in the mornings help them to get sufficient time to dry out. Fungicidal sprays mostly calcium chloride based sparys help in getting rid of leaf molds."
                elif pred[0]==3:
                    val=1
                    msg="Yaayy!! Your tomato plant is healthy. But, take the necessary precautions like, putting the plant where it gets at least 10 hours of direct sunlight."
                elif pred[0]==4:
                    msg="Oopps!! Your tomato plant is infected by Septoria leaf spot. Removing the infected leaves immediately will curb the spread of infection. Organic and chemical fungicides with chlorothalonil are effective in treatment."
                data = {'res':tomatoIndex[pred[0]],'msg':msg,"val":val}
                return data,200     
        else:
            return 'No image was uploaded.'

        return {'id':str(id)}, 200