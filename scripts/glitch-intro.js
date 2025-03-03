document.addEventListener("DOMContentLoaded", () => {
    const intro = document.querySelector("#intro");
    const mainContent = document.querySelector("#main-content");
    const playEveryXVisits = 5; 

    let visitCount = parseInt(localStorage.getItem("visitCount") || "0", 10);
    visitCount++;

    if (visitCount % playEveryXVisits === 0) {
        setTimeout(() => {
            intro.style.opacity = "0";
            intro.style.transition = "opacity 0.5s ease-out";

            setTimeout(() => {
                intro.style.display = "none";
                mainContent.classList.remove("hidden");
                mainContent.style.opacity = "1";
                mainContent.style.visibility = "visible";

                localStorage.setItem("visitCount", visitCount);
            }, 500);
        }, 2500);
    } else {
        // Skip the intro
        intro.style.display = "none";
        mainContent.classList.remove("hidden");
        mainContent.style.opacity = "1";
        mainContent.style.visibility = "visible";

        localStorage.setItem("visitCount", visitCount);
    }
});

