import flask
import depict

@depict.app.route('/', methods=['GET', 'POST'])
def show_index():
    return flask.render_template("index.html")
