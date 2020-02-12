document.addEventListener('DOMContentLoaded', function() {

    let 
        headerMenu = document.querySelector('.header__menu'),
        headerBurger = document.querySelector('.header__burger');

    headerBurger.addEventListener('click', () => {

        headerMenu.classList.toggle('active');
        headerBurger.classList.toggle('active');

    });   

});