import flask
import depict
import requests
import base64

@depict.app.route('/', methods=['GET', 'POST'])
def show_index():
    return flask.render_template("index.html")