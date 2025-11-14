document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".custom-slide");
  const dots = document.querySelectorAll(".custom-dot");
  const prev = document.querySelector(".custom-prev");
  const next = document.querySelector(".custom-next");
  const slidesContainer = document.querySelector(".custom-slides");

  let index = 0;
  let autoSlideInterval;

  function showSlide(n) {
    index = (n + slides.length) % slides.length;
    slidesContainer.style.transform = `translateX(${-index * 100}%)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
  }

  function nextSlide() { showSlide(index + 1); }
  function prevSlide() { showSlide(index - 1); }

  function startAutoSlide() { autoSlideInterval = setInterval(nextSlide, 4000); }
  function stopAutoSlide() { clearInterval(autoSlideInterval); }

  prev.addEventListener("click", () => { prevSlide(); stopAutoSlide(); startAutoSlide(); });
  next.addEventListener("click", () => { nextSlide(); stopAutoSlide(); startAutoSlide(); });

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => { showSlide(i); stopAutoSlide(); startAutoSlide(); });
  });

  showSlide(index);
  startAutoSlide();
});