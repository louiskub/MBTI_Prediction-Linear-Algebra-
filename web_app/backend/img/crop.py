from PIL import Image
img = Image.open('web_app/backend/img/corr_mbti_ENTP.png')

box = (0, 0, 1300, 500)
img = img.crop(box)
img.show()