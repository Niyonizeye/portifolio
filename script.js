// Theme toggle
  const html = document.documentElement;
  const toggleBtn = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') html.classList.add('light');

  toggleBtn.addEventListener('click', () => {
    html.classList.toggle('light');
    localStorage.setItem('theme', html.classList.contains('light') ? 'light' : 'dark');
  });

  // Custom cursor
  const cursor = document.getElementById('cursor');
  const ring = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;
  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  function animCursor() {
    cursor.style.left = mx + 'px'; cursor.style.top = my + 'px';
    rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12;
    ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
    requestAnimationFrame(animCursor);
  }
  animCursor();

  // Scroll reveal
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal, .timeline-item').forEach(el => observer.observe(el));

