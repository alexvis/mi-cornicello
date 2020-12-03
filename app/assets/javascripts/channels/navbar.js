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
     var bodyEle = document.getElementsByTagName("body");
     // change the navbar from bars to time
     if(className === "dehaze"){
       iNavbarEle.style.color = "white";
       iNavbarEle.textContent = "close";
     } else if (className === "close") {
       iNavbarEle.style.color = "#02A1DB";
       iNavbarEle.textContent = "dehaze";
     }
   }
}
