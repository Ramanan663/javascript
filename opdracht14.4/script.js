let answer = null;
let sName;
let i;
const min = 0;
const max = 25;
let guess;
sName = prompt("Wat is je Naam?");
alert("Welkom bij de Game " + sName);

answer = Math.floor(Math.random() * (max - min)) + min;
console.log("het nummer is--" + answer);
while (guess !== answer) {
    guess = prompt("Voer een nummer in - ");
    alert("Dat is niet correct " + guess);
    if (guess > answer) {
        alert("te hoog");
    } else if (guess < answer) {
        alert("te laag");
    } else {
        alert("Gefeliciteerd je hebt gewonnen");
        alert("Dag " + sName + "Tot de volgende keer");
    }
}