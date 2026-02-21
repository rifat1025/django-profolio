

// Scroll reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el, i) => {
  el.style.transitionDelay = (i % 5) * 0.07 + 's';
  observer.observe(el);
});

// Skill bars
const skillObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting) {
      e.target.querySelectorAll('.skill-fill').forEach(bar => {
        const w = bar.getAttribute('data-w') + '%';
        setTimeout(() => { bar.style.width = w; }, 150);
      });
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('#skillsGrid').forEach(el => skillObs.observe(el));

// Active nav highlight
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section[id]');
  let current = '';
  sections.forEach(s => { if(window.scrollY >= s.offsetTop - 100) current = s.id; });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--accent)' : '';
    a.style.background = a.getAttribute('href') === '#' + current ? 'var(--accent-light)' : '';
  });
});
