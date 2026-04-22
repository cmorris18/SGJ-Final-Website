/* ============================================================
   script.js — Jewish Swimmers
   ============================================================ */

/* ── Mobile nav toggle ── */
const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
  toggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
    toggle.textContent = isOpen ? '✕' : '☰';
  });

  // Close on link click (mobile)
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      toggle.setAttribute('aria-expanded', false);
      toggle.textContent = '☰';
    });
  });
}

/* ── Scroll-reveal (Intersection Observer) ── */
const fadeEls = document.querySelectorAll('.fade-in');

if (fadeEls.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  fadeEls.forEach(el => observer.observe(el));
}

/* ── Highlight active nav link by current page ── */
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});
