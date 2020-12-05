var headEle = document.getElementsByTagName("head")[0]

var mapKey = "https://maps.googleapis.com/maps/api/js?key=&callback=initMap&libraries=&v=weekly";

var script = document.createElement("script");
script.setAttribute("src", mapKey);
script.setAttribute("async", "");

headEle.appendChild(script)
