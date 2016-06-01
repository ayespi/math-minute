$(document).on("ready", function(){

    var firstNumber = randomNumberUpTo(10);
    var secondNumber = randomNumberUpTo(10);
    var sum = (firstNumber + secondNumber);
    $(".board").append("<h2>" + firstNumber + " + " + secondNumber + " = " + sum);

});

function randomNumberUpTo(maximum){
    return Math.round(Math.random() * maximum);
}