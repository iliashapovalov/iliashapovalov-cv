// About page interactions
const yearEl = document.getElementById('current-year');
if (yearEl) {
  const startYear = 2022;
  const exp = new Date().getFullYear() - startYear;
  yearEl.textContent = exp;
}
