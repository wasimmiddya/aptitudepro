import cv2 as cv
from flask import Flask, Response,jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, origins=['http://localhost:5173','http://127.0.0.1:5500'])

# Access the webcam
global cap
cap = cv.VideoCapture(0)

classifier = cv.CascadeClassifier('./haarcascade_frontalface_default.xml')

def generate_frames():
    global cap 
    
    cap = cv.VideoCapture(0)

    while True:
        success, frame = cap.read()

        if not success:
            break
        else:
            ret, buffer = cv.imencode('.jpg', frame)
            frame = buffer.tobytes()
            yield (b'--frame\r\n'b'Content-Type: image/jpg\r\n\r\n' + frame + b'\r\n')

@app.route('/video_feed')
def video_feed():
    print('Requested for video')
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=frame')

            

@app.route('/check')
def check():
    global cap
    # cap = cv.VideoCapture(0)

    count = 0
    face = 0

    print('Request for checking')
    while True:
        success, frame = cap.read()

        if not success:
            break
        else:
            blur = cv.GaussianBlur(frame, (3,3), cv.BORDER_DEFAULT)
            detector = classifier.detectMultiScale(blur, scaleFactor=1.1, minNeighbors=10)

            face = len(detector)


            if face != 1:
                count += 1
            if face == 1:
                count = 0
            
            if count >= 6:
                    break

    return jsonify({"msg":"VIOLENCE"})  
          

@app.route('/release')
def rel(): 
    global cap
    cap.release()
    return 'released'



if __name__ == '__main__':
    app.run(debug=True)
