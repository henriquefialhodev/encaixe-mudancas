// Mobile menu: the button opens and closes the navigation.
function initMenu() {
  const menuButton = document.querySelector(".btn-menu");
  const menuText = document.querySelector(".btn-menu-text");
  const menuLinks = document.querySelectorAll(".site-nav-list a");
  const menuNav = document.querySelector(".site-nav");

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
    menuLinks[i].addEventListener("click", closeMenuInstantly);
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

  // A link click closes the menu without animation. The browser works out where
  // the section is right after the click, so the header must already be closed.
  function closeMenuInstantly() {
    menuNav.classList.add("is-instant");
    closeMenu();
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
    // Turn the animation back on, in case the last close came from a link.
    menuNav.classList.remove("is-instant");
    menuButton.setAttribute("aria-expanded", "true");
    menuText.textContent = "Fechar";
  }
}
initMenu();
