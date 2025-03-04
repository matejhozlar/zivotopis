document.addEventListener("DOMContentLoaded", () => {
    const intro = document.querySelector("#intro");
    const mainContent = document.querySelector("#main-content");
    const logo = document.querySelector("#logo"); 
    const navLinks = document.querySelectorAll("nav a");
    const textBlocks = document.querySelectorAll(".text-block");
    
    if (!sessionStorage.getItem("introPlayed")) {
        gsap.to(logo, { x: 2, y: 2, repeat: 5, yoyo: true, duration: 0.1 });
        
        setTimeout(() => {
            gsap.to(intro, { opacity: 0, duration: 0.5, ease: "power2.out", onComplete: () => {
                intro.style.display = "none";
                sessionStorage.setItem("introPlayed", "true");
                revealContent();
            }});
        }, 2500);
    } else {
        intro.style.display = "none";
        revealContent();
    }
    
    function revealContent() {
        mainContent.classList.remove("hidden");
        gsap.fromTo(mainContent, { opacity: 0 }, { opacity: 1, duration: 1 });
        
        gsap.from(navLinks, { opacity: 0, y: -20, stagger: 0.1, duration: 0.5 });
        gsap.from(textBlocks, { opacity: 0, y: 30, scale: 0.95, stagger: 0.2, duration: 0.7, ease: "power2.out" });
    }
});
