const swiper = new Swiper('.swiper', {
    navigation: {
        nextEl: '.swiper .next',
        prevEl: '.swiper .prev',
    },
    spaceBetween: 10,
    slidesPerView: 1,
    slideToClickedSlide: false,
    watchOverflow: true,
    /*  breakpoints: {
         0: {
             slidesPerView: 1.7,
         },
         650: {
             slidesPerView: 1.3,
         },
         767: {
             slidesPerView: 1,
         },
         992: {
             slidesPerView: 1,
         },
     } */
});
const Burger = document.querySelector(".header__burgimg");
const menu = document.querySelector(".header__info");
const close = document.querySelector(".header__close");
const body = document.querySelector("body");

Burger.addEventListener("click", function () {
    body.classList.toggle("lock");
    menu.classList.toggle("active");
    Burger.classList.toggle("active");
});

close.addEventListener("click", function () {
    body.classList.toggle("lock");
    menu.classList.toggle("active");
    Burger.classList.toggle("active");
});