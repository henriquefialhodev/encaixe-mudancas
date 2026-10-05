// Mobile menu: the button opens and closes the navigation.
function initMenu() {
  const menuButton = document.querySelector(".btn-menu");
  const menuText = document.querySelector(".btn-menu-text");
  const menuLinks = document.querySelectorAll(".site-nav-list a");

  // This file runs on every page. Stop here if the page has no menu button.
  if (!menuButton) {
    return;
  }

  // The button is hidden in the HTML so the menu stays open without JavaScript.
  // With JavaScript running, show the button and start with the menu closed.
  menuButton.hidden = false;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.addEventListener("click", toggleMenu);
  document.addEventListener("keydown", closeMenuEsc);

  // The links point to sections of the same page, so the menu must close after a click.
  for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener("click", closeMenu);
  }

  // Open or closed based on its current state
  function toggleMenu() {
    const expandedValue = menuButton.getAttribute("aria-expanded");
    if (expandedValue === "true") {
      closeMenu();
    } else {
      openMenu();
    }
  }

  // aria-expanded is the only state. The CSS reads it to hide the navigation and swap the icon.
  function closeMenu() {
    menuButton.setAttribute("aria-expanded", "false");
    menuText.textContent = "Menu";
  }

  // Escape closes the menu only when it is open, and returns focus to the button, because the focused link has just been hidden.
  function closeMenuEsc(event) {
    const expandedValue = menuButton.getAttribute("aria-expanded");
    if (event.key === "Escape" && expandedValue === "true") {
      closeMenu();
      menuButton.focus();
    }
  }

  function openMenu() {
    menuButton.setAttribute("aria-expanded", "true");
    menuText.textContent = "Fechar";
  }
}
initMenu();
