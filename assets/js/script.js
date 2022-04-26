'use-strict';

/* Display the navbar after click in nav-btn */
let navBarBtn = document.querySelector(".nav-btn");
let navBar = document.querySelector(".navigation");
let linkList = document.querySelectorAll(".link-item a");

navBarBtn.addEventListener("click", function(){
    navBar.classList.toggle("disp-block");
});

linkList.forEach((current)=>{
    current.addEventListener("click", function(){
        navBar.classList.toggle("disp-block");
    });
});