(() => {
  const normalize = (text) => (text || "").replace(/\s+/g, " ").trim();

  function directTitle(item) {
    const candidates = item.querySelectorAll(
      ":scope > .md-nav__link, :scope > .md-nav__container > .md-nav__link"
    );
    for (const node of candidates) {
      const text = normalize(node.textContent);
      if (text) return text;
    }
    return "";
  }

  function applyNavigationFixes() {
    const nav = document.querySelector(".md-nav--primary");
    if (!nav) return;

    // いったん付与済みの補助クラスを整理してから再判定する。
    nav.querySelectorAll(".arecs-submenu-item").forEach((item) => {
      item.classList.remove("arecs-submenu-item");
    });
    nav.querySelectorAll(".arecs-duplicate-nav-item").forEach((item) => {
      item.classList.remove("arecs-duplicate-nav-item");
    });

    // MetaMoJi配下の「操作編」「管理者編」を、DOM上の位置に依存せず同じ階層として扱う。
    nav.querySelectorAll(".md-nav__item").forEach((item) => {
      const title = directTitle(item);
      if (title === "操作編" || title === "管理者編") {
        item.classList.add("arecs-submenu-item");
      }
    });

    // トップレベルに同名項目が2つ出た場合、目次用ラベル側を隠す。
    // Home / Neat Pulse の現在ページ表示で発生する重複対策。
    const topList = nav.querySelector(":scope > .md-nav__list");
    if (!topList) return;

    const topItems = Array.from(topList.querySelectorAll(":scope > .md-nav__item"));
    const groups = new Map();

    topItems.forEach((item) => {
      const title = directTitle(item);
      if (!title) return;
      if (!groups.has(title)) groups.set(title, []);
      groups.get(title).push(item);
    });

    groups.forEach((items, title) => {
      if (items.length < 2) return;
      if (title !== "ホーム" && title !== "Neat Pulse") return;

      // 通常のaリンクを持つナビ項目を優先して1つ残す。
      let keep = items.find((item) => {
        const directAnchor = item.querySelector(
          ":scope > a.md-nav__link, :scope > .md-nav__container > a.md-nav__link"
        );
        const tocLabel = item.querySelector(
          ":scope > label.md-nav__link[for=\"__toc\"], :scope > .md-nav__container > label.md-nav__link[for=\"__toc\"]"
        );
        return directAnchor && !tocLabel;
      });

      if (!keep) keep = items[0];

      items.forEach((item) => {
        if (item !== keep) item.classList.add("arecs-duplicate-nav-item");
      });
    });
  }

  document.addEventListener("DOMContentLoaded", applyNavigationFixes);

  // Material for MkDocs がページ遷移時にナビを書き換えた場合にも再適用する。
  const observer = new MutationObserver(() => applyNavigationFixes());
  observer.observe(document.documentElement, { childList: true, subtree: true });

  if (typeof document$ !== "undefined" && document$?.subscribe) {
    document$.subscribe(() => applyNavigationFixes());
  }
})();
