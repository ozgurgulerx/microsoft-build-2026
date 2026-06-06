// Atlas — shared client behaviour for all pages.
(function () {
  "use strict";

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const hasIO = "IntersectionObserver" in window;

  /* ── scroll reveal ─────────────────────────────────────────── */
  (function reveal() {
    const items = document.querySelectorAll(".reveal-up");
    if (!items.length) return;

    if (reduce || !hasIO) {
      items.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.style.setProperty(
              "--stagger",
              (e.target.dataset.i || 0) + "ms",
            );
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    // gentle stagger for grouped siblings
    document
      .querySelectorAll(
        ".schematic, .route-grid, .layer-stack, .sample-grid, .source-list, .journey-grid, .journey-teasers",
      )
      .forEach((group) => {
        group
          .querySelectorAll(".reveal-up")
          .forEach((el, i) => (el.dataset.i = i * 70));
      });

    items.forEach((el) => io.observe(el));

    // safety net: never leave content hidden if the observer misses anything
    window.setTimeout(
      () => items.forEach((el) => el.classList.add("in")),
      2200,
    );
  })();

  /* ── scroll-progress bar ───────────────────────────────────── */
  (function scrollProgress() {
    const bar = document.createElement("div");
    bar.className = "scroll-progress";
    bar.setAttribute("aria-hidden", "true");
    document.body.appendChild(bar);

    let raf = 0;
    const update = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? h.scrollTop / max : 0;
      bar.style.transform = "scaleX(" + p.toFixed(4) + ")";
      raf = 0;
    };
    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
  })();

  /* ── deep-link landing pulse ───────────────────────────────── */
  (function landingPulse() {
    if (reduce) return;
    const pulse = () => {
      const id = decodeURIComponent(location.hash.slice(1));
      if (!id) return;
      const el = document.getElementById(id);
      if (!el || !el.matches(".journey-card, .sample-card, .subgroup")) return;
      el.classList.remove("target-pulse");
      void el.offsetWidth; // restart the animation
      el.classList.add("target-pulse");
    };
    window.addEventListener("hashchange", pulse);
    window.setTimeout(pulse, 360);
  })();

  /* ── pointer-reactive hero ─────────────────────────────────── */
  (function pointerHero() {
    const hero = document.querySelector(".hero");
    if (!hero || reduce || !finePointer) return;

    let raf = 0;
    let tx = 0;
    let ty = 0;
    hero.addEventListener("pointermove", (e) => {
      const r = hero.getBoundingClientRect();
      tx = ((e.clientX - (r.left + r.width / 2)) / (r.width / 2)) * 14;
      ty = ((e.clientY - (r.top + r.height / 2)) / (r.height / 2)) * 10;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          hero.style.setProperty("--px", tx.toFixed(1) + "px");
          hero.style.setProperty("--py", ty.toFixed(1) + "px");
          raf = 0;
        });
      }
    });
    hero.addEventListener("pointerleave", () => {
      hero.style.setProperty("--px", "0px");
      hero.style.setProperty("--py", "0px");
    });
  })();

  /* ── living flow rails (journeys) ──────────────────────────── */
  (function flowRails() {
    const rails = document.querySelectorAll(".flow-rail");
    if (!rails.length) return;

    rails.forEach((rail) => {
      rail
        .querySelectorAll(".flow-stage")
        .forEach((s, i) => s.style.setProperty("--si", i));
    });

    if (reduce || !hasIO) {
      rails.forEach((r) => r.classList.add("lit"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("lit");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.45 },
    );
    rails.forEach((r) => io.observe(r));
  })();

  /* ── samples layer filter ──────────────────────────────────── */
  (function sampleFilter() {
    const bar = document.querySelector(".sample-filter");
    const grid = document.querySelector(".sample-grid");
    if (!bar || !grid) return;

    const cards = Array.from(grid.querySelectorAll(".sample-card"));
    cards.forEach((c) => {
      const chip = c.querySelector(".sample-layer");
      c.dataset.layerKey = chip ? chip.dataset.layer || "" : "";
    });

    const apply = (layer) => {
      cards.forEach((c) => {
        const show = layer === "all" || c.dataset.layerKey === layer;
        c.classList.toggle("filtered-out", !show);
      });
    };

    bar.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-chip");
      if (!btn) return;
      bar
        .querySelectorAll(".filter-chip")
        .forEach((b) =>
          b.setAttribute("aria-pressed", b === btn ? "true" : "false"),
        );
      apply(btn.dataset.filter);
    });
  })();

  /* ── capability library / asset bundles ────────────────────── */
  (function capabilityAssets() {
    const grid = document.querySelector("#capability-grid");
    const expand = document.querySelector("#capability-expand");
    if (!grid && !expand) return;

    const ICONS = {
      blog: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="2.5" y="2.5" width="11" height="11" rx="1.5"/><path d="M5 6h6M5 8.5h6M5 11h4"/></svg>',
      docs: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"><path d="M8 4.2C8 3.5 7.2 3 6 3H2.6v9H6c1.2 0 2 .6 2 1.3M8 4.2C8 3.5 8.8 3 10 3h3.4v9H10c-1.2 0-2 .6-2 1.3M8 4.2v9.1"/></svg>',
      code: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 5.5 3 8l2.5 2.5M10.5 5.5 13 8l-2.5 2.5M9 4 7 12"/></svg>',
    };
    const META = {
      blog: { label: "Blog", icon: ICONS.blog, cls: "is-blog" },
      docs: { label: "Docs", icon: ICONS.docs, cls: "is-docs" },
      sample: { label: "Code", icon: ICONS.code, cls: "is-code" },
    };
    const esc = (s) =>
      String(s == null ? "" : s).replace(
        /[&<>"]/g,
        (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[m],
      );

    const chip = (kind, url) => {
      const m = META[kind];
      if (url) {
        const ext = /^https?:/.test(url);
        return `<a class="asset-chip ${m.cls}" href="${esc(url)}"${ext ? ' target="_blank" rel="noopener"' : ""}>${m.icon}<span>${m.label}</span></a>`;
      }
      return `<span class="asset-chip is-soon" aria-disabled="true">${m.icon}<span>${m.label} · soon</span></span>`;
    };
    const assetsHTML = (c) =>
      chip("blog", c.blog) + chip("docs", c.docs) + chip("sample", c.sample);
    const assetCount = (c) => [c.blog, c.docs, c.sample].filter(Boolean).length;
    const maturityTitle = (m) =>
      ({
        L0: "Blog only",
        L1: "Blog + docs / sample",
        L2: "Runnable code",
        L3: "Governed reference",
      })[m] || "";

    fetch("capabilities.json")
      .then((r) => r.json())
      .then((data) => {
        const caps = data.capabilities || [];
        if (grid) {
          renderCards(caps);
          wireFilters();
        }
        if (expand) renderExpand(caps);
      })
      .catch(() => {
        if (grid)
          grid.innerHTML =
            '<p class="cap-empty">Could not load capabilities.json.</p>';
      });

    function renderCards(caps) {
      grid.innerHTML = caps
        .map(
          (c) => `
        <article class="cap-card" data-layer="${esc(c.layer)}" data-has-code="${c.sample ? "1" : "0"}">
          <div class="cap-card-head">
            <div>
              <h3>${esc(c.label)}</h3>
              <span class="cap-layer">${esc(c.layer)}</span>
            </div>
            <span class="maturity-pill" data-m="${esc(c.maturity)}" title="${esc(maturityTitle(c.maturity))}">${esc(c.maturity)}</span>
          </div>
          <p class="cap-blurb">${esc(c.blurb)}</p>
          <div class="cap-assets">${assetsHTML(c)}</div>
        </article>`,
        )
        .join("");
    }

    function renderExpand(caps) {
      expand.innerHTML = caps
        .map(
          (c) => `
        <details class="cap-expand">
          <summary><span>${esc(c.label)}</span><span class="cap-count">${assetCount(c)} &#8964;</span></summary>
          <div class="cap-expand-panel">${assetsHTML(c)}</div>
        </details>`,
        )
        .join("");
    }

    function wireFilters() {
      const bar = document.querySelector(".cap-filter");
      if (!bar) return;
      let layer = "all";
      let codeOnly = false;
      const apply = () => {
        [...grid.children].forEach((card) => {
          const okLayer = layer === "all" || card.dataset.layer === layer;
          const okCode = !codeOnly || card.dataset.hasCode === "1";
          card.style.display = okLayer && okCode ? "" : "none";
        });
      };
      bar.addEventListener("click", (e) => {
        const btn = e.target.closest(".filter-chip");
        if (!btn) return;
        if (btn.dataset.toggle === "code") {
          codeOnly = !codeOnly;
          btn.setAttribute("aria-pressed", codeOnly ? "true" : "false");
        } else {
          layer = btn.dataset.filter;
          bar
            .querySelectorAll("[data-filter]")
            .forEach((b) =>
              b.setAttribute("aria-pressed", b === btn ? "true" : "false"),
            );
        }
        apply();
      });
    }
  })();

  /* ── P2: in-place expandable asset rows on the diagram ─────── */
  (function capabilityRows() {
    if (!document.querySelector(".cap-list")) return;

    const ICN = {
      blog: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4"><rect x="2.5" y="2.5" width="11" height="11" rx="1.5"/><path d="M5 6h6M5 8.5h6M5 11h4"/></svg>',
      docs: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"><path d="M8 4.2C8 3.5 7.2 3 6 3H2.6v9H6c1.2 0 2 .6 2 1.3M8 4.2C8 3.5 8.8 3 10 3h3.4v9H10c-1.2 0-2 .6-2 1.3M8 4.2v9.1"/></svg>',
      code: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M5.5 5.5 3 8l2.5 2.5M10.5 5.5 13 8l-2.5 2.5M9 4 7 12"/></svg>',
    };
    const META = {
      blog: { label: "Blog", icon: ICN.blog, cls: "is-blog" },
      docs: { label: "Docs", icon: ICN.docs, cls: "is-docs" },
      sample: { label: "Code", icon: ICN.code, cls: "is-code" },
    };
    const esc = (s) =>
      String(s == null ? "" : s).replace(
        /[&<>"]/g,
        (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[m],
      );
    const norm = (s) => String(s).toLowerCase().replace(/\s+/g, " ").trim();
    const chip = (kind, url) => {
      const m = META[kind];
      if (url) {
        const ext = /^https?:/.test(url);
        return `<a class="asset-chip ${m.cls}" href="${esc(url)}"${ext ? ' target="_blank" rel="noopener"' : ""}>${m.icon}<span>${m.label}</span></a>`;
      }
      return `<span class="asset-chip is-soon" aria-disabled="true">${m.icon}<span>${m.label} · soon</span></span>`;
    };
    const assetsHTML = (c) =>
      chip("blog", c.blog) + chip("docs", c.docs) + chip("sample", c.sample);

    fetch("capabilities.json")
      .then((r) => r.json())
      .then((data) => {
        const map = {};
        (data.capabilities || []).forEach((c) => (map[norm(c.label)] = c));
        document.querySelectorAll(".cap-list > li").forEach((li) => {
          const a = li.querySelector(":scope > a");
          if (!a) return;
          const span = a.querySelector("span");
          const label = span ? span.textContent.trim() : "";
          const entry = map[norm(label)];
          if (!entry) return;
          const count = [entry.blog, entry.docs, entry.sample].filter(
            Boolean,
          ).length;
          if (count < 2) return; // simple blog-only rows stay plain links
          const d = document.createElement("details");
          d.className = "cap-expand";
          d.innerHTML =
            `<summary><span>${esc(label)}</span><span class="cap-count">${count} &#8964;</span></summary>` +
            `<div class="cap-expand-panel">${assetsHTML(entry)}</div>`;
          li.replaceChildren(d);
        });
      })
      .catch(() => {});
  })();
})();
