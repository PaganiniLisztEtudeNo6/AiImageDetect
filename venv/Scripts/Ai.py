import base64


def add_numbers(a, b):
    return a + b
    
    
def ReadFile(file):
    file_content = file.read()
    base64_image = base64.b64encode(file_content).decode('utf-8')
    if(base64_image):
        return 'true'
    return 'false'