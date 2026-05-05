const form = document.getElementById('contact-form');
const statusEl = document.getElementById('form-status');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      statusEl.textContent = 'Пожалуйста, заполните все поля.';
      statusEl.className = 'form-status error';
      return;
    }

    if (!email.includes('@')) {
      statusEl.textContent = 'Введите корректный email.';
      statusEl.className = 'form-status error';
      return;
    }

    statusEl.textContent = 'Спасибо! Ваше сообщение отправлено.';
    statusEl.className = 'form-status success';
    form.reset();
  });
}
