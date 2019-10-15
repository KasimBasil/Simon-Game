var choosenColors = [];
var userChoosenPattern = [];
var colors = ["red", "blue", "green", "yellow"];
var score = 0;

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    randomChoosenColor = colors[randomNumber];
    choosenColors.push(randomChoosenColor);
    $("#" + randomChoosenColor).fadeOut(100).fadeIn(100);
    var sound = new Audio("sounds/" + randomChoosenColor + ".mp3");
    sound.play();
    console.log("choosen colors : " + choosenColors);
}

$(".green").one("click", function () {
    $("h1").text("Score : " + score);
    nextSequence();
    var choosenColorsIndex = 0;
    var userChoosenPatternIndex = 0;
    $(".bttnxx").click(function (evt) {
        var sound = new Audio("sounds/" + evt.target.id + ".mp3");
        sound.play();
        $("#" + evt.target.id).addClass("pressed");
        setTimeout(function () {
            $("#" + evt.target.id).removeClass("pressed")
        }, 100)
        userChoosenPattern.push(evt.target.id);
        console.log("userChoosenPattern : " + userChoosenPattern);
        if (userChoosenPattern[userChoosenPatternIndex] === choosenColors[choosenColorsIndex]) {
            userChoosenPatternIndex += 1;
            choosenColorsIndex += 1;
            if (userChoosenPattern.toString() === choosenColors.toString()) {
                score += 1;
                $("h1").text("Score : " + score);
                setTimeout(function () {
                    nextSequence()
                }, 1000);
                userChoosenPattern = [];
                userChoosenPatternIndex = 0;
                choosenColorsIndex = 0;
            }

        } else {
            $("h1").text("Game Over !");
            $("body").addClass("game-over");
            var sound = new Audio("sounds/wrong.mp3");
            sound.play();
            setTimeout(function () {
                $("body").removeClass("game-over");
            }, 100)
            $(".red").click(function () {
                window.location.reload();
            })
        }
    })
})

$("img").click(function () {
    $(".alert").toggleClass("game-instructions")
})