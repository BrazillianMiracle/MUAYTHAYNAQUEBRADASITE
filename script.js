/*
 * MUAY THAI NA QUEBRADA - SCRIPT.JS
 * Otimizado para Performance e Responsividade
 */

document.addEventListener('DOMContentLoaded', function() {

    // 1. Funcionalidade do Menu Responsivo (Hamburger)
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    const toggleMenu = () => {
        const isActive = mainNav.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        
        // Altera o ícone do menu (Abre/Fecha)
        if (isActive) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times'); // Ícone de fechar (X)
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
        
        // Adiciona ou remove o atributo 'aria-expanded' para acessibilidade
        menuToggle.setAttribute('aria-expanded', isActive);
    };

    menuToggle.addEventListener('click', toggleMenu);

    // 2. Animação de Entrada ao Rolar (Intersection Observer API)
    const sections = document.querySelectorAll('.fade-in');

    // Configurações otimizadas para detecção suave
    const options = {
        root: null, // viewport
        rootMargin: '0px 0px -10% 0px', // Aciona quando 10% da seção estiver no final da viewport
        threshold: 0 // threshold zero é mais performático, a margem controla o disparo
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Adiciona a classe 'visible' para iniciar a transição CSS (suave)
                entry.target.classList.add('visible');
                // Para de observar para economizar recursos
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // 3. Atualização Automática do Ano no Rodapé
    const currentYear = new Date().getFullYear();
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = currentYear;
    }
    
    // 4. Fechar o menu ao clicar em um link (para experiência mobile fluida)
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                toggleMenu(); // Usa a função unificada de toggle
            }
        });
    });
});