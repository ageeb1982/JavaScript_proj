let arabic = document.getElementById("arb");
let english = document.getElementById("eng");
let cmdBack = document.getElementById("cmdBack");
let cmdNext = document.getElementById("cmdNext")
let title = document.getElementById("title");
let welcome = document.getElementById("welcome-text");
let about = document.getElementById("about");
let aboutText = document.getElementById("about-text");
let contact = document.getElementById("contact");

// let slider = document.getElementById("slider");
// slider.carousel({
//     interval: 2000
// });


if (localStorage.getItem("Lang") == null) {
    localStorage.setItem("Lang", "english");
}

arabic.onclick = () => {
    setLanugage("arabic");
};

english.onclick = () => {
    setLanugage("english");
};



function setLanugage(getLanuage) {
    if (getLanuage == null || getLanuage == undefined || getLanuage == "") {
        getLanuage = "english";
    }
    localStorage.setItem("Lang", getLanuage);
    if (getLanuage === "arabic") {
        arabic.classList.add("langActive");
        english.classList.remove("langActive");
        cmdBack.innerHTML = "الخلف";
        cmdNext.innerHTML = "التالي";
        title.innerHTML = "محمد عجيب";
        welcome.innerHTML = "مرحبا بكم  في صفحة محمد عجيب";
        about.innerHTML = "من نحن";
        aboutText.innerHTML = "انا مطور ويب";
        contact.innerHTML = "اتصل بنا";
    } else if (getLanuage === "english") {
        english.classList.add("langActive");
        arabic.classList.remove("langActive");
        cmdBack.innerHTML = "Previous";
        cmdNext.innerHTML = "Next";
        title.innerHTML = "Mohamed ageeb";
        welcome.innerHTML = "Welcome to website of Mohamed Ageeb";
        about.innerHTML = "  About US";
        aboutText.innerHTML = "I am a Web Developer";
        contact.innerHTML = "Contact us";
    }
}
onload = () => {
    setLanugage(localStorage.getItem("Lang"));
};