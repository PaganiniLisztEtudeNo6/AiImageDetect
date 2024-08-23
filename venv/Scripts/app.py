from flask import Flask, jsonify, request # type: ignore
from Ai import add_numbers
app = Flask(__name__)







@app.route('/hello', methods=['GET'])
def hello():
    a = add_numbers(1, 2)
    return jsonify({'output': a})


# @app.route('/echo', methods=['POST'])
# def echo():
#     data = request.json
#     return jsonify({'received': data})

# @app.route('/add/<int:a>/<int:b>', methods=['GET'])
# def add(a, b):
#     return jsonify({'result': a + b})

if __name__ == '__main__':
    app.run(host='0.0.0.0',port=5000,debug=True)
