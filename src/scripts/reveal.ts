// Fade [data-reveal] blocks in as they enter. Without JS (or with reduced motion) everything is simply visible.
if (matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }
  }, { rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('[data-reveal]').forEach((el) => { el.classList.add('pending'); io.observe(el); });
}
