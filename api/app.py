import os
import numpy as np
import cv2
from flask import Flask, request, jsonify
from flask_cors import CORS
from keras.models import load_model
from keras.preprocessing.image import img_to_array

app = Flask(__name__)
CORS(app)

model = load_model('a95e30model.h5') 

input_shape = (50, 50, 3)

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400
    
    file = request.files['file']
    
    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    img = cv2.imdecode(np.frombuffer(file.read(), np.uint8), cv2.IMREAD_COLOR)
    
    if img is None:
        return jsonify({'error': 'Invalid image'}), 400

    img = cv2.resize(img, (50, 50))
    img_array = img_to_array(img) / 255.0 
    img_array = np.expand_dims(img_array, axis=0) 

    predictions = model.predict(img_array)
    class_idx = np.argmax(predictions[0]) 
    result = 'Parasitized' if class_idx == 1 else 'Uninfected'
    return jsonify({'prediction': result, 'confidence': predictions[0].tolist()})


if __name__ == '__main__':
    app.run(debug=True)
