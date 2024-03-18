// Menu

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menu-icon");
    const menuList = document.querySelector("nav ul");
  
    menuIcon.addEventListener("click", function() {
        menuList.classList.toggle("show");
    });
  });