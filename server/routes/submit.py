from flask import Blueprint, request

from utils import tojson

submit_bp = Blueprint('submit_bp', __name__)
endpoint = 'submit'

correct = {
    1: 2,
    2: 2,
    3: 1,
    4: 2,
    5: 3,
    6: 1,
    7: 2,
    8: 1
}


@submit_bp.route(f'/api/{endpoint}', methods=['GET', 'POST'])
def submit():
    opt = request.get_json()['options']
    res = 0
    for q in opt:
        if opt[q] == correct[int(q)]:
            res += 1
    return tojson(res)
