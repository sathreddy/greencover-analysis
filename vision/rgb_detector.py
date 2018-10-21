import cv2
import numpy as np

im = cv2.imread("img1.png")

def color_thresh(chan, thresh):
    if chan[0] == 0:
        chan[0] += 1
    if chan[2] == 0:
        chan[2] += 1
    
    if ((chan[1]/chan[0]) > thresh and (chan[1]/chan[2]) > thresh):
        return True
    else:
        return False

def green_detector(img, thresh):
    sum_b = 0
    sum_r = 0
    sum_g = 0
    height, width, channels = img.shape
    mask = np.zeros_like(img)
    for j in range(height):
        for i in range(width):
            sum_b += img[j][i][0]
            sum_r += img[j][i][2]
            sum_g += img[j][i][1]
            if color_thresh(img[j][i], thresh):
                mask[j][i] = img[j][i]
    mean_r = sum_r/(width*height)
    mean_b = sum_b/(width*height)
    mean_g = sum_g/(width*height)
    print(mean_b, mean_g, mean_r)
    return mask

while True:
    cv2.imshow('original_image',im)
    cv2.imshow('img',green_detector(im, 1.1))
    cv2.waitKey(1)
cv2.destroyAllWindows()
