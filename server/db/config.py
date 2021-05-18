import os
import urllib

PROTOCOL = 'mongodb'
DB_HOST = os.environ.get('DB_HOST', 'localhost')
DB_PORT = int(os.environ.get('DB_PORT', 27017))
if 'DB_USER' in os.environ and 'DB_PASS' in os.environ:
    DB_USER = urllib.parse.quote_plus(os.environ['DB_USER'])
    DB_PASS = urllib.parse.quote_plus(os.environ['DB_PASS'])
else:
    DB_USER = None
    DB_PASS = None

_EVH_ENV = 'dev'
DB_NAME = f'evh{_EVH_ENV}'

USER_COL = f'user-col-{_EVH_ENV}'
COURSE_COL = f'course-col-{_EVH_ENV}'
SESSION_COL = f'session-col-{_EVH_ENV}'

COLLECTIONS = {USER_COL, COURSE_COL, SESSION_COL}

SCHEMAS = {
    USER_COL: {'$jsonSchema': {
        'bsonType': 'object',
        'required': [
            'email',
            'user_id',
            'name',
        ],
        'properties': {
            'email': {'bsonType': 'string'},
            'user_id': {'bsonType': 'string'},
            'name': {'bsonType': 'string'},

        },
    }},
}

UNIQUE_FIELDS = {
    USER_COL: ['email', 'user_id'],
}

# Errors
DUPLICATE_ERROR = 'DUPLICATE_ERROR'
