import flask
import depict
import base64
from google.cloud import vision, translate
import tempfile
import six
import shutil
import os

@depict.app.route('/api/v1/vision', methods=['POST'])
def depictapi():    
    # if flask.request.method == "POST":

        # recieved = dict()
        # if 'file' not in request.files:
        #     return flask.jsonify(), 403
        # file = request.file['file']
        # if not file or not allowed_file(file.file_name):
        #     return flask.jsonify(), 403
        # with open(file.file_name, 'rb') as image:
        #     encoded_image = base64.b64encode(image.read())
        # filename = secure_filename(file.file_name)
        # file.save(os.path.join(depict.config['UPLOAD_FOLDER']), filename)
        # res = requests.post("https://vision.googleapis.com/v1/images:annotate", encoded_image)

        # return flask.jsonify(res)
    # else:
        # return flask.jsonify()
    if flask.request.method == "POST":
        print(flask.request.files)
        # if 'file' not in flask.request.files:
        #     return flask.jsonify(), 403
        upload = flask.request.files['file']
        file_name = compute_filename(upload)
        # if not allowed_file(upload):
        #     return flask.jsonify(), 403
            
        # dummy, file_name = tempfile.mkstemp()
        # upload.save(file_name)

        vision_client = vision.ImageAnnotatorClient()
        # if allowed_file(upload.filename):
        # filename = flask.secure_filename(upload.filename)
        # file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            


        with open(file_name, 'rb') as image_file:
            content = image_file.read()
            image = vision_client.image(content = content)
        labels = image.detect_labels()
        print(labels)
        return flask.jsonify(**labels)

@depict.app.route('/api/v1/translate', methods = ["GET"])
def get_translate():
    # if flask.request.method == 'POST':
    #     if 'word' in flask.request.form and 'lang' in flask.request.form:
    #         text = flask.request.form['word']
    #         target = flask.request.form['lang']

    #         translate_client = translate.Client()
    #         if isinstance(text, six.binary_type):
    #             text = text.decode('utf-8')

    #         result = translate_client.translate(
    #             text, target_language=target)
    text = "hello"
    target = "es"

    translate_client = translate.Client()
    if isinstance(text, six.binary_type):
        text = text.decode('utf-8')

    result = translate_client.translate(
        text, target_language=target)
    
    print(result)
    return flask.jsonify()

def compute_filename(filename):
    """Compute file name."""
    # Save POST request's file object to a temp file
    dummy, temp_filename = tempfile.mkstemp()
    filename.save(temp_filename)
    byte_str = filename.read()
    text_obj = byte_str.decode('UTF-8')
    file_path = os.path.join(
            depict.app.config["UPLOAD_FOLDER"],
            text_obj
        )
    # Move temp file to permanent location
    shutil.move(temp_filename, file_path)
    temp_name = temp_filename.split("/")[-1]
    return file_path+temp_name


def allowed_file(filename):
    return '.' in filename and  filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS