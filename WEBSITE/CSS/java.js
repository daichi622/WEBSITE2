const menu = document.getElementById("menu");
const closeButton = document.getElementById("close-mobile");
const nav = document.getElementById("nav-mobile");
const navLink = document.querySelectorAll(".nav-link");

menu.addEventListener("click", () => {
  nav.classList.add("show");
});

closeButton.addEventListener("click", () => {
  nav.classList.remove("show");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
});

menuDots.addEventListener("click", (e) => {
  e.stopPropagation();
  slideMenu.classList.add("active");
  slideMenu.setAttribute("aria-hidden", "false");
});
closeBtn.addEventListener("click", () => {
  slideMenu.classList.remove("active");
  slideMenu.setAttribute("aria-hidden", "true");
});
document.addEventListener("click", (e) => {
  if (!slideMenu.contains(e.target) && !menuDots.contains(e.target)) {
    slideMenu.classList.remove("active");
    slideMenu.setAttribute("aria-hidden", "true");
  }
});

// ---------- Slide menu ----------
const menuDots = document.getElementById("menu-dots");
const slideMenu = document.getElementById("slide-menu");
const closeBtn = document.getElementById("close-btn");

menuDots.addEventListener("click", (e) => {
  e.stopPropagation();
  slideMenu.classList.add("active");
  slideMenu.setAttribute("aria-hidden", "false");
});
closeBtn.addEventListener("click", () => {
  slideMenu.classList.remove("active");
  slideMenu.setAttribute("aria-hidden", "true");
});
document.addEventListener("click", (e) => {
  if (!slideMenu.contains(e.target) && !menuDots.contains(e.target)) {
    slideMenu.classList.remove("active");
    slideMenu.setAttribute("aria-hidden", "true");
  }
});

// SHOW/HIDE PAGES
function showPage(pageID) {
    document.querySelectorAll('.page').forEach(page => page.style.display = "none");
    document.getElementById(pageID).style.display = "block";
    scrollTo(0,0);
}

// CLICK BOOK → OPEN GALLERY
function openGallery() {
    showPage('galleryPage');
}

function nextPage() {
    showPage('nextPage');
}

// CLICK IMAGE → OPEN FINAL FRAME
function selectPhoto(photo) {
    document.getElementById('frameImage').src = photo;
    showPage('finalPage');
}
 // PAGE SWITCHER
    function showPage(pageID) {
        document.querySelectorAll('.page').forEach(p => p.style.display = "none");
        document.getElementById(pageID).style.display = "block";
        scrollTo(0,0);
    }

    // OPEN GALLERY AFTER BOOK
    function openGallery() {
        showPage('galleryPage');
    }

    // FINAL FRAME RESULT
    function selectPhoto(photo) {
        document.getElementById('frameImage').src = photo;
        showPage('finalPage');
    }

    

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

// ---------- Feedback Form ----------
const form = document.getElementById('feedbackForm');
    const thankYouMsg = document.getElementById('thankYouMsg');

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      form.style.display = 'none';
      thankYouMsg.style.display = 'block';
    });


// ---------- Image pop up----------/
const popup = document.getElementById('imagePopup');
const popupImg = document.getElementById('popupImg');
const closePopup = document.querySelector('.close-popup');

document.querySelectorAll('img').forEach(img => {
  img.style.cursor = 'pointer';
  img.addEventListener('click', () => {
    popup.style.display = 'block';
    popupImg.src = img.src;
  });
});

closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});
popup.addEventListener('click', (e) => {
  if (e.target === popup) popup.style.display = 'none';
});