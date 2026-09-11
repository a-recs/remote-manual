(() => {
  const ensureLightbox = () => {
    let dialog = document.getElementById("manual-lightbox");
    if (dialog) return dialog;

    dialog = document.createElement("dialog");
    dialog.id = "manual-lightbox";
    dialog.className = "manual-lightbox";
    dialog.innerHTML = `
      <div class="manual-lightbox__inner">
        <button type="button" class="manual-lightbox__close" aria-label="拡大画像を閉じる">×</button>
        <img class="manual-lightbox__image" src="" alt="">
        <p class="manual-lightbox__caption"></p>
      </div>`;
    document.body.appendChild(dialog);

    const closeButton = dialog.querySelector(".manual-lightbox__close");
    closeButton.addEventListener("click", () => dialog.close());

    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });

    return dialog;
  };

  const setupLightbox = () => {
    const dialog = ensureLightbox();
    const lightboxImage = dialog.querySelector(".manual-lightbox__image");
    const caption = dialog.querySelector(".manual-lightbox__caption");

    document.querySelectorAll("img.manual-lightbox-thumb").forEach((thumb) => {
      if (thumb.dataset.lightboxReady === "true") return;
      thumb.dataset.lightboxReady = "true";
      thumb.setAttribute("role", "button");
      thumb.setAttribute("tabindex", "0");
      thumb.setAttribute("aria-label", `${thumb.alt || "画像"}を拡大表示`);

      const open = () => {
        lightboxImage.src = thumb.dataset.full || thumb.currentSrc || thumb.src;
        lightboxImage.alt = thumb.alt || "";
        caption.textContent = thumb.dataset.caption || thumb.alt || "";
        dialog.showModal();
      };

      thumb.addEventListener("click", open);
      thumb.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          open();
        }
      });
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", setupLightbox);
  } else {
    setupLightbox();
  }
})();
