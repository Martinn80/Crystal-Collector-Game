$(document).ready(function () {
    // selects a random number between 19-120
    var selectedNum = Math.floor(Math.random() * 19 + 101)
    console.log(selectedNum);

    // appends text to number to match
    $('#theSum').text(selectedNum);

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
        selectedNum = Math.floor(Math.random() * 19 + 101);
        console.log(selectedNum);
        $('#theSum').text(selectedNum);
        num1 = Math.floor(Math.random() * 11 + 1);
        num2 = Math.floor(Math.random() * 11 + 1);
        num3 = Math.floor(Math.random() * 11 + 1);
        num4 = Math.floor(Math.random() * 11 + 1);
        playerTotal = 0;
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

    // write function for each jewel
    // remember to add win/lose conditions and tally the W & L
    // remember to check if reset is working

    $('#crystal1').on('click', function () {
        playerTotal = playerTotal + num1;
        console.log("New playerTotal= " + playerTotal);
        $('#totalSum').text(playerTotal);
        // win/loss condition
        if (playerTotal == selectedNum) {
            winner();
        }
        else if (playerTotal > selectedNum) {
            loser();
        }
    })

    $('#crystal2').on('click', function () {
        playerTotal = playerTotal + num2;
        console.log("New playerTotal= " + playerTotal);
        $('#totalSum').text(playerTotal);
        // win/loss condition
        if (playerTotal == selectedNum) {
            winner();
        }
        else if (playerTotal > selectedNum) {
            loser();
        }
    })

    $('#crystal3').on('click', function () {
        playerTotal = playerTotal + num3;
        console.log("New playerTotal= " + playerTotal);
        $('#totalSum').text(playerTotal);
        // win/loss condition
        if (playerTotal == selectedNum) {
            winner();
        }
        else if (playerTotal > selectedNum) {
            loser();
        }
    })

    $('#crystal4').on('click', function () {
        playerTotal = playerTotal + num4;
        console.log("New playerTotal= " + playerTotal);
        $('#totalSum').text(playerTotal);
        // win/loss condition
        if (playerTotal == selectedNum) {
            winner();
        }
        else if (playerTotal > selectedNum) {
            loser();
        }
    })

});