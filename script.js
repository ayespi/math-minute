$(document).on("ready", function(){
    var problemNumber = 0;
    var amountProblems = 60;
    while(problemNumber < amountProblems){
        $(".board").append(additionProblemUpTo(10));
        problemNumber += 1;
    }
    $("input").on("change", function(){
        var input = $(this);
        var correctAnswer = input.attr("secret-answer");
        var guess = input.val();
        if(guess == correctAnswer){
            input.css("background-color", "#afa");
        }else{
            input.css("background-color", "#faa");
        }
    });
});

function randomNumberUpTo(maximum){
    return Math.round(Math.random() * maximum);
}

function additionProblemUpTo(maximum){
    var firstNumber = randomNumberUpTo(maximum);
    var secondNumber = randomNumberUpTo(maximum);
    var sum = (firstNumber + secondNumber);
    return ("<h2>" + firstNumber + " + " + secondNumber + " = " + "<input secret-answer='" + sum + "' value='' />");
}
