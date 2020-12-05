var headEle = document.getElementsByTagName("head")[0]

var key = "AIzaSyAVvMcEDDYQz2QU347ASQ1cSLlN81iLDn4"
var mapKey = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAVvMcEDDYQz2QU347ASQ1cSLlN81iLDn4&callback=initMap&libraries=&v=weekly";

var script = document.createElement("script");
script.setAttribute("src", mapKey);
script.setAttribute("async", "");

headEle.appendChild(script)
