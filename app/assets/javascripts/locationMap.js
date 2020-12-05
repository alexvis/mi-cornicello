"use strict";

window.onload = initMap;

let map;



function initMap() {
  // initial location variable
  var location = {
    center: { lat:-34.9011 , lng:-56.1645 },
    zoom: 10,
  }
  // map object
  map = new google.maps.Map(document.getElementById("map"), location)

  // current location marker

  var marker = new google.maps.Marker({
    position: { lat:-34.9085 , lng:-56.1504 },
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
