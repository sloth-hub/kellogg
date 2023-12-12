const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 1500,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 2500,
        pauseOnMouseEnter: true
    }
});

swiper.autoplay.stop();