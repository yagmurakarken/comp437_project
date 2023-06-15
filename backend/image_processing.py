import base64
from PIL import Image
from io import BytesIO

def decode_base64_jpg(base64_string):
    # Remove the data URI scheme if present
    if base64_string.startswith('data:image/jpeg;base64,'):
        base64_string = base64_string.split(',', 1)[1]

    # Decode the Base64 string
    image_data = base64.b64decode(base64_string)

    # Create a PIL Image object from the decoded data
    image = Image.open(BytesIO(image_data))

    return image