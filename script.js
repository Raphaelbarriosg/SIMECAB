// Generación de Partículas
const particlesContainer = document.getElementById('particles-container');
const particleCount = 50;
const screenWidth = window.innerWidth;

for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // Tamaños y posiciones aleatorias
    const size = Math.random() * 4 + 1; // 1px a 5px
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Posición X aleatoria
    particle.style.left = `${Math.random() * 100}vw`;
    // Posición Y aleatoria para iniciar desde abajo
    particle.style.top = `${Math.random() * 100}vh`;

    // Efectos de difuminado aleatorios
    particle.style.filter = `blur(${Math.random() * 2}px)`;
    
    // Animaciones
    const duration = Math.random() * 20 + 20; // 20s a 40s
    particle.style.animationDuration = `${duration}s`;
    particle.style.animationDelay = `${Math.random() * 30}s`;

    particlesContainer.appendChild(particle);
}

// Navbar Sticky & Blur
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.add('scrolled');
    }
});

// Forzar el estilo "scrolled" al cargar por si el usario ya hizo scroll
if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
}

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Smooth Scroll (por si el css ignorara algún caso o offset)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset para el navbar
                behavior: 'smooth'
            });
        }
    });
});

// Flip Cards en Mobile (Tap para voltear)
const flipCards = document.querySelectorAll('.service-card-flip');
flipCards.forEach(card => {
    // Si estamos en mobile/tablet, usamos click para asegurar el flip
    if (window.innerWidth <= 1024) {
        card.addEventListener('click', function() {
            // Eliminar hover classes explícitas (el CSS detecta :hover pero on click forzamos)
            const inner = this.querySelector('.service-card-inner');
            if (inner.style.transform === 'rotateY(180deg)') {
                inner.style.transform = 'rotateY(0deg)';
            } else {
                // Reiniciar todos antes de voltear este
                document.querySelectorAll('.service-card-inner').forEach(c => {
                    c.style.transform = 'rotateY(0deg)';
                });
                inner.style.transform = 'rotateY(180deg)';
            }
        });
    }
});

// Contadores Animados (Intersection Observer)
const counters = document.querySelectorAll('.counter, .counter-white');
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -50px 0px'
};

const countObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const target = parseInt(el.getAttribute('data-target'));
            animateCounter(el, target, 2000); // 2 segundos
            observer.unobserve(el); // Animar solo una vez
        }
    });
}, observerOptions);

counters.forEach(counter => {
    countObserver.observe(counter);
});

function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16); // 60fps aproximado
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.innerText = target;
            clearInterval(timer);
        } else {
            element.innerText = Math.round(start);
        }
    }, 16);
}

// Reveal Animations on Scroll
const revealElements = document.querySelectorAll('.reveal-item, .pillar-card');
const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Añadir delay progresivo a elementos agrupados (ej. pillars, cards)
            setTimeout(() => {
                entry.target.classList.add('is-visible');
            }, (index % 3) * 150); // Stagger de 150ms hasta 3 elementos por fila
            
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.15, rootMargin: '0px' });

revealElements.forEach(el => {
    revealObserver.observe(el);
    // Para simplificar, añadimos la clase base de reveal a los pillares
    if(el.classList.contains('pillar-card')) {
        el.classList.add('reveal-item'); 
    }
});

// Manejo del formulario
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const btn = document.getElementById('submit-btn');
    const originalText = btn.innerHTML;
    
    // Simular carga visual
    btn.innerHTML = 'Enviando... <span class="spinner">↻</span>';
    btn.style.opacity = '0.8';
    
    // Recopilar datos del formulario
    const formData = new FormData(contactForm);
    
    // Petición AJAX (Fetch) hacia Formsubmit
    fetch('https://formsubmit.co/ajax/raphaelbarriosg@gmail.com', {
        method: 'POST',
        headers: { 
            'Accept': 'application/json'
        },
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            btn.innerHTML = '¡Mensaje Enviado! ✓';
            btn.style.background = 'var(--primary-600)';
            contactForm.reset();
        } else {
            throw new Error('Error de validación Formsubmit');
        }
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.opacity = '1';
            btn.style.background = '';
        }, 3000);
    })
    .catch(error => {
        console.error('Error enviando correo:', error);
        btn.innerHTML = 'Error al enviar ✕';
        btn.style.background = '#ef4444';
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.opacity = '1';
            btn.style.background = '';
        }, 3000);
    });
});
