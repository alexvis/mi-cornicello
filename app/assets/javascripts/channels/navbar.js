"use strict";


window.onload = init;

function init() {
   var asideNavbarEle = document.getElementById("navbar");


   asideNavbarEle.onclick =
     function() {
       // add and delete navbar--open to the first navbar class 
       document.querySelector(".navbar").classList.toggle("navbar--open")
     // get the seconde word in the class attribute
     var className = asideNavbarEle["classList"][1]
     // change the navbar from bars to time
     if(className === "fa-bars"){
       asideNavbarEle.setAttribute("class", "fa fa-times");
     } else if (className === "fa-times") {
       asideNavbarEle.setAttribute("class", "fa fa-bars")
     }
   }
}
