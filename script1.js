document.addEventListener('DOMContentLoaded', function () {
  const copyBtn = document.getElementById('copyEmail');
  const yearEl = document.getElementById('year');
  yearEl.textContent = new Date().getFullYear();

  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText('yashramdhun50@gmail.com');
        copyBtn.innerHTML = '<i class="fa-solid fa-check"></i> Copied!';
        setTimeout(() => copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i> Copy email', 2000);
      } catch {
        window.location.href = 'mailto:yashramdhun50@gmail.com';
      }
    });
  }

  // smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // fade-in animation
  document.querySelectorAll('.section, .hero').forEach(section => {
    section.style.opacity = 0;
    section.style.transition = 'opacity 0.8s ease-in-out';
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.style.opacity = 1;
      });
    }, { threshold: 0.1 });
    obs.observe(section);
  });
});
