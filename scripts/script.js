const menuButton = document.getElementById('menu-button');
const mobileMenu = document.getElementById('mobile-menu');
const exitButton = document.getElementById('exit-button');
const navElements = document.querySelectorAll('.nav-elements a');

menuButton.addEventListener('click',function() {
    mobileMenu.style.display = 'flex';
});

exitButton.addEventListener('click',function() {
    mobileMenu.style.display = 'none';
})

console.log(navElements);

for(let i = 0; i < navElements.length; i++) {
    navElements[i].addEventListener('click', function() {
        mobileMenu.style.display = 'none';
    })
}