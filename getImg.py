from __future__ import division
from PIL import Image
import requests
import math

zoomLevel = "18";
mapSize = "1000,1000";
format = "png";
BingMapsKey = "AsmNTZOGHHG-CM-bayMVqMUL3BVv2xOQ0Oct8RT9g1YTA_FsmEnmC9oHTMfjcVfe";
mapMetaData = "0";

#to be passed in programmatically
centerLat = 33.748094
centerLong = -84.390009


r_earth  = 6378
pi = 3.145159265
resolution = 156543.04 * (math.cos(centerLat) / math.pow(2,18))
print(resolution)
resolution = 1.275 * abs(resolution)
print(resolution)


r1 = centerLat  + ((resolution / r_earth) * (180 / pi));
r3 = centerLat - ((resolution / r_earth) * (180 / pi));

c1 = centerLong - (((resolution  / r_earth) * (180 / pi)) / (math.cos(centerLat * (pi/180))));
c3 = centerLong + (((resolution  / r_earth) * (180 / pi)) / (math.cos(centerLat * (pi/180))));

latList = [r1, r1, r1, centerLat, centerLat, centerLat, r3, r3, r3]

longList = [c1, centerLong, c3, c1, centerLong, c3, c1, centerLong, c3]

for i in range(0, 9):
    coord = str(latList[i]) + "," + str(longList[i])
    print(coord)
    imgLink = "https://dev.virtualearth.net/REST/v1/Imagery/Map/Aerial/" +  coord + "/" + zoomLevel + "?mapSize=" + mapSize + "&format=" + format + "&mapMetaData=" + mapMetaData + "&key=" + BingMapsKey;
    img = Image.open(requests.get(imgLink,stream = True).raw)
    img.save('img'+ str(i) +".png")
