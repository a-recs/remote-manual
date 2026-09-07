(() => {
  const TOP_NAMES = ["ホーム", "MetaMoJi ClassRoom", "Neat Pulse"];
  const CHILD_NAMES = ["操作編", "管理者編"];

  const normalize = (text) => (text || "").replace(/\s+/g, " ").trim();

  const directControls = (item) =>
    Array.from(
      item.querySelectorAll(
        ":scope > .md-nav__link, :scope > .md-nav__container > .md-nav__link"
      )
    );

  const directTitle = (item) => {
    const controls = directControls(item);
    const exact = controls.find((el) =>
      [...TOP_NAMES, ...CHILD_NAMES].includes(normalize(el.textContent))
    );
    return normalize(exact?.textContent || controls[0]?.textContent || "");
  };

  const hasDirectHref = (item) =>
    directControls(item).some((el) => el.tagName === "A" && el.hasAttribute("href"));

  function hideDuplicateControls(item, title) {
    const matches = directControls(item).filter(
      (el) => normalize(el.textContent) === title
    );
    if (matches.length <= 1) return;

    const keep =
      matches.find((el) => el.tagName === "A" && el.hasAttribute("href")) ||
      matches[0];

    matches.forEach((el) => {
      if (el !== keep) el.classList.add("arecs-hidden");
    });
  }

  function applySidebar() {
    const nav = document.querySelector(".md-nav--primary");
    const topList = nav?.querySelector(":scope > .md-nav__list");
    if (!nav || !topList) return;

    const topItems = Array.from(topList.children).filter((el) =>
      el.classList.contains("md-nav__item")
    );

    // 以前の付与状態を軽く初期化（非表示は再判定する）
    nav.querySelectorAll(".arecs-hidden").forEach((el) =>
      el.classList.remove("arecs-hidden")
    );

    // トップレベル3項目を名前で特定する。
    TOP_NAMES.forEach((name) => {
      const candidates = topItems.filter((item) => directTitle(item) === name);
      if (!candidates.length) return;

      // 同名項目が複数ある場合は、実リンクを持つ本来のナビ項目を優先する。
      const keep = candidates.find(hasDirectHref) || candidates[0];
      candidates.forEach((item) => {
        if (item !== keep) item.classList.add("arecs-hidden");
      });

      keep.classList.add("arecs-top-item");
      keep.dataset.arecsNav = name;
      hideDuplicateControls(keep, name);

      const container = keep.querySelector(":scope > .md-nav__container");
      const controls = directControls(keep).filter(
        (el) => normalize(el.textContent) === name && !el.classList.contains("arecs-hidden")
      );

      if (container) {
        container.classList.add("arecs-top-container");
      } else {
        controls.forEach((el) => el.classList.add("arecs-top-control"));
      }

      const directActive = controls.some((el) =>
        el.classList.contains("md-nav__link--active")
      );
      const descendantActive = !!keep.querySelector(".md-nav__link--active");

      keep.classList.toggle("arecs-current", directActive);
      keep.classList.toggle(
        "arecs-contains-current",
        name === "MetaMoJi ClassRoom" && descendantActive
      );

      // MetaMoJi配下の操作編・管理者編を同じ階層として扱う。
      if (name === "MetaMoJi ClassRoom") {
        const descendants = Array.from(
          keep.querySelectorAll(".md-nav__item")
        );

        descendants.forEach((item) => {
          const title = directTitle(item);
          if (!CHILD_NAMES.includes(title)) return;

          item.classList.add("arecs-child-group");
          item.dataset.arecsSection = title;
          hideDuplicateControls(item, title);
          item.classList.toggle(
            "arecs-current-section",
            !!item.querySelector(".md-nav__link--active")
          );
        });
      }
    });
  }

  const scheduleApply = (() => {
    let queued = false;
    return () => {
      if (queued) return;
      queued = true;
      requestAnimationFrame(() => {
        queued = false;
        applySidebar();
      });
    };
  })();

  document.addEventListener("DOMContentLoaded", scheduleApply);

  const observer = new MutationObserver(scheduleApply);
  observer.observe(document.documentElement, { childList: true, subtree: true });

  if (typeof document$ !== "undefined" && document$?.subscribe) {
    document$.subscribe(scheduleApply);
  }
})();
