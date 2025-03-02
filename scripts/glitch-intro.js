document.addEventListener("DOMContentLoaded", () => {
    const intro = document.querySelector("#intro");
    const mainContent = document.querySelector("#main-content");

    if (localStorage.getItem("introPlayed")) {
        intro.style.display = "none"; 
        mainContent.classList.remove("hidden");
        mainContent.style.opacity = "1";
        mainContent.style.visibility = "visible";
    } else {
       
        setTimeout(() => {
            intro.style.opacity = "0";
            intro.style.transition = "opacity 0.5s ease-out";
            
            setTimeout(() => {
                intro.style.display = "none";
                mainContent.classList.remove("hidden");
                mainContent.style.opacity = "1";
                mainContent.style.visibility = "visible";

                localStorage.setItem("introPlayed", "true");
            }, 500);
        }, 2500);
    }
});
