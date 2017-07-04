// this function is to ring the signal
//play(i, wpm)
// wpm :speed
//i :playOn-0, playOff 1;
// duration_time: time 1, 3, 7

//まだできていない仕事
//鳴らすタイミングを設定するようにsignaOn(), signalOff()変更する。

    // if web audio API is able, meke the context
    try {
       var SupportedAudioContext = window.AudioContext || window.webkitAudioContext;
    } catch (e) {
        throw new Error('Web Audio API is not supported.');
    }
    var context = new SupportedAudioContext();

//コールサインを受け取って、対応する符号を再生する
function cw_start() {
    //make the ocilitator
    var oscNode = context.createOscillator();
    oscNode.frequency.value = 630;
    oscNode.type = 'sine';

    // make the ocilitator to controll volume
    var gainNode = context.createGain();
    gainNode.gain.value = 10;

    // connect the speaker
    oscNode.connect(gainNode);
    gainNode.connect(context.destination);


    //鳴らすシグナルのタイミングを設定する
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
            signalOn(1); signalOff(1);
            signalOn(3); signalOff(1);
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
            signalOn(3); signalOff(1);
            signalOn(1); signalOff(1);
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

    //鳴らす
    oscNode.start(0);
    oscNode.stop(0);
}

//短音なら1を受け取る。調音の場合3を受け取る。
function signalOn(duration_time) {
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
function signalOff(duration_time) {
    gainNode.gain.value = 0;
    //stop beep sound time
    var start_Time = new Date();
    do {
        var end_Time = new Date();
    } while ((end_Time - start_Time) < (25 / wpm) * 50 * duration_time)
    // console.log((25/wpm)*50 *duration_time);
}
