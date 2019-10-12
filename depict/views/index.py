import flask
import depict
import request

@depict.app.route('/', methods=['GET', 'POST'])
def show_index():
    if flask.request.method == "POST":
        request.post()
        return flask.jsonify()
    else:
        return flask.jsonify()