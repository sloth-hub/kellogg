$(".hamburger").on("click", () => {
    $("nav").toggleClass("active");
    $("body").toggleClass("active");
});

$(".main-menu>.nav-item.sub").hover(() => {
    $("header").toggleClass("active");
});

$(window).on("scroll", () => {
    let scrollY = $(document).scrollTop();
    if (scrollY > 2450) {
        $(".top").css({
            "position": "absolute",
            "transform": "scale(0)"
        });
    } else {
        $(".top").css({
            "position": "fixed",
            "transform": "scale(1)"
        });
    }
});