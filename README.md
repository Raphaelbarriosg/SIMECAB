# Simecab Evolución Tecnológica - Landing Page Premium

Bienvenido al proyecto de la landing page premium para **Simecab Evolución Tecnológica**. Esta página ha sido diseñada siguiendo un enfoque "Dark Luxury" orientado a los sectores de telecomunicaciones, automatización de procesos y desarrollo de ecosistemas digitales.

## 🎨 Paleta de Colores y Tipografía

**Color Principal Seleccionado:** Verde (`#22C55E`) y blanco/negro contrastado.

*   **Fondo Primario:** `#000000` (Negro profundo)
*   **Fondo Secundario (Cards/Cards 3D):** `#09090B` y `#18181B`
*   **Acento Principal:** `var(--primary-500)` `#22c55e` (Usado en glow effects, hover states, badges, CTA).
*   **Secciones de Contraste:** Uso de fondos `#FFFFFF` puros para dividir información densa (Pilares, Soluciones, Testimonios).

**Fuentes:**
*   **Títulos:** Plus Jakarta Sans (ExtraBold/Bold para presencia imponente).
*   **Cuerpos:** Inter (Legibilidad óptima UI).
*   **Data & Código:** JetBrains Mono (Aspecto tech para dashboards y métricas).

## 📁 Estructura del Proyecto

```text
/SIMECAB/
│
├── index.html           # Estructura principal, Secciones SEO y Flip Cards
├── styles.css           # Sistema de diseño, Glassmorphism, CSS Art, Animaciones y Responsive
├── script.js            # Interacciones, Contadores, Intersection Observers y Partículas
├── README.md            # Documentación del proyecto (Este archivo)
└── images/              # Carpeta con los recursos visuales
    ├── logo.png         # Logo de la empresa generado
    ├── hero_visual.png  # Composición 3D del Hero section
    ├── service_1.png    # Visual: Telecomunicaciones
    ├── service_2.png    # Visual: Automatización de Procesos
    ├── service_3.png    # Visual: Software a Medida
    └── service_4.png    # Visual: IoT & Conectividad
```
*(Nota: Servicios de Cloud y Consultoría Tech cuentan con arte generado puramente por código CSS en lugar de imágenes para asegurar altísimo rendimiento y escalabilidad visual)*

## ✨ Características Técnicas (Features)

1.  **Flip Cards 3D (Servicios):** Implementado vía CSS (`transform: rotateY`) y adaptado a móviles con `script.js` para asegurar activación en tap en pantallas táctiles (`max-width: 1024px`).
2.  **Dashboard UI Mockup:** Visualización simulada de un ecosistema en tiempo real en la sección "Soluciones", enfatizando la naturaleza de SaaS/Tech Startup de la empresa.
3.  **Partículas de Fondo & Orbit Loops:** Las partículas CSS flotando detrás del contenido junto con los órbitas con rotación infinita en el Header brindan un aura Sci-Fi / Cyber.
4.  **Glassmorphism Perfecto:** Aplicado al Navbar flotante, Flip Cards posteriores y Data Cards en el hero (`backdrop-filter: blur(24px) saturate(180%)`).
5.  **Scroll Animations Elegantes:** Se añadió lógica nativa (sin librerías como GSAP o AOS) con `IntersectionObserver` en JavaScript que aplica un `opacity: 1` con `transform: translateY(0)` revelando métricas y tarjetas lentamente a medida que se desplaza la vista.
6.  **Responsive al 100%:** Diseño Desktop XL (1440px), Desktop Base, Tablet Flexbox (768px - 2 columnas max), y un robusto entorno Mobile First (Hambuguer Menu y Stacks 1x1).

## 🚀 Instrucciones de Despliegue Configuración

1. Mueve todo el contenido de la carpeta donde se instaló a tu servidor web (Ej: dentro de la ruta `htdocs/SIMECAB` si usas Xampp o MAMP, o en cualquier Cloud Storage via FTP de CPANEL, Vercel o Netlify).
2.  El index principal es autoejecutable, no requiere de `Node.js` en vivo ni compiladores; sin embargo, al emplear `IntersectionObserver` y `CSS Variables` su rendimiento óptimo es dictado por los navegadores modernos.
3. Para cambiar el texto, datos o enlaces (como redes sociales y cuentas de Whatsapp) bastará con ubicarse en el **Footer** y la **Sección Contacto** en `index.html` y llenar con los datos reales (`tel:+58...`, `mailto:`, enlaces HREF genéricos).

## 🛠 Atribución

*Diseño y código implementado por el Agente Antigravity en base a las instrucciones Premium + Tech/Startup "Dark Luxury".*
