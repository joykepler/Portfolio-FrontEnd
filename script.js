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

// Chama a função uma vez para garantir que os elementos visíveis ao carregar a página recebam a classe 'visible'
revealOnScroll();
