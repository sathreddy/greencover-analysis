import requests
from PIL import Image
centerPoint = "43.7, -79.3834"
# centerPoint = "33.748094,-84.390009"
zoomLevel = "12"
mapSize = "1000,1000"
# string pushpin = "33.748094,-84.390009"
# string mapLayer = "TrafficFlow"
format = "png"
BingMapsKey = "AsmNTZOGHHG-CM-bayMVqMUL3BVv2xOQ0Oct8RT9g1YTA_FsmEnmC9oHTMfjcVfe"
mapMetaData = "0"

imgLink = "https://dev.virtualearth.net/REST/v1/Imagery/Map/Aerial/" +  centerPoint + "/" + zoomLevel + "?mapSize=" + mapSize + "&format=" + format + "&mapMetaData=" + mapMetaData + "&key=" + BingMapsKey

img = Image.open(requests.get(imgLink, stream = True).raw)

img.save('img2.png')
