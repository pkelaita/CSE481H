from flask import Blueprint, request

from utils import tojson
from db.connection import DBConnection
import db.config as db_config
from services import personalization_service

personalization_bp = Blueprint('personalization_bp', __name__)
endpoint = 'personalization'


@personalization_bp.route(f'/{endpoint}', methods=['GET'])
def personalization(options):
    locs = personalization_service.get_locs(options)
    return tojson(locs)
