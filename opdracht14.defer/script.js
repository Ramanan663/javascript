//Opdracht 1:
//const clickButton = document.getElementById("mybutton");
//clickButton.addEventListener("click", function() {
//alert("Button clicked");
//});

//Opdracht 2:
const change = function() {
    const bodyElement = document.body;
    bodyElement.classList.add("red-background");
};
const attachColorButton = function() {
    const ColorButton = document.getElementById("change-background-button");
    ColorButton.addEventListener("click", function() {
        change();
    });
};
const attachAlertButton = function() {
    const alertButton = document.getElementById("mybutton");
    alertButton.addEventListener("click", function() {
        alert("Hello World!");
    });
};

attachAlertButton();
attachColorButton();