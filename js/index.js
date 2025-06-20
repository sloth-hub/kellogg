const body = document.querySelector("body");

document.addEventListener("DOMContentLoaded", () => {
    scrollAnimation();
    this.addEventListener("scroll", topbtnEvent);
    this.addEventListener("click", tabCilckEvent);
    this.addEventListener("mouseover", tabHoverEvent);
});

function tabCilckEvent({ target }) {
    const nav = body.querySelector("nav");
    if (target.closest(".hamburger")) {
        nav.classList.toggle("active");
        body.classList.toggle("active");
        if (nav.querySelector(".nav-item.sub.active")) {
            nav.querySelector(".nav-item.sub.active").classList.remove("active");
        }
    } else if (target.closest(".nav-item")) {
        const tgt = target.closest(".nav-item");
        if (tgt.classList.contains("sub")) {
            tgt.classList.toggle("active");
        } else {
            body.classList.remove("active");
            nav.classList.remove("active");
        }
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
                    delay += 400;
                }
            } else {
                next.classList.remove("active");
            }
        });
    }, {
        threshold: 0.25
    });
    const target = document.querySelectorAll(".animate");
    target.forEach(e => observer.observe(e));
}

function topbtnEvent() {
    const floatingBox = body.querySelector(".floating-box");
    if (scrollY >= 10) {
        floatingBox.style.transform = "translateY(0)";
    } else {
        floatingBox.style.transform = "translateY(132px)";
    }
}