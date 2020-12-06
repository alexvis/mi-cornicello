"use strict";

window.onload = initMap;

function initMap() {
  // var locationInfo = document.getElementById("location-info")
  // latitude from user input
    // var lat = ""
    // var lng = ""
      // lat = parseFloat(locationInfo["dataset"]["lat"])
      // longitube from user input
      // lng = parseFloat(locationInfo["dataset"]["lng"])
    // initial location variable
    var location = {
      center: { lat:42.3601 , lng:-71.0589 },
      zoom: 10,
    }
    // map object
    var map = new google.maps.Map(document.getElementById("map"), location)

    // current location marker
    var marker = new google.maps.Marker({
      position: { lat:42.3601 , lng:-71.0589 },
      map: map,
    })

    // info window
    var infoWindow = new google.maps.InfoWindow({
      content: '<h1>Truck Location</h1>'
    })

    marker.addListener('click', function() {
      infoWindow.open(map, marker);
    })

}
