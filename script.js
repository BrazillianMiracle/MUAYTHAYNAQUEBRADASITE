document.addEventListener('DOMContentLoaded', () => {
    // ----------------------------------
    // JAVASCRIPT AVANÇADO: STICKY NAVIGATION (Efeito de Scroll)
    // ----------------------------------
    const navbar = document.getElementById('navbar');
    const heroSection = document.getElementById('home');
    const heroHeight = heroSection ? heroSection.offsetHeight : 0;

    window.addEventListener('scroll', () => {
        // Altera o estilo da navbar ao rolar para baixo do hero banner
        if (window.scrollY > heroHeight - 80) { // -80 para garantir o colapso após o hero
            navbar.style.backgroundColor = 'var(--color-blue)';
            navbar.style.padding = '10px 0';
        } else {
            navbar.style.backgroundColor = 'rgba(43, 42, 78, 0.95)';
            navbar.style.padding = '15px 0';
        }
    });

    // ----------------------------------
    // JAVASCRIPT AVANÇADO: MODAL DE IMAGEM (Lightbox)
    // ----------------------------------
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-img');
    const modalCaption = document.getElementById('modal-caption');
    const closeBtn = document.getElementsByClassName('close-btn')[0];

    // Função para abrir o modal
    window.openModal = (imgSrc, captionText) => {
        modal.style.display = 'block';
        modalImg.src = `images/${imgSrc}`;
        modalCaption.innerHTML = captionText;
        document.body.style.overflow = 'hidden'; // Evita scroll na página principal
    }

    // Função para fechar o modal
    const closeModal = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    // Eventos de fechar o modal
    closeBtn.onclick = closeModal;
    window.onclick = (event) => {
        if (event.target == modal) {
            closeModal();
        }
    }
    
    document.onkeydown = (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    }

    // ----------------------------------
    // JAVASCRIPT AVANÇADO: CARROSSEL (Nossa História)
    // ----------------------------------
    const carousel = document.getElementById('history-carousel');
    const items = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    // Garante que o carrossel exista antes de adicionar event listeners
    if (carousel && items.length > 0) {
        // Função para mover o carrossel
        window.moveCarousel = (direction) => {
            currentIndex += direction;
            
            // Lógica de loop infinito do carrossel
            if (currentIndex < 0) {
                currentIndex = items.length - 1;
            } else if (currentIndex >= items.length) {
                currentIndex = 0;
            }

            const itemWidth = items[0].clientWidth;
            carousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
        }

        // Auto-Play: Move o carrossel a cada 5 segundos
        setInterval(() => {
            window.moveCarousel(1);
        }, 5000);

        // Ajusta a posição ao redimensionar (Responsividade)
        window.addEventListener('resize', () => {
            const itemWidth = items[0].clientWidth;
            carousel.style.transition = 'none'; // Desativa a transição durante o resize
            carousel.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
            setTimeout(() => {
                carousel.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            }, 50);
        });
    }
});