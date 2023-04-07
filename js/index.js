const body = document.querySelector("body");

document.addEventListener("DOMContentLoaded", () => {
    this.addEventListener("scroll", scrollEvent);
    body.addEventListener("click", tabEvent);
    body.addEventListener("mouseover", tabHoverEvent);
});

function tabEvent({ target }) {
    const nav = body.querySelector("nav");
    if (target.className === "hamburger") {
        target.addEventListener("click", () => {
            nav.classList.toggle("active");
            body.classList.toggle("active");
        });
    }
}

function tabHoverEvent({ target }) {
    if (target.closest(".nav-item.sub")) {
        body.querySelector("header").classList.add("active");
    } else {
        target.className === "active" ? null : body.querySelector("header").classList.remove("active");
    }
}

function scrollEvent() {
    topbtnEvent();
    scrollAnimation();
}

function scrollAnimation() {
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.7,
    }
    const callback = entries => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            } else {
                entry.target.classList.remove("active");
            }
        });
    }
    let observer = new IntersectionObserver(callback, options);
    const target = document.querySelectorAll(".animate");
    target.forEach(e => observer.observe(e));
}

function topbtnEvent() {
    const topbtn = body.querySelector(".top");
    const footer = body.querySelector("footer");
    const callback = entries => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                topbtn.classList.add("active");
            } else {
                topbtn.classList.remove("active");
            }
        });
    }
    let observer = new IntersectionObserver(callback);
    observer.observe(footer);
}