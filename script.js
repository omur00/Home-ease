document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("imageGallery");

  // 1. Optimized Gallery Loading
  const fragment = document.createDocumentFragment();
  for (let i = 1; i <= 26; i++) {
    const img = document.createElement("img");
    img.src = `assets/${i}.jpg`;
    img.alt = `UI Perspective ${i}`;
    img.loading = "lazy";
    fragment.appendChild(img);
  }
  gallery.appendChild(fragment);

  // 2. Scroll Reveal Observer
  const revealCallback = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  };

  const observer = new IntersectionObserver(revealCallback, {
    threshold: 0.1,
  });

  // Apply reveal class to all major sections
  const elementsToReveal = document.querySelectorAll(
    ".bento-item, .hero, .image-grid img",
  );
  elementsToReveal.forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });

  // 3. Smooth Nav Scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
