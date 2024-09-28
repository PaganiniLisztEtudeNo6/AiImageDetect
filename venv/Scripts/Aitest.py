import tensorflow as tf
from tensorflow.keras import layers, models
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import os
from PIL import Image

image_extensions = ['jpg', 'jpeg', 'png']

def check_image_files(directory):
    bad_files = []
    for subdir, dirs, files in os.walk(directory):
        for file in files:
            if file.lower().split('.')[-1] in image_extensions:
                filepath = os.path.join(subdir, file)
                try:
                    with Image.open(filepath) as img:
                        img.verify()  
                except (IOError, SyntaxError) as e:
                    print(f'Bad file: {filepath}')
                    bad_files.append(filepath)
    return bad_files

def remove_bad_files(bad_files):
    for file in bad_files:
        os.remove(file)
        print(f'Removed bad file: {file}')

base_dir = 'C:/Users/Hp/Downloads/archive (1)/flowers'
train_dir = os.path.join(base_dir)  
validation_dir = os.path.join(base_dir)

bad_files_train = check_image_files(train_dir)
bad_files_validation = check_image_files(validation_dir)
remove_bad_files(bad_files_train)
remove_bad_files(bad_files_validation)

train_datagen = ImageDataGenerator(
    rescale=1./255,
    rotation_range=40,
    width_shift_range=0.2,
    height_shift_range=0.2,
    shear_range=0.2,
    zoom_range=0.2,
    horizontal_flip=True,
    fill_mode='nearest'
)

validation_datagen = ImageDataGenerator(rescale=1./255)

train_generator = train_datagen.flow_from_directory(
    train_dir,
    target_size=(224, 224),
    batch_size=32,
    class_mode='categorical'
)

validation_generator = validation_datagen.flow_from_directory(
    validation_dir,
    target_size=(224, 224),
    batch_size=32,
    class_mode='categorical'
)

model = models.Sequential([
    layers.Conv2D(32, (3, 3), activation='relu', input_shape=(224, 224, 3)),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(64, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(128, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    layers.Conv2D(128, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    layers.Flatten(),
    layers.Dense(512, activation='relu'),
    layers.Dropout(0.5),
    layers.Dense(train_generator.num_classes, activation='softmax')
])

model.summary()

model.compile(
    loss='categorical_crossentropy',
    optimizer='adam',
    metrics=['accuracy']
)

from tensorflow.keras.callbacks import ReduceLROnPlateau

lr_scheduler = ReduceLROnPlateau(monitor='val_loss', factor=0.5, patience=3, verbose=1)

history = model.fit(
    train_generator,
    steps_per_epoch=train_generator.samples // train_generator.batch_size,
    epochs=25,
    validation_data=validation_generator,
    validation_steps=validation_generator.samples // validation_generator.batch_size,
    callbacks=[lr_scheduler]
)

model.save('flower_classification_model.h5')
