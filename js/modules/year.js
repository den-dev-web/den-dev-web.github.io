export default function initYear() {
  const yearEl = document.querySelector("[data-current-year]");
  if (!yearEl) return;
  yearEl.textContent = String(new Date().getFullYear());
}
