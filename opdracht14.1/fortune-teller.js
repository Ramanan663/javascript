/*

function tellFortune(numchild, location, job, partner) {
    console.log(
        "You will be " +
        job +
        " and married to " +
        partner +
        " with " +
        numchild +
        " kids " +
        location +
        " the place "
    );
}
tellFortune(2, "cothen", "accountent", "dayana");
tellFortune(3, "Utrecht", "chef", "bibali");
tellFortune( 4, "Amsterdam", "developer", "Hariss" );
*/
const tellFortune = function(numchild, location, job, partner) {
    let fortune =
        "You will be " +
        job +
        " and married to " +
        partner +
        " with " +
        numchild +
        " kids " +
        location +
        " the place ";
    console.log(fortune);
};
tellFortune(2, "cothen", "accountent", "dayana");
tellFortune(3, "Utrecht", "chef", "bibali");
tellFortune(4, "Amsterdam", "developer", "Hariss");