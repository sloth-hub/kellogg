const swiper = new Swiper('.swiper', {
    loop: true,
    speed: 1500,
    pagination: {
        el: '.swiper-pagination',
        clickable : true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 2500,
        pauseOnMouseEnter: false
    }
});