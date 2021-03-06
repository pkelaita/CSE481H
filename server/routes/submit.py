from flask import Blueprint, request

from utils import tojson

submit_bp = Blueprint('submit_bp', __name__)
endpoint = 'submit'

correct = {
    0: 2,
    1: 2,
    2: 1,
    3: 2,
    4: 3,
    5: 1,
    6: 2,
    7: 1
}


@submit_bp.route(f'/api/{endpoint}', methods=['GET', 'POST'])
def submit():
    opt = request.get_json()['options']
    res = len([q for q in opt if int(opt[q]) == correct[int(q)]])
    return tojson(res)
