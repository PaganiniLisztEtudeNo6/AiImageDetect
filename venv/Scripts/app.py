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


@app.route('/uploadImage', methods=['POST'])
def upload_image():
    
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    
    file = request.files['file']
    
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400
    
    if file:
        file_content = file.read()
        file = ReadFile(file)
        base64_image = base64.b64encode(file_content).decode('utf-8')
        
        
        return jsonify(base64_image)
    
    return jsonify({'error': 'Failed to process file'}), 500


if __name__ == '__main__':
    app.run(debug=True)
