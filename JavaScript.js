function myFunction() {
    var x = document.getElementById("para");
    var y = document.getElementById("btu");
    var audioElement = document.getElementById("audio");
    if(x.style.display == "block") {
        x.style.display = "none";
        y.innerHTML = "About Me";
        audio.pause();
    }
    else if(audioElement.paused) {
        x.style.display = "block"
        y.innerHTML = "Hide";
        audio.play();
    }
}

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-ul");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll("nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))

const btnscroll = document.querySelector("#btnscroll");
btnscroll.addEventListener("click", function () {
    window.scrollTo(0, 0)
})

/*document.querySelector(".but").addEventListener("click", function() {
            var audio = new Audio("Aboutme.mp3");
            if(audio.paused) {
                audio.play();
            }
            else {
                audio.pause();
           }   
        })*/

        /*function togglePlay() {
            var audioElement = document.getElementById("audio");
            if(audioElement.paused) {
                audio.play();
            }
            else {
                audio.pause();
            }
        }*/