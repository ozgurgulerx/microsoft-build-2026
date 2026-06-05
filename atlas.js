// Shared scroll-reveal for all Atlas pages.
(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const items = document.querySelectorAll(".reveal-up");
  if (!items.length) return;

  if (reduce || !("IntersectionObserver" in window)) {
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
      ".schematic, .route-grid, .layer-stack, .sample-grid, .source-list",
    )
    .forEach((group) => {
      group
        .querySelectorAll(".reveal-up")
        .forEach((el, i) => (el.dataset.i = i * 70));
    });

  items.forEach((el) => io.observe(el));

  // safety net: never leave content hidden if the observer misses anything
  window.setTimeout(() => items.forEach((el) => el.classList.add("in")), 2200);
})();
