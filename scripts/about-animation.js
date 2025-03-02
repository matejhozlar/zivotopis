document.addEventListener("DOMContentLoaded", function (){
    const text = "Hi, my name is Matej Hozlár, and I’m a young, passionate learner with a deep love for IT and problem-solving.";
    let index = 0;
    const speed = 0;
    const typingElement = document.getElementById("typing-text");


    function typeText() {
        if(index < text.length) {
            typingElement.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeText, speed);
        }
        else{
            typingElement.style.borderRight = "none";
        }
    }

    typeText();
});