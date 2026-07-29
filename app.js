// app.js

// Nav solidify on scroll
const nav = document.getElementById("nav");
window.addEventListener("scroll", () => {
  nav.classList.toggle("solid", window.scrollY > 60);
});

// Gallery: lazy-load
const items = document.querySelectorAll(".gallery-item");
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target.querySelector("img");
        if (img && img.dataset.src && !img.src) img.src = img.dataset.src;
        entry.target.classList.add("revealed");
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 },
);
items.forEach((item) => io.observe(item));
