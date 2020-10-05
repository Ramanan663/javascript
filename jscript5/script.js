//Make a Sandwitch
//Take a Sandwicth Bread
//put butter on the Bread
//add dubbel cheese on bread
//That's it ready- Dutch cheese sandwich

/*const makeSandwitchDutch = function() {
    console.log("Take a Sandwicth Bread");
    console.log("put butter on the Bread");
    console.log("add dubbel cheese on bread");
    console.log("That's it ready- Dutch cheese sandwich");
};
*/
//deel b
/*
const makeSandwitchDutch = function(topping) {
    console.log("Take a Sandwicth Bread");
    console.log("put butter on the Bread");
    console.log("add dubbel cheese on bread");
    console.log("That's it ready- Dutch cheese sandwich");
    console.log("with" + topping + " to sandwidth");
    console.log("There you go, a sandwich with -", topping);
};
makeSandwitchDutch("Chicken Sate");
*/
/*
//deel c
const calculateDiscountedPrice = function(totalAmount, discount) {
    return Math.round(totalAmount - discount);
};
console.log( calculateDiscountedPrice( 100, 4.5 ) );
*/
//Deel D
const calculateDiscountedPrice = function(totalAmount, discount) {
    if (totalAmount >= 25) {
        return Math.round(totalAmount - discount);
    } else {
        return totalAmount;
    }
};
console.log(calculateDiscountedPrice(100, 7.5));
console.log(calculateDiscountedPrice(15, 7.5));