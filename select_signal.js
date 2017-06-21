//call the function play()
//by call_name which registered alphabet and number
var call_name = new Array;
var call_answer = new Array;
var turn = 1;
function select_signal() {
    var row = Math.floor(Math.random() * (call_name.length));
    for (var column = 0; call_name[row][column] != 'END'; column++) {
        //alphabet
        if (call_name[row][column] == 'A') {
            signalOn(1); signalOff(1);//play short signal and stop
            signalOn(3);//play long signal
        }
        if (call_name[row][column] == 'B') {
            signalOn(3); signalOff(1);
            signalOn(1); signalOff(1);
            signalOn(1); signalOff(1);
            signalOn(1);
        }
        if (call_name[row][column] == 'C') {
            signalOn(3); signalOff(1);
            signalOn(1); signalOff(1);
            signalOn(3); signalOff(1);
            signalOn(1);
        }
        if (call_name[row][column] == 'D') {
            signalOn(3); signalOff(1);
            signalOn(1); signalOff(1);
            signalOn(1);
        }
        if (call_name[row][column] == 'E') {
            signalOn(1);
        }
        if (call_name[row][column] == 'F') {
            signalOn(1); signalOff(1);
            signalOn(3); signalOff(1);
            signalOn(1); signalOff(1);
            signalOn(1);
        }
        if (call_name[row][column] == 'G') {
            signalOn(3); signalOff(1);
            signalOn(3); signalOff(1);
            signalOn(1);
        }
        if (call_name[row][column] == 'H') {
            signalOn(1); signalOff(1);
            signalOn(1); signalOff(1);
            signalOn(1); signalOff(1);
            signalOn(1);
        }
        if (call_name[row][column] == 'I') {
            signalOn(1); signalOff(1, 1);
            signalOn(1);
        }
        if (call_name[row][column] == 'J') {
            signalOn(1); signalOff(1);
            signalOn(3); signalOff(1);
            signalOn(3); signalOff(1);
            signalOn(3);
        }
        if (call_name[row][column] == 'K') {
            signalOn(3); signalOff(1);
            signalOn(1); signalOff(1);
            signalOn(3);
        }
        if (call_name[row][column] == 'L') {
            signalOn(1); signalOff(1);
            signalOn(1); signalOff(1);
            signalOn(3); signalOff(1);
            signalOn(1);
        }
        if (call_name[row][column] == 'M') {
            signalOn(3); signalOff(1);
            signalOn(3);
        }
        if (call_name[row][column] == 'N') {
            signalOn(3); signalOff(1);
            signalOn(1);
        }
        if (call_name[row][column] == 'O') {
            signalOn(3); signalOff(1);
            signalOn(3); signalOff(1);
            signalOn(3);

        }
        if (call_name[row][column] == 'P') {
            signalOn(1); signalOff(1);
            signalOn(3); signalOff(1);
            signalOn(3); signalOff(1);
            signalOn(1);
        }
        if (call_name[row][column] == 'Q') {
            signalOn(3); signalOff(1);
            signalOn(3); signalOff(1);
            signalOn(1); signalOff(1);
            signalOn(3);
        }
        if (call_name[row][column] == 'R') {
            signalOn(1); signalOff(1);
            signalOn(3); signalOff(1);
            signalOn(1);
        }
        if (call_name[row][column] == 'S') {
            signalOn(1); signalOff(1);
            signalOn(1); signalOff(1);
            signalOn(1);
        }
        if (call_name[row][column] == 'T') {
            signalOn(3);
        }
        if (call_name[row][column] == 'U') {
            signalOn(1); signalOff(1);
            signalOn(1); signalOff(1);
            signalOn(3);
        }
        if (call_name[row][column] == 'V') {
            signalOn(1); signalOff(1);
            signalOn(1); signalOff(1);
            signalOn(1); signalOff(1);
            signalOn(3);
        }
        if (call_name[row][column] == 'W') {
            signalOn(1); signalOff(1);
            signalOn(3); signalOff(1);
            signalOn(3);
        }
        if (call_name[row][column] == 'X') {
            signalOn(3); signalOff(1);
            signalOn(1); signalOff(1);
            signalOn(1); signalOff(1);
            signalOn(3);
        }
        if (call_name[row][column] == 'Y') {
            signalOn(3); signalOff(1);
            signalOn(1); signalOff(1);
            signalOn(3); signalOff(1);
            signalOn(3);
        }
        if (call_name[row][column] == 'Z') {
            signalOn(3); signalOff(1);
            signalOn(3); signalOff(1);
            signalOn(1); signalOff(1);
            signalOn(1);
        }
        //end alpahbet

        //Number
        if (call_name[row][column] == 0) {
            for (var s = 1; s <= 4; s++) {
                signalOn(3); signalOffal(1);
            }
            signalOn(3);
        }
        if (call_name[row][column] >= 1 && call_name[row][column] <= 4) {
            for (var s = 1; s <= call_name[row][column]; s++) {
                signalOn(1); signalOff(1, 1);
            }
            for (var l = 1; l <= (5 - call_name[row][column]); l++) {
                signalOn(3); signalOff(1, 1);
            }
            signalOn(3);
        }
        if (call_name[row][column] == 5) {
            for (var s = 1; s <= 4; s++) {
                signalOn(1); signalOff(1);
            }
            signalOn(1);
        }

        if (call_name[row][column] >= 6 && call_name[row][column] <= 9) {
            for (var s = 1; s <= (call_name[row][column] - 5); s++) {
                signalOn(3); signalOff(1);
            }
            for (var l = 1; l <= (5 - (call_name[row][column] - 5) - 1); l++) {
                signalOn(1); signalOff(1);
            }
            signalOn(1);
        }
        if (call_name[row][column] == '/') {
            signalOn(3); signalOff(1);
            signalOn(1); signalOff(1);
            signalOn(1); signalOff(1);
            signalOn(3); signalOff(1);
            signalOn(1);
        }
        signalOff(3); //stop signal
    }
    turn = 0;
    for (var i = 0; i <= call_name[row].length - 2; i++) {
        call_answer[i] = call_name[row][i];
    }
}

function answerCheck() {
    if (turn == 0) {
        var myAnswer = document.getElementById("Box").value.split('');

        var result = 0;
        var result_dif = new Array();
        for (i = 0; i <= call_answer.length - 1 && i <= myAnswer.length - 1; i++) {
            if (call_answer[i] == myAnswer[i]) {
                result_dif[i] = 'R';
            } else {
                result_dif[i] = 'W';
                result++;
            }
        }

        var right_counter = parseInt(document.getElementById("RightCount").value);
        var wrong_counter = parseInt(document.getElementById("WrongCount").value);
        if (result == 0) {
            document.getElementById("Result_Now").value = 'R_' + result_dif.join(',');
            document.getElementById("RightCount").value = right_counter + 1;
        }
        if (result != 0) {
            document.getElementById("Result_Now").value = 'W_' + result_dif.join(',');
            document.getElementById("WrongCount").value = wrong_counter + 1;
        }
        document.getElementById('Box').value = '';
        turn = 1;

        var history = new String();
        history = document.getElementById('History').value;
        history += '\n';
        history += call_answer.join('') + '-' + myAnswer.join('');
        document.getElementById('History').value = history;

    }
}