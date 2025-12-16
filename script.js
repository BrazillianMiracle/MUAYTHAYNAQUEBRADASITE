/*
 * MUAY THAI NA QUEBRADA - SCRIPT.JS
 * Adiciona Interatividade e Animações
 */

document.addEventListener('DOMContentLoaded', function() {

    // 1. Funcionalidade do Menu Responsivo (Hamburger)
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    menuToggle.addEventListener('click', function() {
        // Alterna a classe 'active' para mostrar/esconder o menu
        mainNav.classList.toggle('active');
        
        // Altera o ícone do menu (Abre/Fecha)
        const icon = menuToggle.querySelector('i');
        if (mainNav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times'); // Ícone de fechar (X)
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // 2. Animação de Entrada ao Rolar (Intersection Observer API - Técnica Avançada)
    const sections = document.querySelectorAll('.fade-in');

    const options = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.15 // 15% da seção visível dispara a animação
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe 'visible' para iniciar a transição CSS
                entry.target.classList.add('visible');
                // Para de observar depois de animar
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // 3. Atualização Automática do Ano no Rodapé (JavaScript Avançado)
    const currentYear = new Date().getFullYear();
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = currentYear;
    }
    
    // 4. Fechar o menu ao clicar em um link (para experiência mobile)
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                // Restaura o ícone do menu
                menuToggle.querySelector('i').classList.remove('fa-times');
                menuToggle.querySelector('i').classList.add('fa-bars');
            }
        });
    });
});