<script>
const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

  document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      this.textContent = '✓';
      this.style.background = '#52b788';
      setTimeout(() => { this.textContent = '+'; this.style.background = ''; }, 1200);
    });
  });

  const aboutImage = document.querySelector('.about-visual img');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      aboutImage.classList.add('visible');
    }
  });
}, { threshold: 0.3 });

observer.observe(aboutImage);
</script>