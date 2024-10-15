from flask import Flask, request ,jsonify
from flask_cors import CORS, cross_origin
from keras.models import load_model #type: ignore
from PIL import Image, ImageOps
import numpy as np
import os


app = Flask(__name__)
cors = CORS(app)
model = load_model('model_vgg19.h5')

def preprocess_image(image):
    image = image.resize((224,224))
    image = np.array(image)
    image = image/255.0
    image = np.expand_dims(image, axis=0)
    return image

@app.route('/predict', methods=['POST'])
@cross_origin()
def predict():
    print(request)
    if 'file' not in request.files:
        return jsonify({
            "error" : "No file uploaded"
        }, 400)
    file = request.files['file']
    img = Image.open(file.stream)
    img = preprocess_image(img)
    prediction = model.predict(img)
    print(prediction)
    return jsonify({'prediction': prediction.tolist()},200)

if __name__  == "__main__":
    app.run(debug=True)