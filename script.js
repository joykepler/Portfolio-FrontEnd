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

// Função para adicionar a classe 'visible' aos elementos quando eles aparecem na tela
function revealOnScroll() {
    const reveals = document.querySelectorAll(".hero, .sobre, .projetos");
    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("visible");
        } else {
            reveals[i].classList.remove("visible");
        }
    }
}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

const card1 = document.querySelector('#card1');
const card2 = document.querySelector('#card2');
const card3 = document.querySelector('#card3');

card1.addEventListener("click", () => {
    window.location.href = "https://foodjp-beige.vercel.app/"
}) 

card2.addEventListener("click", () => {
    window.location.href =  "https://desafio-steam.vercel.app/"
}) 

card3.addEventListener("click", () => {
    window.location.href = "https://atipcanada.com/"
}) 


// https://desafio-steam.vercel.app/

// https://atipcanada.com/