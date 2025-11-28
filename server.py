from flask_cors import CORS 
from flask import *
import cv2
import numpy as np

app = Flask(__name__)
CORS(app)

@app.route("/",methods=["POST"])
def Main():
    file = request.files['frame']
    if file:
        npimg = np.frombuffer(file.read(), np.uint8)
        img = cv2.imdecode(npimg, cv2.IMREAD_COLOR)
        cv2.imshow("Server Webcam", img)
        cv2.waitKey(1)
    return "ok"

if __name__ == "__main__":
    app.run(port=8000,host="0.0.0.0",debug=True)