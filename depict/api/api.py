import flask
import depict
import base64
from google.cloud import vision, translate
import tempfile

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
        if 'file' is not in flask.request.file:
            return flask.jsonify(), 404
        upload = flask.request.files['file']
        if not allowed_file(upload):
            return flask.jsonify(), 404
            
        dummy, file_name = tempfile.mkstemp()
        upload.save(file_name)

        vision_client = vision.ImageAnnotatorClient()
        # file_name = "demo-img.jpg"
        with io.open(upload, 'rb') as image_file:
            content = image_file.read()
            image = vision_client.image(content = content)
        labels = image.detect_labels()
        print(labels)
        return flask.jsonify(**labels)

@depict.app.route('/api/v1/translate', methods = ["POST"])
def translate():
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

def allowed_file(filename):
    return '.' in filename and  filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS