import initMenu from "./modules/menu.js";
import initTheme from "./modules/theme.js";
import initYear from "./modules/year.js";

document.addEventListener("DOMContentLoaded", () => {
  initMenu();
  initTheme();
  initYear();
});
