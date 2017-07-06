// this function is to ring the signal
//play(i, wpm)
// wpm :speed
//i :playOn-0, playOff 1;
// duration_time: time 1, 3, 7

//まだできていない仕事
//鳴らすタイミングを設定するようにsignaOn(), signalOff()変更する。

//[コールサイン+wpm]を受け取って、対応する符号を再生する
try {
    var SupportedAudioContext = window.AudioContext || window.webkitAudioContext;
} catch (e) {
    throw new Error('Web Audio API is not supported.');
}
var context = new SupportedAudioContext();
var gainNode;

function cw_start(call, wpm) {
    //make the ocilitator
    var oscNode = context.createOscillator();
    oscNode.frequency.value = 630;
    oscNode.type = 'sine';


    // make the ocilitator to controll volume
    gainNode = context.createGain();
    gainNode.gain.value = 0;

    // connect the speaker
    oscNode.connect(gainNode);
    gainNode.connect(context.destination);

    //鳴らす
    oscNode.start(0);

    //鳴らすシグナルのタイミングを設定する
    for (var column = 0; column <=  call.length -1; column++) {
        //alphabet
        if (call[column] == 'A') {
            signalOn(1, wpm); signalOff(1, wpm);//play short signal and stop
            signalOn(3, wpm);//play long signal
        }
        if (call[column] == 'B') {
            signalOn(3, wpm); signalOff(1, wpm);
            signalOn(1, wpm); signalOff(1, wpm);
            signalOn(1, wpm); signalOff(1, wpm);
            signalOn(1, wpm);
        }
        if (call[column] == 'C') {
            signalOn(3, wpm); signalOff(1, wpm);
            signalOn(1, wpm); signalOff(1, wpm);
            signalOn(3, wpm); signalOff(1, wpm);
            signalOn(1, wpm);
        }
        if (call[column] == 'D') {
            signalOn(3, wpm); signalOff(1, wpm);
            signalOn(1, wpm); signalOff(1, wpm);
            signalOn(1, wpm);
        }
        if (call[column] == 'E') {
            signalOn(1, wpm);
        }
        if (call[column] == 'F') {
            signalOn(1, wpm); signalOff(1, wpm);
            signalOn(1, wpm); signalOff(1, wpm);
            signalOn(3, wpm); signalOff(1, wpm);
            signalOn(1, wpm);
        }
        if (call[column] == 'G') {
            signalOn(3, wpm); signalOff(1, wpm);
            signalOn(3, wpm); signalOff(1, wpm);
            signalOn(1, wpm);
        }
        if (call[column] == 'H') {
            signalOn(1, wpm); signalOff(1, wpm);
            signalOn(1, wpm); signalOff(1, wpm);
            signalOn(1, wpm); signalOff(1, wpm);
            signalOn(1, wpm);
        }
        if (call[column] == 'I') {
            signalOn(1, wpm); signalOff(1, wpm);
            signalOn(1, wpm);
        }
        if (call[column] == 'J') {
            signalOn(1, wpm); signalOff(1, wpm);
            signalOn(3, wpm); signalOff(1, wpm);
            signalOn(3, wpm); signalOff(1, wpm);
            signalOn(3, wpm);
        }
        if (call[column] == 'K') {
            signalOn(3, wpm); signalOff(1, wpm);
            signalOn(1, wpm); signalOff(1, wpm);
            signalOn(3, wpm);
        }
        if (call[column] == 'L') {
            signalOn(1, wpm); signalOff(1, wpm);
            signalOn(3, wpm); signalOff(1, wpm);
            signalOn(1, wpm); signalOff(1, wpm);
            signalOn(1, wpm);
        }
        if (call[column] == 'M') {
            signalOn(3, wpm); signalOff(1, wpm);
            signalOn(3, wpm);
        }
        if (call[column] == 'N') {
            signalOn(3, wpm); signalOff(1, wpm);
            signalOn(1, wpm);
        }
        if (call[column] == 'O') {
            signalOn(3, wpm); signalOff(1, wpm);
            signalOn(3, wpm); signalOff(1, wpm);
            signalOn(3, wpm);

        }
        if (call[column] == 'P') {
            signalOn(1, wpm); signalOff(1, wpm);
            signalOn(3, wpm); signalOff(1, wpm);
            signalOn(3, wpm); signalOff(1, wpm);
            signalOn(1, wpm);
        }
        if (call[column] == 'Q') {
            signalOn(3, wpm); signalOff(1, wpm);
            signalOn(3, wpm); signalOff(1, wpm);
            signalOn(1, wpm); signalOff(1, wpm);
            signalOn(3, wpm);
        }
        if (call[column] == 'R') {
            signalOn(1, wpm); signalOff(1, wpm);
            signalOn(3, wpm); signalOff(1, wpm);
            signalOn(1, wpm);
        }
        if (call[column] == 'S') {
            signalOn(1, wpm); signalOff(1, wpm);
            signalOn(1, wpm); signalOff(1, wpm);
            signalOn(1, wpm);
        }
        if (call[column] == 'T') {
            signalOn(3, wpm);
        }
        if (call[column] == 'U') {
            signalOn(1, wpm); signalOff(1, wpm);
            signalOn(1, wpm); signalOff(1, wpm);
            signalOn(3, wpm);
        }
        if (call[column] == 'V') {
            signalOn(1, wpm); signalOff(1, wpm);
            signalOn(1, wpm); signalOff(1, wpm);
            signalOn(1, wpm); signalOff(1, wpm);
            signalOn(3, wpm);
        }
        if (call[column] == 'W') {
            signalOn(1, wpm); signalOff(1, wpm);
            signalOn(3, wpm); signalOff(1, wpm);
            signalOn(3, wpm);
        }
        if (call[column] == 'X') {
            signalOn(3, wpm); signalOff(1, wpm);
            signalOn(1, wpm); signalOff(1, wpm);
            signalOn(1, wpm); signalOff(1, wpm);
            signalOn(3, wpm);
        }
        if (call[column] == 'Y') {
            signalOn(3, wpm); signalOff(1, wpm);
            signalOn(1, wpm); signalOff(1, wpm);
            signalOn(3, wpm); signalOff(1, wpm);
            signalOn(3, wpm);
        }
        if (call[column] == 'Z') {
            signalOn(3, wpm); signalOff(1, wpm);
            signalOn(3, wpm); signalOff(1, wpm);
            signalOn(1, wpm); signalOff(1, wpm);
            signalOn(1, wpm);
        }
        //end alpahbet

        //Number
        if (call[column] == 0) {
            for (var s = 1; s <= 4; s++) {
                signalOn(3, wpm); signalOffal(1);
            }
            signalOn(3, wpm);
        }
        if (call[column] >= 1 && call[column] <= 4) {
            for (var s = 1; s <= call[column]; s++) {
                signalOn(1, wpm); signalOff(1, wpm);
            }
            for (var l = 1; l <= (5 - call[column]); l++) {
                signalOn(3, wpm); signalOff(1, wpm);
            }
            signalOn(3, wpm);
        }
        if (call[column] == 5) {
            for (var s = 1; s <= 4; s++) {
                signalOn(1, wpm); signalOff(1, wpm);
            }
            signalOn(1, wpm);
        }

        if (call[column] >= 6 && call[column] <= 9) {
            for (var s = 1; s <= (call[column] - 5); s++) {
                signalOn(3, wpm); signalOff(1, wpm);
            }
            for (var l = 1; l <= (5 - (call[column] - 5) - 1); l++) {
                signalOn(1, wpm); signalOff(1, wpm);
            }
            signalOn(1, wpm);
        }
        if (call[column] == '/') {
            signalOn(3, wpm); signalOff(1, wpm);
            signalOn(1, wpm); signalOff(1, wpm);
            signalOn(1, wpm); signalOff(1, wpm);
            signalOn(3, wpm); signalOff(1, wpm);
            signalOn(1, wpm);
        }
        if (call[column] == '?') {
            signalOn(1, wpm); signalOff(1, wpm);
            signalOn(1, wpm); signalOff(1, wpm);
            signalOn(3, wpm); signalOff(1, wpm);
            signalOn(3, wpm); signalOff(1, wpm);
            signalOn(1, wpm); signalOff(1, wpm);
            signalOn(1, wpm);
        }
        signalOff(3, wpm); //stop signal
    }

    oscNode.stop(0);
}

//短音なら1を受け取る。長音の場合3を受け取る。
function signalOn(duration_time, wpm) {
    // play the shorter signal
    gainNode.gain.value = 10;
    //play beep sound time
    var start_Time = new Date();
    do {
        var end_Time = new Date();
    } while ((end_Time - start_Time) < (25 / wpm) * 30 * duration_time)
    // console.log((25/wpm)*30*duration_time);
    gainNode.gain.value = 0;
}
//音と音の間隔を設定する
function signalOff(duration_time, wpm) {
    gainNode.gain.value = 0;
    //stop beep sound time
    var start_Time = new Date();
    do {
        var end_Time = new Date();
    } while ((end_Time - start_Time) < (25 / wpm) * 50 * duration_time)
    // console.log((25/wpm)*50 *duration_time);
}
