const menuButton = document.getElementById("menu-hamburguer");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", function () {
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
});

window.addEventListener("resize", function () {
    if (window.innerWidth > 768) { 
        menu.style.display = "none";
    }
});