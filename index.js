               // Navegación móvil
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const navLinks = document.getElementById('nav-links');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active') 
                ? '<i class="fas fa-times"></i>' 
                : '<i class="fas fa-bars"></i>';
        });
        
        // Cerrar menú al hacer clic en un enlace
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
        
        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Reproductor de música básico
        const playBtn = document.getElementById('play-btn');
        const playIcon = document.getElementById('play-icon');
        let isPlaying = false;
        
        playBtn.addEventListener('click', () => {
            isPlaying = !isPlaying;
            playIcon.className = isPlaying ? 'fas fa-pause' : 'fas fa-play';
            
            // Simulación de reproducción de música
            if (isPlaying) {
                console.log('Reproduciendo música...');
            } else {
                console.log('Música pausada');
            }
        });
        
        // Smooth scroll para enlaces internos
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });






        // Carrusel de Galería
const carouselSlider = document.getElementById('carousel-slider');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const carouselDots = document.getElementById('carousel-dots');
const slides = document.querySelectorAll('.carousel-slide');

let currentSlide = 0;
const totalSlides = slides.length;

// Crear puntos indicadores
function createDots() {
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('button');
        dot.classList.add('carousel-dot');
        if (i === 0) dot.classList.add('active');
        dot.setAttribute('data-slide', i);
        dot.addEventListener('click', () => goToSlide(i));
        carouselDots.appendChild(dot);
    }
}

// Ir a un slide específico
function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateCarousel();
}

// Actualizar carrusel
function updateCarousel() {
    carouselSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Actualizar puntos activos
    document.querySelectorAll('.carousel-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

// Slide siguiente
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateCarousel();
}

// Slide anterior
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateCarousel();
}

// Event Listeners
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Auto avance cada 5 segundos
let carouselInterval = setInterval(nextSlide, 5000);

// Pausar auto avance al interactuar
carouselSlider.addEventListener('mouseenter', () => {
    clearInterval(carouselInterval);
});

carouselSlider.addEventListener('mouseleave', () => {
    carouselInterval = setInterval(nextSlide, 5000);
});

// Inicializar carrusel
createDots();
