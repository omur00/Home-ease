document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("imageGallery");

  // 1. Generate 26 Images with Lazy Loading
  const fragment = document.createDocumentFragment();
  for (let i = 1; i <= 26; i++) {
    const img = document.createElement("img");
    img.src = `assets/${i}.jpg`;
    img.alt = `HomeEase Interface ${i}`;
    img.loading = "lazy";
    img.classList.add("reveal"); // Prepare for scroll animation
    fragment.appendChild(img);
  }
  gallery.appendChild(fragment);

  // 2. Intersection Observer for Scroll Effects
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Add a slight stagger delay for gallery images
        if (entry.target.tagName === "IMG") {
          entry.target.style.transitionDelay = `${(index % 5) * 0.1}s`;
        }
        entry.target.classList.add("active");
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe Bento Items and Gallery Images
  document
    .querySelectorAll(".bento-item, .image-grid img, .gallery-header")
    .forEach((el) => {
      el.classList.add("reveal");
      revealObserver.observe(el);
    });

  // 3. Lucide Icons re-init (if dynamic)
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
