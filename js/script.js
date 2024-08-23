document.addEventListener('DOMContentLoaded', function() {
        const carouselInner = document.querySelector('.carousel-inner .photo-grid');
        let index = 0;
        
        function moveCarousel() {
            index++;
            if (index > 2) {
                index = 0;
                carouselInner.style.transition = 'none';
                carouselInner.style.transform = `translateX(0)`;
                setTimeout(() => {
                    carouselInner.style.transition = 'transform 1s ease-in-out';
                    carouselInner.style.transform = `translateX(-33.33%)`;
                }, 50);
            } else {
                carouselInner.style.transform = `translateX(-${index * 33.33}%)`;
            }
        }
        
        setInterval(moveCarousel, 3000); // Move a cada 3 segundos
    });




document.addEventListener('scroll', function() {
    const heroSection = document.querySelector('.hero-section');
    const scrollPosition = window.scrollY;
    const heroHeight = heroSection.offsetHeight;

    // Calcula a opacidade com base na rolagem
    const opacity = 1 - (scrollPosition / heroHeight);
    
    // Garante que a opacidade não fique abaixo de 0
    heroSection.style.opacity = Math.max(opacity, 0);
});
