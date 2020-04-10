
const cartButton = document.querySelector('#cart-button'),
    modal = document.querySelector('.modal'),
    close = document.querySelector('.close');


cartButton.addEventListener('click', event => {
    modal.classList.add('is-active');
});

close.addEventListener('click', () => {
    modal.classList.remove('is-active');
});

new WOW().init();