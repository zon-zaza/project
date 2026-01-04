document.addEventListener("DOMContentLoaded", () => {
  // Reveal
  const els = document.querySelectorAll(".reveal");
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add("show");
        io.unobserve(e.target);
      }
    }
  }, { threshold: 0.15 });
  els.forEach(el => io.observe(el));
});
