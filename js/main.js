document.addEventListener('DOMContentLoaded', function() {

    let 
        headerMenu = document.querySelector('.header__menu'),
        headerBurger = document.querySelector('.header__burger');

    headerBurger.addEventListener('click', () => {
        headerMenu.classList.toggle('active');
        headerBurger.classList.toggle('active');
    });   

    let 
        cardsButtons = document.querySelectorAll('.header__btn'),
        contentInfo = document.querySelector('.header__cardinfo'),
        contentClose = document.querySelector('.header__close');

    cardsButtons.forEach(item => {
        item.addEventListener('click', () => {
            contentInfo.classList.add('active');    
        });
    });

    contentClose.addEventListener('click', () => {
        contentInfo.classList.remove('active');

    });

});