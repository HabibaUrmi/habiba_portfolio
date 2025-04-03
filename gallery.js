document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        event.preventDefault();
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  const images = document.querySelectorAll(".gallery_grid img");

  images.forEach((image) => {
    image.addEventListener("click", () => {
      openLightbox(image.src);
    });
  });

  function openLightbox(src) {
    let existingOverlay = document.querySelector(".lightbox");
    if (existingOverlay) existingOverlay.remove();

    const overlay = document.createElement("div");
    overlay.classList.add("lightbox");
    overlay.innerHTML = `
        <div class="lightbox-content">
            <span class="close-btn">&times;</span>
            <img src="${src}" alt="Expanded Image">
        </div>
    `;
    document.body.appendChild(overlay);

    overlay
      .querySelector(".close-btn")
      .addEventListener("click", () => overlay.remove());

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) overlay.remove();
    });
  }
});
