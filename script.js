function yes() {
    document.getElementById("page1").classList.remove("active");
    document.getElementById("page3").classList.add("active");
    
    var song = document.getElementById("music");
    song.play().catch(function(e) { console.log("Music blocked"); });
}

function no() {
    document.getElementById("page1").classList.remove("active");
    document.getElementById("page2").classList.add("active");
}

function home() {
    document.getElementById("page2").classList.remove("active");
    document.getElementById("page3").classList.remove("active");
    document.getElementById("page1").classList.add("active");
    
    var song = document.getElementById("music");
    song.pause();
    song.currentTime = 0;
}
