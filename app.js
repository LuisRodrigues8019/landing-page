const menuElementsToToggle = document.querySelectorAll(".toggle-menu");
const iconeToggle = document.querySelector(".icone-toggle");

const toggleMenu = () => menuElementsToToggle.forEach(el => el.classList.toggle("hidden"));

iconeToggle.addEventListener("click", toggleMenu);