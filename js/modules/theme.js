const STORAGE_KEY = "theme";

export default function initTheme() {
  const button = document.querySelector("[data-theme-toggle]");
  if (!button) return;

  const root = document.documentElement;
  const lightQuery = window.matchMedia("(prefers-color-scheme: light)");

  // A saved choice lives in data-theme (set by the inline script in <head>); otherwise the OS decides
  const currentTheme = () => root.dataset.theme || (lightQuery.matches ? "light" : "dark");
  const nextTheme = () => (currentTheme() === "light" ? "dark" : "light");

  const updateLabel = () => {
    button.setAttribute("aria-label", `Switch to ${nextTheme()} theme`);
  };

  button.addEventListener("click", () => {
    const theme = nextTheme();
    root.dataset.theme = theme;
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      // Storage blocked (private mode) — the choice lasts for this page view only
    }
    updateLabel();
  });

  lightQuery.addEventListener("change", updateLabel);
  updateLabel();
}
