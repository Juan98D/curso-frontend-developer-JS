const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toggleDestokpMenu);

function toggleDestokpMenu () {
    desktopMenu.classList.toggle('inactive')
}