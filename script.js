// JavaScript para el carrusel
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".hero-stack-item");
  const indicators = document.querySelectorAll(".hero-indicator");
  let currentIndex = 0;
  const totalItems = items.length;
  let interval;

  // Función para actualizar el carrusel
  function updateCarousel() {
    // Remover clases activas
    items.forEach((item) => {
      item.classList.remove("active", "prev", "next");
    });
    indicators.forEach((indicator) => {
      indicator.classList.remove("active");
    });

    // Calcular índices para las imágenes previas y siguientes
    const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
    const nextIndex = (currentIndex + 1) % totalItems;

    // Aplicar clases
    items[prevIndex].classList.add("prev");
    items[currentIndex].classList.add("active");
    items[nextIndex].classList.add("next");
    indicators[currentIndex].classList.add("active");
  }

  // Función para avanzar al siguiente slide
  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    updateCarousel();
  }

  // Iniciar el carrusel automático
  function startCarousel() {
    interval = setInterval(nextSlide, 3000); // Cambia cada 3 segundos
  }

  // Detener el carrusel automático
  function stopCarousel() {
    clearInterval(interval);
  }

  // Agregar eventos a los indicadores
  indicators.forEach((indicator) => {
    indicator.addEventListener("click", function () {
      currentIndex = parseInt(this.getAttribute("data-index"));
      updateCarousel();
      stopCarousel();
      startCarousel();
    });
  });

  // Pausar carrusel al hacer hover
  const carouselContainer = document.querySelector(".hero-stack-carousel");
  carouselContainer.addEventListener("mouseenter", stopCarousel);
  carouselContainer.addEventListener("mouseleave", startCarousel);

  // Inicializar el carrusel
  updateCarousel();
  startCarousel();

// Configurar el reproductor de YouTube
function setupYouTubePlayer() {
    const videoId = 'weKJWqw8-3g';
    const iframe = document.querySelector('.audio-player iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&enablejsapi=1`;
}

  // Inicializar el reproductor cuando la página esté cargada
  setupYouTubePlayer();
});


// Para reproducción automática (puede tener restricciones en algunos navegadores)
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('ourSong');
    
    // Intentar reproducción automática
    const playAudio = () => {
        audio.play().catch(error => {
            console.log('Reproducción automática bloqueada:', error);
            // Mostrar mensaje para que el usuario interactúe
            showPlayMessage();
        });
    };
    
    // Mostrar mensaje si la reproducción automática falla
    const showPlayMessage = () => {
        const message = document.createElement('div');
        message.innerHTML = 'Haz clic en cualquier parte de la página para reproducir la música';
        message.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(255, 107, 139, 0.9);
            color: white;
            padding: 1rem 2rem;
            border-radius: 10px;
            z-index: 1000;
            text-align: center;
        `;
        document.body.appendChild(message);
        
        // Reproducir al hacer clic en cualquier parte
        document.addEventListener('click', function startAudio() {
            audio.play();
            document.body.removeChild(message);
            document.removeEventListener('click', startAudio);
        });
    };
    
    // Intentar reproducir cuando la página cargue
    playAudio();
});