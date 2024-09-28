import base64
from flask import Flask, request, jsonify
from flask_cors import CORS
from Ai import ReadFile
import os

app = Flask(__name__)
CORS(app)

#@app.route('/login', methods=['POST'])
#def login():
#    user = "sakthan"
#    password = "12345"
#    if request.json['username'] == user and request.json['password'] == password:
#        return jsonify({'message': 'Login successful'})
#    else:
#        return jsonify({'message': 'Login failed'})

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
        if res != 'false':
            flower_detail = get_flower_detail(res)
            return jsonify({'message': 'File processed successfully', 'prediction': res, 'detail': flower_detail})
        else:
            return jsonify({'message': 'Failed to process file'})
    
    return jsonify({'error': 'Error reading file'}), 500

def get_flower_detail(flower_name):
    try:
        file_path = f'details/{flower_name}.txt'
        if os.path.exists(file_path):
            with open(file_path, 'r', encoding='utf-8') as file:
                details = file.read()
            return details
        else:
            return f'No details available for {flower_name}'
    except Exception as e:
        print(f"Error reading detail file: {e}")
        return 'Error reading detail file'

if __name__ == "__main__":
    app.run(port=8080)
