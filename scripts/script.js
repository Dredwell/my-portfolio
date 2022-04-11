const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const exitButton = document.getElementById('exit-button');
const navElements = document.querySelectorAll('.nav-elements a');

menuButton.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
});

exitButton.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

for (let i = 0; i < navElements.length; i += 1) {
  navElements[i].addEventListener('click', () => {
    mobileMenu.style.display = 'none';
  });
}