"use strict";


window.onload = init;

function init() {
  // variables
  var map;
  var iNavbarEle;

  iNavbarEle = document.getElementById("navbar");


  iNavbarEle.onclick =
    function() {
      // add or delete navbar--open to the first navbar class
      document.querySelector(".navbar").classList.toggle("navbar--open")
      // get the seconde word in the class attribute
      var className = iNavbarEle.textContent
      var map = document.getElementById("map");
      // change the navbar from bars to time
      if(className === "dehaze"){
        iNavbarEle.style.color = "white";
        iNavbarEle.textContent = "close";

        map = document.getElementById("map");
        // check if the map elemant is not null
        if(map){
          map.remove()
        }
      // map.style.opacity = 0;
      } else if (className === "close") {
        iNavbarEle.style.color = "#02A1DB";
        iNavbarEle.textContent = "dehaze";
        var divElm = document.createElement("div");
        divElm.setAttribute("id", "map");
        var section = document.getElementById("google-map");
        // check if section existe
        location.reload();
        if(section) {
          section.appendChild(divElm);
        }


      // map.style.opacity = 1;

    }
  }
}
