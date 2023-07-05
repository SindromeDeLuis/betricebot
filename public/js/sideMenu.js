const navIcon = document.querySelector(".nav-icon")
const icons = document.querySelectorAll(".nav-icon i")
const menu = document.querySelector(".navbar ul")
const sections = document.querySelectorAll(".navbar ul li")

navIcon.addEventListener("click", showMenu);
sections.forEach(section => section.addEventListener("click", showMenu));

function showMenu() {
    menu.classList.toggle("show");
    icons.forEach(icon => icon.classList.toggle("hide"))
}