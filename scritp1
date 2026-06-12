/*
 * MUAY THAI NA QUEBRADA - SCRIPT.JS (FUNCIONALIDADES E INTERATIVIDADE)
 * Gerenciamento do Menu Responsivo e Animações de Rolagem (Fade-In)
 */

document.addEventListener('DOMContentLoaded', function() {

    // 1. Variáveis de Elementos DOM
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const sections = document.querySelectorAll('.fade-in');

    // 2. Função de Controle do Menu Hamburger
    const toggleMenu = () => {
        const isActive = mainNav.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        
        // Altera o ícone Font Awesome (Bars <-> Times/X)
        if (isActive) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times'); 
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
        
        // Acessibilidade: Atualiza o estado expandido
        menuToggle.setAttribute('aria-expanded', isActive);
    };

    menuToggle.addEventListener('click', toggleMenu);

    // 3. Implementação da Animação de Entrada ao Rolar (Lazy Loading Visual)
    
    // Configurações do Intersection Observer
    const observerOptions = {
        root: null, // O viewport é o elemento de rolagem
        // Margem negativa no bottom faz a animação ser disparada um pouco antes de a seção tocar o fundo da tela.
        rootMargin: '0px 0px -15% 0px', 
        threshold: 0 // Inicia a observação assim que o elemento entra no viewport
    };

    const sectionObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Quando o elemento está visível, adiciona a classe 'visible'
                entry.target.classList.add('visible');
                // Para de observar o elemento para economizar recursos
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observa todas as seções marcadas com 'fade-in'
    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // 4. Atualização Dinâmica do Ano no Rodapé
    const currentYear = new Date().getFullYear();
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = currentYear;
    }
    
    // 5. Fechar o menu ao clicar em um link (Melhora a navegação em Mobile)
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Verifica se o menu está aberto antes de tentar fechar
            if (mainNav.classList.contains('active')) {
                toggleMenu(); 
            }
        });
    });
});