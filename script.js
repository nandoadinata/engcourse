function scrollToPaket() {
  document.getElementById("paket").scrollIntoView({
    behavior: "smooth"
  });
}

function scrollTocontact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
}

// Scroll animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".fade-up, .card, .pricing, .testimoni").forEach(el => {
  observer.observe(el);
});

// Parallax mouse effect (background)
document.addEventListener("mousemove", (e) => {
  const bg = document.querySelector(".bg-image");

  let x = (window.innerWidth - e.pageX) / 100;
  let y = (window.innerHeight - e.pageY) / 100;

  bg.style.transform = `scale(1.1) translate(${x}px, ${y}px)`;
});

const texts = [
  "Jadi percaya diri ",
  "Lancar speaking ",
  "Siap interview kerja ",
  "Naik level karirmu "
];

let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
  const typing = document.getElementById("typing");

  currentText = texts[i];

  if (isDeleting) {
    typing.textContent = currentText.substring(0, j--);
  } else {
    typing.textContent = currentText.substring(0, j++);
  }

  if (!isDeleting && j === currentText.length) {
    isDeleting = true;
    setTimeout(type, 1200);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % texts.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();

function goToWA(pesan, btn) {
  if (btn) {
    btn.style.transform = "scale(0.95)";
  }

  const url = "https://wa.me/6281234567890?text=" + encodeURIComponent(pesan);

  setTimeout(() => {
    window.open(url, "_blank");
    if (btn) btn.style.transform = "";
  }, 150);
}

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.style.background = "rgba(15, 23, 42, 0.9)";
    header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.3)";
  } else {
    header.style.background = "rgba(15, 23, 42, 0.6)";
    header.style.boxShadow = "none";
  }
});

// SCROLL EFFECT
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

// ACTIVE LINK SAAT SCROLL
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// HAMBURGER
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".pricing-btn").forEach(btn => {

  // efek saat disentuh
  btn.addEventListener("touchstart", function() {
    this.style.background = "rgba(56, 189, 248, 0.2)";
    this.style.transform = "scale(0.95)";
  });

  // balik normal
  btn.addEventListener("touchend", function() {
    this.style.background = "";
    this.style.transform = "";
  });

});

document.addEventListener("DOMContentLoaded", () => {

  const track = document.querySelector(".carousel-track");
  const cards = document.querySelectorAll(".carousel-card");

  let current = 4;

function updateCarousel() {
  cards.forEach((card, index) => {
    card.classList.remove("active");

    if (index === current) {
      card.classList.add("active");
    }
  });

  const card = cards[current];
  const trackRect = track.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();

  const offset = cardRect.left - trackRect.left;
  const center = (track.offsetWidth / 2) - (card.offsetWidth / 2);

  track.style.transform = `translateX(${center - offset}px)`;
}

  function autoSlide() {
    current++;

    if (current >= cards.length - 3) {
      current = 3;
    }

    updateCarousel();
  }

  setInterval(autoSlide, 3000);
  updateCarousel();

});

function sendToWA(e) {
  e.preventDefault();

  const nama = document.querySelector('input[type="text"]').value;
  const email = document.querySelector('input[type="email"]').value;
  const pesan = document.querySelector('textarea').value;

  const text = `Halo Admin,%0A%0ASaya ingin konsultasi:%0A%0A` +
               `Nama: ${nama}%0A` +
               `Email: ${email}%0A` +
               `Pesan: ${pesan}`;

  const url = "https://wa.me/6281234567890?text=" + text;

  window.open(url, "_blank");
}