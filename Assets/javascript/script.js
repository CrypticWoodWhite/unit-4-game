// global variables
var RANDOMNUMBER;
var SCORE;
var CRYSTAL1;
var CRYSTAL2;
var CRYSTAL3;
var CRYSTAL4;
var WINS = 0;
var LOSSES = 0;

// initialize game on key up of any key
function initialize() {
    $(window).keyup(function() {
        RANDOMNUMBER = Math.floor(Math.random() * 102 + 19);
        CRYSTAL1 = Math.floor(Math.random() * 12 + 1);
        CRYSTAL2 = Math.floor(Math.random() * 12 + 1);
        CRYSTAL3 = Math.floor(Math.random() * 12 + 1);
        CRYSTAL4 = Math.floor(Math.random() * 12 + 1);
        SCORE = 0;

        console.log("random number = " + RANDOMNUMBER);
        console.log("crystal1 = " + CRYSTAL1);
        console.log("crystal2 = " + CRYSTAL2);
        console.log("crystal3 = " + CRYSTAL3);
        console.log("crystal4 = " + CRYSTAL4);
        console.log("score = " + SCORE);

        $("#random-number").text(RANDOMNUMBER);
        $("#your-score").text(SCORE);
        $("#wins").text(WINS);
        $("#losses").text(LOSSES);
    })
}

initialize();

// start playing
function play() {
    $("#crystal1").click(function() {
        SCORE = SCORE + CRYSTAL1;
        $("#your-score").text(SCORE);
        return;
    })

    $("#crystal2").click(function() {
        SCORE = SCORE + CRYSTAL2;
        $("#your-score").text(SCORE);
        return;
    })

    $("#crystal3").click(function() {
        SCORE = SCORE + CRYSTAL3;
        $("#your-score").text(SCORE);
        return;
    })

    $("#crystal4").click(function() {
        SCORE = SCORE + CRYSTAL4;
        $("#your-score").text(SCORE);
        return;
    })
    if ((SCORE === RANDOMNUMBER) && (RANDOMNUMBER > 0)) {
        console.log("win");
        WINS = WINS++;
        $("#wins").text(WINS);
        alert("Gneiss win, you rock! Press any key to play again.");
        reset();
        return;
    }
    if (SCORE > RANDOMNUMBER) {
        console.log("lose");
        LOSSES = LOSSES++;
        $("#losses").text(LOSSES);
        alert("You lose! But you're tufa than that, so of quartz you're gonna try again, right? Press any key to start over.");
        reset();
        return;
    }
}

play();

// reset everything except win/lose count after each round
function reset() {
    $(window).keyup(function() {
        RANDOMNUMBER = Math.floor(Math.random() * 102 + 19);
        CRYSTAL1 = Math.floor(Math.random() * 12 + 1);
        CRYSTAL2 = Math.floor(Math.random() * 12 + 1);
        CRYSTAL3 = Math.floor(Math.random() * 12 + 1);
        CRYSTAL4 = Math.floor(Math.random() * 12 + 1);
        SCORE = 0;

        console.log("random number = " + RANDOMNUMBER);
        console.log("crystal1 = " + CRYSTAL1);
        console.log("crystal2 = " + CRYSTAL2);
        console.log("crystal3 = " + CRYSTAL3);
        console.log("crystal4 = " + CRYSTAL4);

        $("#random-number").text(RANDOMNUMBER);
        $("#your-score").text(SCORE);
        $("#wins").text(WINS);
        $("#losses").text(LOSSES);
    })
}
