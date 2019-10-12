$(document).ready(function () {
    // selects a random number between 19-120
    var Random = Math.floor(Math.random() * 19 + 101)
    console.log(Random);

    // appends text to number to match
    $('#theSum').text(Random);

    // setting up random jewel numbers between 1-12
    var num1 = Math.floor(Math.random() * 11 + 1);
    var num2 = Math.floor(Math.random() * 11 + 1);
    var num3 = Math.floor(Math.random() * 11 + 1);
    var num4 = Math.floor(Math.random() * 11 + 1);

    // variables for win and lose count and variables at starting point
    var playerTotal = 0;
    var wins = 0;
    var losses = 0;

    $('#rowWins').text(wins);
    $('#rowLosses').text(losses);

    // game reset
    function reset() {
        Random = Math.floor(Math.random() * 19 + 101);
        console.log(Random)
        $('#theSum').text(Random);
        num1 = Math.floor(Math.random() * 11 + 1);
        num2 = Math.floor(Math.random() * 11 + 1);
        num3 = Math.floor(Math.random() * 11 + 1);
        num4 = Math.floor(Math.random() * 11 + 1);
        userTotal = 0;
        $('#totalSum').text(playerTotal);
    }

    // adds players wins
    function winner() {
        alert("Congrats You Win!");
        wins++;
        $('#rowWins').text(wins);
        reset();
    }

    // adds to your losses column
    function loser() {
        alert("You Lose! Please Try Again!");
        losses++;
        $('#rowLosses').text(losses);
        reset();
    }




});