"use strict";

const header = document.querySelector(".header");
const navLinks = document.querySelectorAll(".nav__link");
const overlay = document.querySelector(".overlay");
const navBtn = document.querySelector(".navigation-btn");
const navCheckbox = document.querySelector(".checkbox");

function closeNav() {
  navCheckbox.checked = false;
}

navLinks.forEach((link) => {
  link.addEventListener("click", closeNav);
});

overlay.addEventListener("click", closeNav);
