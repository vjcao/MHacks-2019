"""depict development configuration."""

import os

# Root of this application, useful if it doesn't occupy an entire domain
APPLICATION_ROOT = '/'

# Secret key for encrypting cookies
SECRET_KEY = b'1\xa0b\x0e\x8d\xb0O\x1f\xb0\xe0\xdd\xd4\x91aE\x9e\xf3\xc3\xd4w\x85\x88\xf2;'
SESSION_COOKIE_NAME = 'login'

# File Upload to var/uploads/
UPLOAD_FOLDER = os.path.join(
    os.path.dirname(os.path.dirname(os.path.realpath(__file__))),
    'var', 'uploads'
)
ALLOWED_EXTENSIONS = set(['png', 'jpg', 'jpeg'])
MAX_CONTENT_LENGTH = 16 * 1024 * 1024

# # Database file is var/depict.sqlite3
# DATABASE_FILENAME = os.path.join(
#     os.path.dirname(os.path.dirname(os.path.realpath(__file__))),
#     'var', 'depict.sqlite3'
# )
