const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const exitButton = document.getElementById('exit-button');

menuButton.addEventListener('click',function() {
    mobileMenu.style.display = 'flex';
});

exitButton.addEventListener('click',function() {
    mobileMenu.style.display = 'none';
})