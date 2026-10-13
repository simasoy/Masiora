// Studio Masiora — small enhancements (site works without JS)

// Mobile navigation
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('open', !open);
});

nav.querySelectorAll('a').forEach((link) =>
  link.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
  })
);

// Header border once the page scrolls
const header = document.querySelector('.site-header');
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 10);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Fade sections in as they enter the viewport
if ('IntersectionObserver' in window) {
  const targets = document.querySelectorAll('.section > *, .band blockquote');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  targets.forEach((el) => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
