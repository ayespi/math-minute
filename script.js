$(document).on("ready", function(){
    var problemNumber = 0;
    var amountProblems = 60;
    while(problemNumber < amountProblems){
        $(".board").append(additionProblemUpTo(10));
        problemNumber += 1;
    }
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
