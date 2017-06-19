//call the function play()
//by call_name which registered alphabet and number
var call_name = new Array;
var call_answer;
var turn = 1;
function select_signal_play() {
    var row = Math.floor(Math.random() * (call_name.length));
    call_answer = call_name[row];
    for (var column = 0; call_name[row][column] != 'END'; column++) {
        //alphabet
        if (call_name[row][column] == 'A') {
            Play(0, 1); Play(1, 1);//play short signal and stop
            Play(0, 3);//play long signal
        }
        if (call_name[row][column] == 'B') {
            Play(0, 3); Play(1, 1);
            Play(0, 1); Play(1, 1);
            Play(0, 1); Play(1, 1);
            Play(0, 1);
        }
        if (call_name[row][column] == 'C') {
            Play(0, 3); Play(1, 1);
            Play(0, 1); Play(1, 1);
            Play(0, 3); Play(1, 1);
            Play(0, 1);
        }
        if (call_name[row][column] == 'D') {
            Play(0, 3); Play(1, 1);
            Play(0, 1); Play(1, 1);
            Play(0, 1);
        }
        if (call_name[row][column] == 'E') {
            Play(0, 1);
        }
        if (call_name[row][column] == 'F') {
            Play(0, 1); Play(1, 1);
            Play(0, 3); Play(1, 1);
            Play(0, 1); Play(1, 1);
            Play(0, 1);
        }
        if (call_name[row][column] == 'G') {
            Play(0, 3); Play(1, 1);
            Play(0, 3); Play(1, 1);
            Play(0, 1);
        }
        if (call_name[row][column] == 'H') {
            Play(0, 1); Play(1, 1);
            Play(0, 1); Play(1, 1);
            Play(0, 1); Play(1, 1);
            Play(0, 1);
        }
        if (call_name[row][column] == 'I') {
            Play(0, 1); Play(1, 1);
            Play(0, 1);
        }
        if (call_name[row][column] == 'J') {
            Play(0, 1); Play(1, 1);
            Play(0, 3); Play(1, 1);
            Play(0, 3); Play(1, 1);
            Play(0, 3);
        }
        if (call_name[row][column] == 'K') {
            Play(0, 3); Play(1, 1);
            Play(0, 1); Play(1, 1);
            Play(0, 3);
        }
        if (call_name[row][column] == 'L') {
            Play(0, 1); Play(1, 1);
            Play(0, 1); Play(1, 1);
            Play(0, 3); Play(1, 1);
            Play(0, 1);
        }
        if (call_name[row][column] == 'M') {
            Play(0, 3); Play(1, 1);
            Play(0, 3);
        }
        if (call_name[row][column] == 'N') {
            Play(0, 3); Play(1, 1);
            Play(0, 1);
        }
        if (call_name[row][column] == 'O') {
            Play(0, 3); Play(1, 1);
            Play(0, 3); Play(1, 1);
            Play(0, 3); Play(1, 1);

        }
        if (call_name[row][column] == 'P') {
            Play(0, 1); Play(1, 1);
            Play(0, 3); Play(1, 1);
            Play(0, 3); Play(1, 1);
            Play(0, 1);
        }
        if (call_name[row][column] == 'Q') {
            Play(0, 3); Play(1, 1);
            Play(0, 3); Play(1, 1);
            Play(0, 1); Play(1, 1);
            Play(0, 3);
        }
        if (call_name[row][column] == 'R') {
            Play(0, 1); Play(1, 1);
            Play(0, 3); Play(1, 1);
            Play(0, 1);
        }
        if (call_name[row][column] == 'S') {
            Play(0, 1); Play(1, 1);
            Play(0, 1); Play(1, 1);
            Play(0, 1);
        }
        if (call_name[row][column] == 'T') {
            Play(0, 3);
        }
        if (call_name[row][column] == 'U') {
            Play(0, 1); Play(1, 1);
            Play(0, 1); Play(1, 1);
            Play(0, 3);
        }
        if (call_name[row][column] == 'V') {
            Play(0, 1); Play(1, 1);
            Play(0, 1); Play(1, 1);
            Play(0, 1); Play(1, 1);
            Play(0, 3);
        }
        if (call_name[row][column] == 'W') {
            Play(0, 1); Play(1, 1);
            Play(0, 3); Play(1, 1);
            Play(0, 3);
        }
        if (call_name[row][column] == 'X') {
            Play(0, 3); Play(1, 1);
            Play(0, 1); Play(1, 1);
            Play(0, 1); Play(1, 1);
            Play(0, 3);
        }
        if (call_name[row][column] == 'Y') {
            Play(0, 3); Play(1, 1);
            Play(0, 1); Play(1, 1);
            Play(0, 3); Play(1, 1);
            Play(0, 3);
        }
        if (call_name[row][column] == 'Z') {
            Play(0, 3); Play(1, 1);
            Play(0, 3); Play(1, 1);
            Play(0, 1); Play(1, 1);
            Play(0, 1);
        }
        //end alpahbet

        //Number
        if (call_name[row][column] == 0) {
            for (var s = 1; s <= 4; s++) {
                Play(0, 3); Play(1, 1);
            }
            Play(0, 3);
        }
        if (call_name[row][column] >= 1 && call_name[row][column] <= 4) {
            for (var s = 1; s <= call_name[row][column]; s++) {
                Play(0, 1); Play(1, 1);
            }
            for (var l = 1; l <= (5 - call_name[row][column]); l++) {
                Play(0, 3); Play(1, 1);
            }
            Play(0, 3);
        }
        if (call_name[row][column] == 5) {
            for (var s = 1; s <= 4; s++) {
                Play(0, 1); Play(1, 1);
            }
            Play(0, 1);
        }

        if (call_name[row][column] >= 6 && call_name[row][column] <= 9) {
            for (var s = 1; s <= (call_name[row][column] - 5); s++) {
                Play(0, 3); Play(1, 1);
            }
            for (var l = 1; l <= (5 - (call_name[row][column] - 5) - 1); l++) {
                Play(0, 1); Play(1, 1);
            }
            Play(0, 1);
        }
        if (call_name[row][column] == '/') {
            Play(0, 3); Play(1, 1);
            Play(0, 1); Play(1, 1);
            Play(0, 1); Play(1, 1);
            Play(0, 3); Play(1, 1);
            Play(0, 1);
        }
        Play(1, 3); //stop signal
    }
    turn = 0;
}

function answerCheck() {
    if (turn == 0) {
        var myAnswer = document.getElementById("Box").value.split('');
        myAnswer.push('END');

        var result = 0;
        var result_dif = new Array();
        for (i = 0; i <= call_answer.length - 1 && i <= myAnswer.length - 1; i++) {
            if (call_answer[i] == myAnswer[i]) {
                result_dif[i] = '0';
            } else {
                result_dif[i] = '1';
                result++;
            }
        }

        var Num = parseInt(document.getElementById("Result_Num").value);
        if (result == 0) {
            document.getElementById("Result_Now").value = 'R';
            document.getElementById("Result_Num").value = Num + 1;
        }
        if (result != 0) {
            document.getElementById("Result_Now").value = 'W_' + result_dif.join(',');
        }
        document.getElementById('Box').value = '';
        turn = 1;
    }
}