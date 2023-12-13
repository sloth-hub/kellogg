const body = document.querySelector("body");

document.addEventListener("DOMContentLoaded", () => {
    scrollAnimation();
    this.addEventListener("scroll", topbtnEvent);
    this.addEventListener("click", tabEvent);
    this.addEventListener("mouseover", tabHoverEvent);
});

function tabEvent({ target }) {
    const nav = body.querySelector("nav");
    if (target.closest(".hamburger")) {
        nav.classList.toggle("active");
        body.classList.toggle("active");
    } else if (target.closest(".nav-item")) {
        nav.classList.toggle("active");
        body.classList.toggle("active");
    }
}

function tabHoverEvent({ target }) {
    if (target.closest(".nav-item.sub")) {
        body.querySelector("header").classList.add("active");
    } else {
        target.closest("header") ? null : body.querySelector("header").classList.remove("active");
    }
}

function scrollAnimation() {

    const observer = new IntersectionObserver(entries => {
        let delay = 0;
        entries.forEach((entry) => {
            const next = entry.target;
            if (entry.isIntersecting) {
                if (next) {
                    setTimeout(() => {
                        next.classList.add("active");
                    }, delay);
                    delay += 200;
                }
            } else {
                next.classList.remove("active");
            }
        });
    });
    const target = document.querySelectorAll(".animate");
    target.forEach(e => observer.observe(e));
}

function topbtnEvent() {
    const topbtn = body.querySelector(".top");
    const footer = body.querySelector("footer");
    const observer = new IntersectionObserver(entries => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                topbtn.classList.add("active");
            } else {
                topbtn.classList.remove("active");
            }
        });
    });
    observer.observe(footer);
    if (scrollY >= 10) {
        topbtn.style.transform = "translateY(0)";
    } else {
        topbtn.style.transform = "translateY(65px)";
    }
}