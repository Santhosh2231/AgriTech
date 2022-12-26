import sys
 # setting path
sys.path.append('../controllers')
# importing
from controllers.cropdisease import cropdisease
from controllers.soilcrop import soilcrop
from controllers.cropprice import crops,cropprice



def initialize_routes(api):
    api.add_resource(soilcrop, '/api/soilcrop')
    api.add_resource(cropdisease, '/api/cropdisease')
    api.add_resource(crops,'/api/cropprice')
    api.add_resource(cropprice,'/api/cropprice/<name>')
