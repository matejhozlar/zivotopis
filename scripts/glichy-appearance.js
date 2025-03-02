document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".pixelated").forEach(el => {
        if(!el.classList.contains('dropdown-menu')){
        setTimeout(() => {
            el.classList.add("visible");
        }, 500);}
    });

});