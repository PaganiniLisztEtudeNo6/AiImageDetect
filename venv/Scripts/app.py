import base64
from flask import Flask, request, jsonify
from Ai import add_numbers
from flask_cors import CORS  # type: ignore
from Ai import ReadFile

app = Flask(__name__)
CORS(app)


@app.route('/hello', methods=['GET'])
def hello():
    a = add_numbers(8, 2)
    return jsonify({'output': a , 'message': 'Hello World!'})


@app.route('/testPost', methods=['POST'])
def testPost():
    a = request.json['a']
    b = request.json['b']
    return jsonify({'a': a , 'b': b})

@app.route('/uploadImage', methods=['POST'])
def upload_image():
    
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    
    file = request.files['file']
    
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    
    if file:        
        file_content = file.read()
        base64_image = base64.b64encode(file_content).decode('utf-8')
        res = ReadFile(base64_image)
        if res == 'true':
            return jsonify({'message': 'File processed successfully'})
        else:
            return jsonify({'message': 'Failed to process file'})
    
    return jsonify({'error': 'error to read file'}), 500


if __name__ == '__main__':
    app.run(debug=True)
