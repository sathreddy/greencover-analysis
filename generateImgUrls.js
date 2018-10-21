<script>
function generateImgUrls(centerLat, centerLong, zoomLevel) {

   // var zoomLevel = 18;
   var mapSize = "1500,1500";
   var format = "png";
   var BingMapsKey = "AsmNTZOGHHG-CM-bayMVqMUL3BVv2xOQ0Oct8RT9g1YTA_FsmEnmC9oHTMfjcVfe";
   var mapMetaData = "0";

   // var centerLat = 33.748094;
   // var centerLong = -84.390009;
   var r_earth  = 6378;
   var pi = 3.145159265;
   var resolution = 156543.04 * (Math.cos(centerLat) / Math.pow(2,zoomLevel));

   // resolution = 1.85 * Math.abs(resolution);

   // var r1 = centerLat  + ((resolution / r_earth) * (180 / pi));
   // var r3 = centerLat - ((resolution / r_earth) * (180 / pi));

   // var c1 = centerLong - (((resolution  / r_earth) * (180 / pi)) / (Math.cos(centerLat * (pi/180))));
   // var c3 = centerLong + (((resolution  / r_earth) * (180 / pi)) / (Math.cos(centerLat * (pi/180))));

   // var latList = [r1, r1, r1, centerLat, centerLat, centerLat, r3, r3, r3];
   // var longList = [c1, centerLong, c3, c1, centerLong, c3, c1, centerLong, c3];
   var i;

    for(i = 0; i < 3; i++){
            var coord = String(centerLat) + "," + String(centerLong);
            var imgLink = "https://dev.virtualearth.net/REST/v1/Imagery/Map/Aerial/" +  coord + "/" + zoomLevel + "?mapSize=" + mapSize + "&format=" + format + "&mapMetaData=" + mapMetaData + "&key=" + BingMapsKey;
            zoomLevel--;
      }
}

generateImgUrls();
</script>
