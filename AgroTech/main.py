
from flask import Flask
from flask_restful import Api
from routes.routes import initialize_routes
from flask_cors import CORS, cross_origin

app = Flask(__name__,static_folder='react-app/dist')
CORS(app)

@app.route("/")
@cross_origin
@app.lambda_function()
def serve():
    return send_from_directory(app.static_folder,'index.html')
api = Api(app)
initialize_routes(api)

if __name__=="__main__":
    app.run()