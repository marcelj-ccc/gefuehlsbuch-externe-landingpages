from pathlib import Path
from PIL import Image

source = Path("client/public/brand/gefuehlsbuch-cover-echt.png")
target = Path("client/public/brand/gefuehlsbuch-front-echt.png")

with Image.open(source) as image:
    width, height = image.size
    # The source is the complete back+front cover spread; retain the right-hand front cover.
    front = image.crop((width // 2, 0, width, height))
    front.save(target, optimize=True)

print(target)
