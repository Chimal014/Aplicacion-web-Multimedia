const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let scrollPosition = 0;

// Ancho de la tarjeta + espacio entre ellas (gap)
const cardWidth = document.querySelector('.card').offsetWidth + 16;

// Evento para el botón "Anterior"
prevBtn.addEventListener('click', () => {
  if (scrollPosition === 0) {
    // Volver al final
    const maxScroll = -(carousel.scrollWidth - carousel.offsetWidth);
    scrollPosition = maxScroll;
  } else {
    scrollPosition = Math.min(scrollPosition + cardWidth, 0); // No pasar del inicio
  }
  carousel.style.transform = `translateX(${scrollPosition}px)`;
});

// Evento para el botón "Siguiente"
nextBtn.addEventListener('click', () => {
  const maxScroll = -(carousel.scrollWidth - carousel.offsetWidth);
  if (scrollPosition === maxScroll) {
    // Volver al inicio
    scrollPosition = 0;
  } else {
    scrollPosition = Math.max(scrollPosition - cardWidth, maxScroll); // No pasar del final
  }
  carousel.style.transform = `translateX(${scrollPosition}px)`;
});
