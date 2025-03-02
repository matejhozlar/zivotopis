document.addEventListener("DOMContentLoaded", function () {
    const crtOverlay = document.createElement("div");
    crtOverlay.id = "crt-overlay";
    document.body.appendChild(crtOverlay);

    function playCRTEffect() {
        crtOverlay.style.animation = "crtBlink 0.2s ease-out";
        setTimeout(() => {
            crtOverlay.style.opacity = "0";
        }, 200);
    }

    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const href = this.href;
            playCRTEffect();
            setTimeout(() => {
                window.location.href = href;
            }, 200);
        });
    });
});
