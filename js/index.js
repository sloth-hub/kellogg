$(".hamburger").on("click", () => {
    $("nav").toggleClass("active");
    $("body").toggleClass("active");
});

$(".main-menu>.nav-item.sub").hover(()=> {
    $("header").toggleClass("active");
});