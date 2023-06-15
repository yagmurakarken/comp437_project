from flask import Flask
from flask_socketio import SocketIO, emit
from image_processing import decode_base64_jpg
import random

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your-secret-key'
socketio = SocketIO(app, cors_allowed_origins='*')


@socketio.on('analyze')
def analyze(data):
    # Perform analysis or any other required processing
    # ...

    # Prepare the response
    result = 'Analysis completed successfully'

    # Emit the result event back to the fronsfatend
    emit('analysis_result', {'result': result})


@socketio.on('connect')
def handle_connect():
    print('Client connected')


@socketio.on('disconnect')
def handle_disconnect():
    print('Client disconnected')


@socketio.on('videoFrame')
def handle_video_frame(image_data):
    # Save the image locally
    # print(image_data)
    decode_base64_jpg(image_data).save('output.jpg')

    emit('analysis_result', {'result': random.randrange(50) + 51})
    # Process the image or perform any required task


if __name__ == '__main__':
    socketio.run(app, debug=True, port=5001)
