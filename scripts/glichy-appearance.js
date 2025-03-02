document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".pixelated").forEach(el => {
        setTimeout(() => {
            el.classList.add("visible");
        }, 500);
    });
});