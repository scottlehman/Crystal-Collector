    var wins = 0;
    var losses = 0;

    var currentNumber = Math.floor(Math.random() * 101) + 19;
    var playerTotal = 0;
    console.log(currentNumber);
    console.log(playerTotal);

    $('#randomNumber').html(currentNumber);
    $('#userTotal').html(playerTotal);

    var blue = Math.floor(Math.random() * 11) + 1;
    var brown = Math.floor(Math.random() * 11) + 1;
    var purple = Math.floor(Math.random() * 11) + 1;
    var green = Math.floor(Math.random() * 11) + 1;
    console.log(blue);
    console.log(brown);
    console.log(purple);
    console.log(green);

    var newGame = function () {
        currentNumber = Math.floor(Math.random() * 101) + 19;
        playerTotal = 0;
        console.log(currentNumber);
        console.log(playerTotal);

        $('#randomNumber').html(currentNumber);
        $('#userTotal').html(playerTotal);

        blue = Math.floor(Math.random() * 11) + 1;
        brown = Math.floor(Math.random() * 11) + 1;
        purple = Math.floor(Math.random() * 11) + 1;
        green = Math.floor(Math.random() * 11) + 1;
        console.log(blue);
        console.log(brown);
        console.log(purple);
        console.log(green);
    }

    $('#blueBtn').on('click', function () {
        playerTotal += blue;
        $('#userTotal').html(playerTotal);

        if (currentNumber === playerTotal) {
            wins++;
            $('#wins').html('wins: ' + wins);
            alert('Wow you actually won!');
            newGame();

        }

        if (currentNumber < playerTotal) {
            losses++;
            $('#losses').html('Losses: ' + losses);
            alert('Wow you lost');
            newGame();
        }
    });

    $('#brownBtn').on('click', function () {
        playerTotal += brown;
        $('#userTotal').html(playerTotal);

        if (currentNumber === playerTotal) {
            wins++;
            $('#wins').html('wins: ' + wins);
            alert('Wow you actually won!');
            newGame();

        }

        if (currentNumber < playerTotal) {
            losses++;
            $('#losses').html('Losses: ' + losses);
            alert('Wow you lost');
            newGame();
        }
    });

    $('#purpleBtn').on('click', function () {
        playerTotal += purple;
        $('#userTotal').html(playerTotal);

        if (currentNumber === playerTotal) {
            wins++;
            $('#wins').html('wins: ' + wins);
            alert('Wow you actually won!');
            newGame();

        }

        if (currentNumber < playerTotal) {
            losses++;
            $('#losses').html('Losses: ' + losses);
            alert('Wow you lost');
            newGame();
        }
    });

    $('#greenBtn').on('click', function () {
        playerTotal += green;
        $('#userTotal').html(playerTotal);

        if (currentNumber === playerTotal) {
            wins++;
            $('#wins').html('wins: ' + wins);
            alert('Wow you actually won!');
            newGame();

        }

        if (currentNumber < playerTotal) {
            losses++;
            $('#losses').html('Losses: ' + losses);
            alert('Wow you lost');
            newGame();
        }
    });