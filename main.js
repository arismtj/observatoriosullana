document.querySelector('.menu-btn').addEventListener('click', () => {
   document.querySelector('.nav-menu').classList.toggle('show');
});
ScrollReveal().reveal('.slider');
ScrollReveal().reveal('.news-cards', {delay: 500});
ScrollReveal().reveal('.footer-links', {delay: 500});