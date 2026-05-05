// Navbar active link
document.querySelectorAll('.nav-links a').forEach(link => {
  if (link.href === window.location.href || link.href === window.location.href + '/') {
    link.classList.add('active');
  }
});

// Update year in footer
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
