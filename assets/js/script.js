'use-strict';

/*---- Display the navbar after click in nav-btn ----*/
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

/*---------- Dark-Light Theme ----------*/
const themeBtn = document.querySelector("#change-theme");
const iconTheme = 'fa-sun';
const darkTheme = 'dark';

// Previously selected theme (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');

// Save the last theme selected
document.body.classList[selectedTheme === darkTheme ? 'add' : 'remove'](darkTheme);
themeBtn.classList[selectedTheme === darkTheme ? 'add' : 'remove'](iconTheme);

// Change the theme when the user click
themeBtn.addEventListener('click', function(){
    document.body.classList.toggle(darkTheme);
    themeBtn.classList.toggle(iconTheme);
    localStorage.setItem('selected-theme', localStorage.getItem('selected-theme') === darkTheme ? 'light' : 'dark');
});