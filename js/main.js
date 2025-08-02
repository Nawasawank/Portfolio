function scrollCarousel(direction) {
  const carousel = document.getElementById('projectCarousel');
  if (!carousel) return;

  const scrollAmount = carousel.offsetWidth;
  carousel.scrollLeft += direction * scrollAmount;
}