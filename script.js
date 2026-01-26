// Handles nav toggle accessibility and animations
const toggleButton = document.querySelector('.nav-toggle');
const drawer = document.querySelector('.nav-drawer');

const setNavState = (open) => {
  document.body.classList.toggle('nav-open', open);
  drawer.hidden = !open;
  toggleButton.setAttribute('aria-expanded', String(open));
};

let isOpen = false;
setNavState(isOpen);

toggleButton.addEventListener('click', () => {
  isOpen = !isOpen;
  setNavState(isOpen);
});

// Close drawer when clicking outside
window.addEventListener('click', (event) => {
  if (!isOpen) return;
  const clickedInside = drawer.contains(event.target) || toggleButton.contains(event.target);
  if (!clickedInside) {
    isOpen = false;
    setNavState(false);
  }
});

// Allow Escape to close
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && isOpen) {
    isOpen = false;
    setNavState(false);
    toggleButton.focus();
  }
});

// Auto-close after selecting a nav link for small screens
drawer.addEventListener('click', (event) => {
  const link = event.target.closest('a');
  if (link) {
    isOpen = false;
    setNavState(false);
  }
});
