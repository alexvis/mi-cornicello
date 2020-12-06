"use strict";

window.onload = initMap;



function initMap() {
  var locationInfo = document.getElementById("location-info")
  // latitude from user input
  var lat = parseFloat(locationInfo["dataset"]["lat"])
  // longitube from user input
  var lng = parseFloat(locationInfo["dataset"]["lng"])
  // initial location variable
  var location = {
    center: { lat:lat , lng:lng },
    zoom: 10,
  }
  // map object
  var map = new google.maps.Map(document.getElementById("map"), location)

  // current location marker
  var marker = new google.maps.Marker({
    position: { lat:lat , lng:lng },
    map: map,
  })


  // info window
  var infoWindow = new google.maps.InfoWindow({
    content: '<h1>Truck Location</h1>'
  })

  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  })

//   map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(
//    document.getElementById('nav-id')
// );

}
