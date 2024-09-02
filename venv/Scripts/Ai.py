from tensorflow.keras.preprocessing import image
from tensorflow.keras.models import load_model
from io import BytesIO
from PIL import Image
import base64

model = load_model('flower_classification_model.h5')

def ReadFile(base64_image):
    try:
        img_data = base64.b64decode(base64_image)
        img = Image.open(BytesIO(img_data))

        img = img.resize((224, 224))
        img_array = np.array(img) / 255.0  
        img_array = np.expand_dims(img_array, axis=0)

        prediction = model.predict(img_array)
        predicted_class = np.argmax(prediction[0])

        class_indices = {'daisy': 0, 'dandelion': 1, 'rose': 2, 'sunflower': 3, 'tulip': 4}
        class_name = list(class_indices.keys())
        predicted_class_name = class_name[predicted_class]

        return predicted_class_name
    except Exception as e:
        print(f"Error processing file: {e}")
        return 'false'
