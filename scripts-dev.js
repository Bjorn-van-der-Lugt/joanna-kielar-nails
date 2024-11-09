// Utility function to toggle visibility of menus and update icons and aria-expanded attributes
function toggleMenu(menuElement, otherMenuElement, iconElement, otherIconElement, elementsToHide, buttonElement, otherButtonElement) {
  const isVisible = menuElement.classList.toggle('visible');
  otherMenuElement.classList.remove('visible');

  // Update aria-expanded for the clicked menu button
  buttonElement.setAttribute('aria-expanded', isVisible);
  otherButtonElement.setAttribute('aria-expanded', 'false');

  // Toggle the caret icon for the clicked menu
  iconElement.classList.toggle('fa-caret-down', !isVisible);
  iconElement.classList.toggle('fa-caret-up', isVisible);

  // Reset the icon for the other menu
  otherIconElement.classList.remove('fa-caret-up');
  otherIconElement.classList.add('fa-caret-down');

  // Hide or show the elements after the menu
  elementsToHide.forEach(element => {
    element.classList.toggle('hidden', isVisible);
  });
}

// Handle menu toggling
function handleMenuToggle() {
  const mainNavMenu = document.querySelector('.header__ul');
  const nailsNavMenu = document.querySelector('.header__ul.nails');
  const eyebrowsNavMenu = document.querySelector('.header__ul.eyebrows');
  const nailsIcon = document.querySelector('.nails-icon'); 
  const eyebrowsIcon = document.querySelector('.eyebrows-icon'); 
  const nailsButton = document.querySelector('.header__button.nails');
  const eyebrowsButton = document.querySelector('.header__button.eyebrows');
  const headerElement = document.querySelector('.header');
  const menuToggle = document.querySelector('.menu-toggle');

  // Set initial aria-expanded attributes
  nailsButton.setAttribute('aria-expanded', 'false');
  eyebrowsButton.setAttribute('aria-expanded', 'false');

  // Select elements to hide for "Nails" (after index 2)
  const elementsToHideNails = Array.from(mainNavMenu.children).slice(2);

  // Select elements to hide for "Brwi" (after index 3)
  const elementsToHideEyebrows = Array.from(mainNavMenu.children).slice(3);

  // Toggle nails menu
  nailsButton.addEventListener('click', () => 
    toggleMenu(nailsNavMenu, eyebrowsNavMenu, nailsIcon, eyebrowsIcon, elementsToHideNails, nailsButton, eyebrowsButton)
  );

  // Toggle eyebrows menu
  eyebrowsButton.addEventListener('click', () => 
    toggleMenu(eyebrowsNavMenu, nailsNavMenu, eyebrowsIcon, nailsIcon, elementsToHideEyebrows, eyebrowsButton, nailsButton)
  );

  // Toggle the header visibility when the menu-toggle button is clicked
  menuToggle.addEventListener('click', () => {
    headerElement.classList.toggle('visible');
  });
}

// Handle intersection observer for service wrappers
function handleServiceVisibility() {
  const elements = document.querySelectorAll('.services__wrapper');
  
  const options = { threshold: 0.5 };
  
  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          entry.target.classList.toggle('visible', entry.isIntersecting);
      });
  }, options);
  
  elements.forEach(wrapper => observer.observe(wrapper));
}

// Initialize all event listeners and observers when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  handleMenuToggle();
  handleServiceVisibility();
});

