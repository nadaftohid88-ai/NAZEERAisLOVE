function yes() {
    document.getElementById("page1").classList.remove("active");
    document.getElementById("page3").classList.add("active");
    document.getElementById("music").play();
}

function no() {
    document.getElementById("page1").classList.remove("active");
    document.getElementById("page2").classList.add("active");
}

function home() {
    document.getElementById("page2").classList.remove("active");
    document.getElementById("page3").classList.remove("active");
    document.getElementById("page1").classList.add("active");
    
    let m = document.getElementById("music");
    m.pause();
    m.currentTime = 0;
}