console.log('Hello from Vite + Hugo!');

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded');

  // Initialize hero carousel
  initHeroCarousel();
});

function initHeroCarousel() {
  const slides = document.querySelectorAll('.carousel-slide');
  if (slides.length <= 1) return;

  let currentIndex = 0;

  // Set initial state
  slides.forEach((slide, index) => {
    slide.style.opacity = index === 0 ? "1" : "0";
    slide.style.zIndex = index === 0 ? "2" : "1";
  });

  function changeSlide() {
    const currentSlide = slides[currentIndex];
    const nextIndex = (currentIndex + 1) % slides.length;
    const nextSlide = slides[nextIndex];

    // Fade out current, fade in next
    currentSlide.style.opacity = "0";
    currentSlide.style.zIndex = "1";

    nextSlide.style.opacity = "1";
    nextSlide.style.zIndex = "2";

    currentIndex = nextIndex;
  }

  // Auto-advance slides every 4 seconds
  setInterval(changeSlide, 4000);
}