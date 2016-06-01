$(document).on("ready", function(){
    var problemNumber = 0;
    var amountProblems = 60;
    var numCorrect = 0;
    $(".total").text(amountProblems);
    $(".correct").text(numCorrect);
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
            input.parent().fadeOut();
            numCorrect += 1;
            $(".correct").text(numCorrect);
        }else{
            input.css("background-color", colorBad);
        }
    });
    
    var time = 60;
    $(".timeleft").text(time);
    $(".start").on("click", function(){
        var button = $(this);
        button.prop("disabled", true);
        setInterval(countDown, 1000);
    });
    
    function countDown(){
        time = time - 1;
        $(".timeleft").text(time);
    }
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
