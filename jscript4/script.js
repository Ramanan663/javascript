//Deel 1: 50% korting
const age = 30;

if (age >= 18 && age <= 25) {
    console.log("je krijgt 50% korting");
} else {
    console.log("geen korting");
}
//Deel 2: Ludieke actie!
const nam = "Bram";
if (nam == "Sarah" || nam == "Abraham") {
    console.log("een gratis biertje! ");
} else {
    console.log("sorry moet betalen");
}
//Deel 3: Jubileum korting
console.log(
    "bestelling boven 25 euro -  krijg je gratis (vega)bitterballen,bestelling boven 50 euro-krijg je gratis portie nachos,bestelling boven 50 euro- krijg je een gratis flesje champagne"
);
const totalAmount = 115;
if (totalAmount >= 25 && totalAmount <= 50) {
    console.log(" krijg je gratis (vega)bitterballen");
} else if (totalAmount >= 50 && totalAmount < 100) {
    console.log("krijg je gratis portie nachos");
} else if (totalAmount >= 100) {
    console.log(" krijg je een gratis flesje champagne");
} else {
    console.log("sorry");
}