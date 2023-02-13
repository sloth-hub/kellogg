$(".hamburger").on("click", () => {
    $("nav").toggleClass("active");
    $("body").toggleClass("active");
});

$(".main-menu>.nav-item.sub").hover(() => {
    $("header").toggleClass("active");
});

$(window).on("scroll", () => {
    const footerY = $("footer").offset().top;
    const topbtnY = $(".top").offset().top;

    if (topbtnY >= (footerY - 100)) {
        $(".top").css({
            "transform": "scale(0)"
        });
    } else {
        $(".top").css({
            "transform": "scale(1)"
        });
    }
});

$(document).ready(()=>{

    const slide = document.querySelector(".myswiper").swiper;
    slide.autoplay.stop();
});