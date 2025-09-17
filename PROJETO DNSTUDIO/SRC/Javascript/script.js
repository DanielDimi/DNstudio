// Menu Hamburguer
const hamburguer = document.querySelector('.hamburguer');
const navList = document.querySelector('.nav-list ul');

hamburguer.addEventListener('click', () => {
    hamburguer.classList.toggle('ativo-abrir');
    navList.classList.toggle('ativo-abrir');
});

// Fechar menu ao clicar em um link
const navLinks = document.querySelectorAll('.nav-list a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburguer.classList.remove('ativo-abrir');
        navList.classList.remove('ativo-abrir');
    });
});

// Animação de revelação ao scroll
function revealOnScroll() {
    const elements = document.querySelectorAll('.card, .cartao, .casa-img, .casa-texto');
    
    elements.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('ativo');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
// Executar uma vez ao carregar a página
window.addEventListener('load', revealOnScroll);