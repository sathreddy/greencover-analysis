from PIL import Image
import cv2
im1 = cv2.imread("img1.png")
im2 = cv2.imread("img2.png")
def getShift(img1, img2):
    height, width, channels = img1.shape
    for j in range(height):
        done = False
        for i in range(width):
            for z in range(channels):
                if img2[0][i][z] != img1[j][i][z]:
                    done = True
                    break
                elif i == (width - 1):
                    return j
            if done:
                break

print(getShift(im1,im2))
