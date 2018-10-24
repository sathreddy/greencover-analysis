import cv2
import numpy as np

def color_thresh(chan, thresh):
    if chan[0] == 0:
        chan[0] += 1
    if chan[2] == 0:
        chan[2] += 1
    if chan[1] == 0:
        chan[1] += 1
    reducer = False

    if (chan[0]/chan[1] > 1.2 and chan[0]/chan[2] > 1.2):
        reducer = True

    if ((chan[1]/chan[0]) > thresh and (chan[1]/chan[2]) > thresh):
        return True, reducer
    else:
        return False, reducer

def green_detector(img, thresh):
    sum_b = 0
    sum_r = 0
    sum_g = 0
    reducer = 0
    green_counter = 0
    red = False
    cond = False
    height, width, channels = img.shape
    mask = np.zeros_like(img)
    # mask = cv2.bitwise_not(mask)
    for j in range(height):
        for i in range(width):
            sum_b += img[j][i][0]
            sum_r += img[j][i][2]
            sum_g += img[j][i][1]
            cond, red = color_thresh(img[j][i], thresh)
            if red:
                reducer += 1
            if cond:
                mask[j][i] = img[j][i]
                green_counter += 1
    print("Vegitation Pixels:", green_counter)
    print("Water Pixels:", reducer)
    if reducer == width*height:
        vegitation = mean_r = mean_b = mean_g = 0
    else:
        mean_r = sum_r/(width*height - reducer)
        mean_b = sum_b/(width*height - reducer)
        mean_g = sum_g/(width*height - reducer)
        vegitation = green_counter/(width*height - reducer)
    print("Land Covered with Vegitation: ", vegitation*100, "%")
    return mask

def main(path = 'a.png'):
    im = cv2.imread(path)
    while True:
        cv2.imshow('original img', im)
        cv2.imshow('img', green_detector(im, 1.1))
        cv2.waitKey(1)

if __name__ == '__main__':
    main()
cv2.destroyAllWindows()
