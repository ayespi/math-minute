$(document).on("ready", function(){
    $(".board").append(additionProblemUpTo(10));
});

function randomNumberUpTo(maximum){
    return Math.round(Math.random() * maximum);
}

function additionProblemUpTo(maximum){
    var firstNumber = randomNumberUpTo(maximum);
    var secondNumber = randomNumberUpTo(maximum);
    var sum = (firstNumber + secondNumber);
    return ("<h2>" + firstNumber + " + " + secondNumber + " = " + sum);
}
