const calculateSupply = function(age, perday) {
    const maxAge = 100;
    const totNeed = perday * 365 * (maxAge - age);
    console.log(
        "You will need euro " +
        Math.round(totNeed) +
        " to last you until the ripe old age of " +
        maxAge
    );
};

calculateSupply(35, 20.99);
calculateSupply(30, 40);
calculateSupply(20, 50);