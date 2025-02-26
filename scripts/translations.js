const translations = {
    'en': {
        'navbar-language' : '🌍 Language',
        'button-home' : 'Home',
        'button-about' : 'About',
        'button-projects' : 'Projects',
        'button-contact' : 'Contact',
        'homepage-title' : 'A Bit About Me',
        'homepage-text' : 'Hi, my name is Matej Hozlár, and I’m a young, passionate learner with a deep love for IT and problem-solving. Ever since I discovered the world of technology, I’ve been fascinated by how things work and how I can make them better. I started studying IT at university, but for now, my studies are on pause. However, that hasn’t stopped me from learning, growing, and improving every day. I’m always exploring new technologies, working on projects, and challenging myself to solve complex problems.',
        'homepage-getintouch' : 'Get in touch'
    },

    'sk': {
        'navbar-language' : '🌍 Jazyk',
        'button-home' : 'Domov',
        'button-about' : 'O Mne',
        'button-projects' : 'Projekty',
        'button-contact' : 'Kontakt',
        'homepage-title' : 'Niečo málo o mne',
        'homepage-text' : 'Ahoj, volám sa Matej Hozlár a som mladý, vášnivý študent s hlbokou láskou k IT a riešeniu problémov. Odkedy som objavil svet technológií, fascinovalo ma, ako veci fungujú a ako ich môžem zlepšiť. Začal som študovať IT na univerzite, no momentálne mám štúdium pozastavené. To mi však nebráni v tom, aby som sa každý deň učil, rástol a zlepšoval. Neustále objavujem nové technológie, pracujem na projektoch a posúvam svoje hranice riešením náročných problémov.',
        'homepage-getintouch' : 'Kontakt'
    },

    'cz': {
        'navbar-language' : '🌍 Jazyk',
        'button-home' : 'Domov',
        'button-about' : 'O Mně',
        'button-projects' : 'Projekty',
        'button-contact' : 'Kontakt',
        'homepage-title' : 'Něco málo o mně',
        'homepage-text' : 'Ahoj, jmenuji se Matej Hozlár a jsem mladý, vášnivý student s hlubokou láskou k IT a řešení problémů. Od chvíle, kdy jsem objevil svět technologií, mě fascinovalo, jak věci fungují a jak je mohu vylepšit. Začal jsem studovat IT na univerzitě, ale momentálně mám studium pozastavené. To mi však nebrání v tom, abych se každý den učil, rozvíjel a zlepšoval. Neustále objevuji nové technologie, pracuji na projektech a posouvám své hranice řešením složitých problémů.',
        'homepage-getintouch' : 'Kontakt'
    }

}

function changeLanguage(lang) {
    localStorage.setItem("selectedLanguage", lang);
    applyTranslations(lang);
}

function applyTranslations(lang) {
    if(!translations[lang]) return;

    document.querySelectorAll("[data-translate]").forEach(el => {
        let key = el.getAttribute("data-translate");
        el.textContent = translations[lang][key];
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let savedLanguage = localStorage.getItem("selectedLanguage") || "en";
    applyTranslations(savedLanguage);
});