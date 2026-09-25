let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Fungsionalitas toggle hamburger bar responsif
menuIcon.onclick = () => {
    menuIcon.classList.toggle('active');
    navbar.classList.toggle('active');
};