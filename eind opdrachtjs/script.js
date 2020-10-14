let navbar = document.querySelector(".navbar");
let ham = document.querySelector(".ham");
ham.addEventListener("click", toggleHamburger);

// toggles hamburger menu  and click
function toggleHamburger() {
    navbar.classList.toggle("showNav");
    ham.classList.toggle("showClose");
}
let menuLinks = document.querySelectorAll(".menuLink");
menuLinks.forEach(function(menuLink) {
    menuLink.addEventListener("click", toggleHamburger);
});

function changeBodybackground(backgroundColor) {
    document.body.style.background = backgroundColor;
}

//click mouse
function clickEffect(e) {
    let d = document.createElement("div");
    d.className = "clickEffect";
    d.style.top = e.clientY + "px";
    d.style.left = e.clientX + "px";
    document.body.appendChild(d);
    d.addEventListener(
        "animationend",
        function() {
            d.parentElement.removeChild(d);
        }.bind(this)
    );
}
document.addEventListener("click", clickEffect);