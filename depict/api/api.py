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
    if flask.request.method == "POST":
        upload = flask.request.files['file']
        file_name = compute_filename(upload)
        vision_client = vision.ImageAnnotatorClient()
        with open(file_name, 'rb') as image_file:
            content = image_file.read()
        image = vision.types.Image(content = content)
        response = vision_client.label_detection(image = image)
        labels = response.label_annotations
        context_list = [label.description for label in labels]
        context = {"words":context_list}
        return flask.jsonify(**context)

@depict.app.route('/api/v1/translate', methods = ["POST"])
def get_translate():
    if flask.request.method == 'POST':
        if 'word' in flask.request.form and 'lang' in flask.request.form:
            text = flask.request.form['word']
            target = flask.request.form['lang']

            translate_client = translate.Client()
            if isinstance(text, six.binary_type):
                text = text.decode('utf-8')

            result = translate_client.translate(
                text, target_language=target)
    print(result)
    context = {"word": result['translatedText']}
    return flask.jsonify(**context)

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