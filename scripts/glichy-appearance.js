document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const intro = document.querySelector("#intro");
        intro.style.opacity = "0";
        intro.style.transition = "opacity 0.5s ease-out";
        
        setTimeout(() => {
            intro.style.display = "none"; 
            const mainContent = document.querySelector("#main-content");
            mainContent.classList.remove("hidden");
            mainContent.style.opacity = "1";
            mainContent.style.visibility = "visible";
        }, 500); 
    }, 2500); 
});
