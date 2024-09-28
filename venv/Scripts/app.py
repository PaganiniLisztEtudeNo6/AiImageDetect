import base64
from flask import Flask, request, jsonify 
from flask_cors import CORS  
from Ai import ReadFile

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


# @app.route('/uploadImage', methods=['POST'])
# def upload_image():
    
#     if 'file' not in request.files:
#         return jsonify({'error': 'No file part'}), 400
    
#     file = request.files['file']
    
#     if file.filename == '':
#         return jsonify({'error': 'No selected file'}), 400
    
#     if file:        
#         file_content = file.read()
#         base64_image = base64.b64encode(file_content).decode('utf-8')
#         res = ReadFile(base64_image)
#         if res == 'true':
#             return jsonify({'message': 'File processed successfully'})
#         else:
#             return jsonify({'message': 'Failed to process file'})
    
#     return jsonify({'error': 'error to read file'}), 500
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
            return jsonify({'message': 'File processed successfully', 'prediction': res})
        else:
            return jsonify({'message': 'Failed to process file'})
    
    return jsonify({'error': 'Error reading file'}), 500


if __name__ == '__main__':
    app.run(debug=True)
