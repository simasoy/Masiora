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

// Solid header once past the top of the hero; gentle parallax on the band photo
const header = document.querySelector('.site-header');
const band = document.querySelector('.band');
const bandImg = band && band.querySelector('img');
const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const onScroll = () => {
  header.classList.toggle('scrolled', window.scrollY > 40);
  if (bandImg && !still) {
    const r = band.getBoundingClientRect();
    const progress = Math.min(1, Math.max(0, (r.top + r.height) / (window.innerHeight + r.height))); // 1 → 0 as it passes
    bandImg.style.transform = `translateY(${(progress - 1) * 12}%)`;
  }
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Fade content in as it enters the viewport
if ('IntersectionObserver' in window) {
  const targets = document.querySelectorAll(
    '.statement > *, .split > *, .section-head, .service-list li, .project, .steps li, .contact-inner > *'
  );
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
