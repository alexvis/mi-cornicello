"use strict";

window.onload = initMaps;

function initMaps() {
  // variable
  var lat,
      lng,
      locationCoordinates,
      location,
      autocomplite,
      autocompliteInput;

  // google maps api autocomplite
  autocomplite = new google.maps.places.Autocomplete(
    document.getElementById("autocomplite"), {
      types: ['address'],
      componentRestrictions: {'country': ['US']},
      fiels: ['place_id', 'geometry', 'name', 'formatted_address']
    }
  );

  // listen to the search input for changes
  autocomplite.addListener('place_changed', onChanged);

  // function for search input
  function onChanged() {
    //
     autocompliteInput = autocomplite.getPlace();

     var button = document.getElementById("button-truck");

    if (!autocompliteInput.geometry) {
      // if the input don't catch any location
      // document.getElementById("autocomplite").placeholder = 'Search...';
      button.addEventListener('click', function() {
        document.getElementById("autocomplite").value = '';
        window.location.reload();
      });

    } else {
      // save locaion information in variables
      lat = autocompliteInput.geometry.location["lat"]();
      lng = autocompliteInput.geometry.location["lng"]();
      locationCoordinates = {lat: lat, lng: lng}
      // colect information for the map location
      location = {
        center: locationCoordinates,
        zoom: 14,
      }
      // generate a map for display
      var map = new google.maps.Map(document.getElementById("map"), location);
      // print a marker in map
      var marker = new google.maps.Marker({
        position: locationCoordinates,
        map: map,
      })
      // generate an info window text
      var infoWindow = new google.maps.InfoWindow({
        content: '<h1>Truck Location</h1>'
      })

      marker.addListener('click', function() {
        infoWindow.open(map, marker);
      });


      var h1Address = document.getElementById("createdAddress");
      var aNote = document.createTextNode("Click here for directions")
      var aElem = document.createElement("a");

      aElem.appendChild(aNote)
      aElem.setAttribute("href", "https://maps.google.com/?q=");
      aElem.setAttribute("target", "_blank");
      h1Address.appendChild(aElem);
      var button = document.getElementById("button-truck");

      button.addEventListener('click', function() {
        document.getElementById("autocomplite").value = '';
        window.location.reload();
      });

    }
  }
  // current location marker

}
