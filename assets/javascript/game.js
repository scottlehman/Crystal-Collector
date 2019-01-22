    var wins = 0;
    var losses = 0;

    var newGame = function () {
        generateGame();
    };

    var generateGame = function () {

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

        var winLose = function () {
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
        }

        $('#blueBtn').on('click', function () {
            playerTotal += blue;
            $('#userTotal').html(playerTotal);
            winLose();
        });

        $('#brownBtn').on('click', function () {
            playerTotal += brown;
            $('#userTotal').html(playerTotal);
            winLose();
        });

        $('#purpleBtn').on('click', function () {
            playerTotal += purple;
            $('#userTotal').html(playerTotal);
            winLose();
        });

        $('#greenBtn').on('click', function () {
            playerTotal += green;
            $('#userTotal').html(playerTotal);
            winLose();
        });
    };

    generateGame();