import numpy as np
from tensorflow.keras.preprocessing import image
from tensorflow.keras.models import load_model

model = load_model('flower_classification_model.h5')
img_path = "C:/Users/Hp/Downloads/archive (1)/flowers/dandelion/8978962053_0727b41d26.jpg"
img = image.load_img(img_path, target_size=(224, 224))
img_array = image.img_to_array(img)
img_array = np.expand_dims(img_array, axis=0)

img_array /= 255.

prediction = model.predict(img_array)

predicted_class = np.argmax(prediction[0])

class_indices = {'daisy': 0, 'dandelion': 1, 'rose': 2, 'sunflower': 3, 'tulip': 4}
class_name = list(class_indices.keys())
predicted_class = np.argmax(prediction[0])
predicted_class_name = class_name[predicted_class]

print("Predicted class: ", predicted_class_name)