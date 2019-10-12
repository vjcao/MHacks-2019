import flask
import depict
import requests
import base64

@depict.app.route('/api/v1/', methods=['GET', 'POST'])
def depictapi():    
    if flask.request.method == "POST":
        recieved = dict()
        if 'file' not in request.files:
            return flask.jsonify(), 404
        file = request.file['file']
        if not file or not allowed_file(file.file_name):
            return flask.jsonify(), 403
        with open(file.file_name) as image:
            encoded_image = base64.b64encode(image.read())
        filename = secure_filename(file.file_name)
        file.save(os.path.join(depict.config['UPLOAD_FOLDER']), filename)
        res = requests.post("https://vision.googleapis.com/v1/images:annotate", encoded_image)

        return flask.jsonify(res)
    else:
        return flask.jsonify()


def allowed_file(filename):
    return '.' in filename and  filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS