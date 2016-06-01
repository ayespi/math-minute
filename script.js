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
        var colorGood = "#afa";
        var colorBad = "#faa";
        if(guess == correctAnswer){
            input.css("background-color", colorGood);
        }else{
            input.css("background-color", colorBad);
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
