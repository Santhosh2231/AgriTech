
from flask import Flask
from flask_restful import Api
from routes import initialize_routes
from flask_cors import CORS, cross_origin

app = Flask(__name__,static_folder='client/dist')
CORS(app)

@app.route("/")
@cross_origin
def serve():
    return send_from_directory(app.static_folder,'index.html')
api = Api(app)
initialize_routes(api)

if __name__=="__main__":
    app.run()