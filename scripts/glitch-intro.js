document.addEventListener("DOMContentLoaded", () => {
    const intro = document.querySelector("#intro");
    const mainContent = document.querySelector("#main-content");

    if (!sessionStorage.getItem("introPlayed")) {
        setTimeout(() => {
            intro.style.opacity = "0";
            intro.style.transition = "opacity 0.5s ease-out";

            setTimeout(() => {
                intro.style.display = "none";
                mainContent.classList.remove("hidden");
                mainContent.style.opacity = "1";
                mainContent.style.visibility = "visible";

                sessionStorage.setItem("introPlayed", "true");
            }, 500);
        }, 2500);
    } else {
        intro.style.display = "none";
        mainContent.classList.remove("hidden");
        mainContent.style.opacity = "1";
        mainContent.style.visibility = "visible";
    }
});
