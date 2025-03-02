document.addEventListener("DOMContentLoaded", function () {
    const rulesBtn = document.querySelector(".btn-rules");
    const popup = document.getElementById("rulesPopup");
    const closeBtn = document.querySelector(".close-btn");
  

    rulesBtn.addEventListener("click", function (event) {
      event.preventDefault();
      popup.style.display = "flex";
    });
  

    closeBtn.addEventListener("click", function () {
      popup.style.display = "none";
    });
  
    
    window.addEventListener("click", function (event) {
      if (event.target === popup) {
        popup.style.display = "none";
      }
    });
  });
  