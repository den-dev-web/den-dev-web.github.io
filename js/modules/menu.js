export default function initMenu() {
  const button = document.querySelector("[data-menu-button]");
  const menu = document.querySelector("[data-menu]");
  if (!button || !menu) return;

  const setOpen = (isOpen) => {
    menu.classList.toggle("is-open", isOpen);
    button.setAttribute("aria-expanded", String(isOpen));
  };

  button.addEventListener("click", () => {
    setOpen(button.getAttribute("aria-expanded") !== "true");
  });

  // Anchor links scroll to a section — the panel must not cover it
  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) setOpen(false);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape" || !menu.classList.contains("is-open")) return;
    setOpen(false);
    button.focus();
  });
}
