import flask
import depict
import base64
from google.cloud import vision
import io

@depict.app.route('/api/v1/', methods=['GET', 'POST'])
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
    vision_client = vision.Client()
    file_name = "demo-img.jpg"
    with io.open(file_name, 'rb') as image_file:
        content = image_file.read()
        image = vision_client.image(content = content)
    labels = image.detect_labels()
    print(labels)
    return flask.jsonify(**labels)


def allowed_file(filename):
    return '.' in filename and  filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS