function yes() {
    document.getElementById("page1").classList.remove("active");
    document.getElementById("page2").classList.remove("active");
    document.getElementById("page3").classList.add("active");

    let music = document.getElementById("music");
    music.play();

    let texts = document.querySelectorAll(".animate-text");
    texts.forEach((el, index) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        setTimeout(() => {
            el.style.transition = "all 0.8s ease";
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }, index * 800);
    });
}

function no() {
    document.getElementById("page1").classList.remove("active");
    document.getElementById("page2").classList.add("active");
}

function home() {
    document.getElementById("page1").classList.add("active");
    document.getElementById("page2").classList.remove("active");
    document.getElementById("page3").classList.remove("active");

    let music = document.getElementById("music");
    music.pause();
    music.currentTime = 0;
}
