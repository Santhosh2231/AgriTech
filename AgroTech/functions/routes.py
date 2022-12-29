
# importing
from cropdisease import cropdisease
from soilcrop import soilcrop,SoilAnalysis
from cropprice import crops,cropprice



def initialize_routes(api):
    api.add_resource(SoilAnalysis, '/api/soilcrop')
    api.add_resource(soilcrop, '/api/soilcrop')
    api.add_resource(cropdisease, '/api/cropdisease')
    api.add_resource(crops,'/api/cropprice')
    api.add_resource(cropprice,'/api/cropprice/<name>')
