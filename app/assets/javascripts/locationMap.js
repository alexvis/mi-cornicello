"use strict";

window.onload = initMap;

let map;


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
  map = new google.maps.Map(document.getElementById("map"), location)

  // current location marker

  // var marker = new google.maps.Marker({
  //   position: { lat:lat , lng:lng },
  //   map: map,
  // })
  var input = document.getElementById('pac-input').value;
  var searchBox = new google.maps.places.SearchBox(input);
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

  if (input ){

    debugger
  }
  // info window
  var infoWindow = new google.maps.InfoWindow({
    content: '<h1>Truck Location</h1>'
  })

  marker.addListener('click', function() {
    infoWindow.open(map, marker);
  })

}
