// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");

// Set Initial State of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Set Menu State
    showMenu = false;
  }
}

//Functionality for Work Page

// Get modal element
let modal = document.getElementById("simpleModal");

// Get open modal button
let modalBtn = document.getElementById("modalBtn");

// Get close button
let closeBtn = document.getElementsByClassName("closeBtn")[0];

// Listen for open click
modalBtn.addEventListener("click", openModal);

// Listen for outside click
window.addEventListener("click", clickOutSide);

function openModal() {
  modal.style.display = "block";
}

function clickOutSide(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
