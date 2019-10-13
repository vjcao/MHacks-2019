import flask
app = flask.Flask(__name__)
app.config.from_object('depict.config')
app.config.from_envvar('DEPICT_SETTINGS', silent=True)
import depict.api
import depict.views
