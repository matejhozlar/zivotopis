document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section, h2, img, p, ul");

    const options = {
        root: null, // viewport
        threshold: 0.1, // trigger when 10% of the element is visible
        rootMargin: "0px"
    };

    const fadeInOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in-visible");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        section.classList.add("fade-in-hidden");
        fadeInOnScroll.observe(section);
    });
});