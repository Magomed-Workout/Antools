const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
    sliderPerView: 1,
    spaceBetween: 100,
    loop: false,
    lazy: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    autoplay: {
        delay: 3000,
    },
}); 

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('burger').addEventListener('click', function() {
        document.querySelector('.header').classList.toggle('open')
    })
});

document.getElementById('nav').addEventListener('click', event => {
    event._isClickWithInMenu = true;
})

document.getElementById('burger').addEventListener('click', event => {
    event._isClickWithInMenu = true;
})

document.body.addEventListener('click', event => {
    if (event._isClickWithInMenu) return;
    document.querySelector('.header').classList.remove('open')
});
