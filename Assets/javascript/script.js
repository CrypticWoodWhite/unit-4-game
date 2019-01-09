// global variables

var RANDOM;
var SCORE;
var CRYSTAL1;
var CRYSTAL2;
var CRYSTAL3;
var CRYSTAL4;
var WINS;
var LOSSES;

// initialize game

$(window).keypress(function(e) {
    if (e.which == 32) {
        RANDOM = Math.random(Math.floor() * 102 + 19);
        console.log(RANDOM);
        SCORE = 0;
        CRYSTAL1 = Math.random(Math.floor() * 12 + 1);
        console.log(CRYSTAL1);
        CRYSTAL2 = Math.random(Math.floor() * 12 + 1);
        console.log(CRYSTAL2);
        CRYSTAL3 = Math.random(Math.floor() * 12 + 1);
        console.log(CRYSTAL3);
        CRYSTAL4 = Math.random(Math.floor() * 12 + 1);
        console.log(CRYSTAL4);
        WINS = 0;
        LOSSES = 0;
        $("#random-number").html = RANDOM;
        $("#your-score").html = SCORE;
        $("#wins").html = WINS;
        $("#losses").html = LOSSES;
    }
    else {
        alert("Try hitting the space bar again!");
    }
})

// start playing

$("#crystal1").click(function() {
    SCORE = SCORE + CRYSTAL1;


})

$("#crystal2").click(function() {
    
})

$("#crystal3").click(function() {
    
})

$("#crystal4").click(function() {
    
})

// win or lose

if (SCORE == RANDOMNUMBER) {
    alert()

}
else if (SCORE > RANDOMNUMBER)

// on to next game