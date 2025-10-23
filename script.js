// small interactions: copy email, year, and smooth scroll
document.addEventListener('DOMContentLoaded', function () {
  const copyBtn = document.getElementById('copyEmail');
  const yearEl = document.getElementById('year');
  yearEl.textContent = new Date().getFullYear();

  if (copyBtn) {
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText('yashramdhun50@gmail.com');
        copyBtn.textContent = 'Copied!';
        setTimeout(()=> copyBtn.textContent = 'Copy email', 1800);
      } catch (e) {
        window.location.href = 'mailto:yashramdhun50@gmail.com';
      }
    });
  }

  // smooth scroll for internal anchors
  document.querySelectorAll('a[href^="#"]').forEach(link=>{
    link.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  });
});
