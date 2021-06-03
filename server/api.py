from flask import Flask
from flask_cors import CORS

from utils import tojson
import config as api_config

from routes.personalization import personalization_bp

app = Flask(__name__)
app.config.from_object('config.BaseConfig')
CORS(app)


@app.route('/api', methods=['GET'])
def root():
    res = {}
    return tojson({'foo': 'bar'})


# Attach routes
app.register_blueprint(personalization_bp)

if __name__ == '__main__':
    app.run(host=api_config.API_HOST, port=api_config.API_PORT)
