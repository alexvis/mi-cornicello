"use strict";


window.onload = init;

function init() {
   var iNavbarEle = document.getElementById("navbar");


   iNavbarEle.onclick =
     function() {
       // add or delete navbar--open to the first navbar class
       document.querySelector(".navbar").classList.toggle("navbar--open")
     // get the seconde word in the class attribute
     var className = iNavbarEle.textContent
     var map = document.getElementById("map");
     // change the navbar from bars to time
     if(className === "dehaze" && map){
       iNavbarEle.style.color = "white";
       iNavbarEle.textContent = "close";
       map.style.opacity = 0;
     } else if (className === "close") {
       iNavbarEle.style.color = "#02A1DB";
       iNavbarEle.textContent = "dehaze";
       map.style.opacity = 1;
     }
   }
}
