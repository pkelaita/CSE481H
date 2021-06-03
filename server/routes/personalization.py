from flask import Blueprint, request

from utils import tojson
from db.connection import DBConnection
import db.config as db_config
from services import personalization_service

personalization_bp = Blueprint('personalization_bp', __name__)
endpoint = 'personalization'


@personalization_bp.route(f'/{endpoint}', methods=['GET', 'POST'])
def personalization():
    opt = request.get_json()['options']
    return tojson(personalization_service.get_locs(opt))
