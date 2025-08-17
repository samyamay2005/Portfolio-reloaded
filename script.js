/*Hamburger toggle on media width @768p*/
const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });