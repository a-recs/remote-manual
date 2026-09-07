(() => {
  const normalize = (text) => (text || "").replace(/\s+/g, " ").trim();

  function applyNavigationFixes() {
    const nav = document.querySelector(".md-nav--primary");
    if (!nav) return;

    // 現在ページの目次用ラベルと通常リンクが重複している場合、ラベル側だけ隠す。
    nav.querySelectorAll('label.md-nav__link[for="__toc"]').forEach((label) => {
      const item = label.closest(".md-nav__item");
      if (!item) return;

      const labelText = normalize(label.textContent);
      const anchors = Array.from(item.querySelectorAll("a.md-nav__link"));
      const sameTextAnchor = anchors.some((anchor) => normalize(anchor.textContent) === labelText);

      if (sameTextAnchor) {
        label.classList.add("arecs-duplicate-current-label");
      }
    });

    // 「操作編」「管理者編」をDOM上の位置に依存せず、名前で同じサブメニューとして扱う。
    nav.querySelectorAll(".md-nav__link").forEach((link) => {
      const text = normalize(link.textContent);
      if (text !== "操作編" && text !== "管理者編") return;

      const item = link.closest(".md-nav__item");
      if (!item) return;

      item.classList.add("arecs-submenu-item");

      const container = item.querySelector(":scope > .md-nav__container");
      if (container) {
        container.classList.add("arecs-submenu-button");
      } else {
        link.classList.add("arecs-submenu-button");
      }
    });
  }

  document.addEventListener("DOMContentLoaded", applyNavigationFixes);

  // Material側でナビが差し替わった場合にも再適用する。
  const observer = new MutationObserver(() => applyNavigationFixes());
  observer.observe(document.documentElement, { childList: true, subtree: true });

  if (typeof document$ !== "undefined" && document$?.subscribe) {
    document$.subscribe(() => applyNavigationFixes());
  }
})();
