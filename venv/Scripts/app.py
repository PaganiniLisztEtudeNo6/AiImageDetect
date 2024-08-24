from flask import Flask, request, jsonify
from Ai import add_numbers
app = Flask(__name__)



@app.route('/hello', methods=['GET'])
def hello():
    a = add_numbers(8, 2)
    return jsonify({'output': a , 'message': 'Hello World!'})

@app.route('/post', methods=['POST'])
def echo():
    data = request.json
    return jsonify({'received': data})

# @app.route('/add/<int:a>/<int:b>', methods=['GET'])
# def add(a, b):
#     return jsonify({'result': a + b})

if __name__ == '__main__':
    app.run(debug=True)
