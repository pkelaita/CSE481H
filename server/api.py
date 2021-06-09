from flask import Flask, send_from_directory
from flask_cors import CORS

from utils import tojson
import config as api_config

from routes.personalization import personalization_bp
from routes.submit import submit_bp

app = Flask(__name__, static_folder='../client/build', static_url_path='/')
app.config.from_object('config.BaseConfig')
CORS(app, resources={r'*': {'origins': '*'}})


@app.route('/', defaults={'path': ''})
def serve(path):
    return send_from_directory(app.static_folder, 'index.html')


@app.route('/api', methods=['GET'])
def root():
    res = {}
    return tojson({'foo': 'bar'})


# Attach routes
app.register_blueprint(personalization_bp)
app.register_blueprint(submit_bp)

if __name__ == '__main__':
    app.run(host=api_config.API_HOST, port=api_config.API_PORT)
