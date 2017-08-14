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


    //鳴らすシグナルのタイミングを設定する

    var nTime = context.currentTime;

    //音量０で鳴らす
    oscNode.start(0);
    // oscNode.setValueAtTime(0, nTime);

    for (var column = 0; column <= call.length - 1; column++) {
        //alphabet
        if (call[column] == 'A') {
            nTime = signalOn(1, wpm, nTime); nTime = signalOff(1, wpm, nTime);//play short signal and stop
            nTime = signalOn(3, wpm.nTime);//play long signal
        }
        if (call[column] == 'B') {
            nTime = signalOn(3, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(1, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(1, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(1, wpm, nTime);
        }
        if (call[column] == 'C') {
            nTime = signalOn(3, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(1, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(3, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(1, wpm, nTime);
        }
        if (call[column] == 'D') {
            nTime = signalOn(3, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(1, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(1, wpm, nTime);
        }
        if (call[column] == 'E') {
            nTime = signalOn(1, wpm, nTime);
        }
        if (call[column] == 'F') {
            nTime = signalOn(1, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(1, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(3, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(1, wpm, nTime);
        }
        if (call[column] == 'G') {
            nTime = signalOn(3, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(3, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(1, wpm, nTime);
        }
        if (call[column] == 'H') {
            nTime = signalOn(1, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(1, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(1, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(1, wpm, nTime);
        }
        if (call[column] == 'I') {
            nTime = signalOn(1, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(1, wpm, nTime);
        }
        if (call[column] == 'J') {
            nTime = signalOn(1, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(3, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(3, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(3, wpm, nTime);
        }
        if (call[column] == 'K') {
            nTime = signalOn(3, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(1, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(3, wpm, nTime);
        }
        if (call[column] == 'L') {
            nTime = signalOn(1, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(3, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(1, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(1, wpm, nTime);
        }
        if (call[column] == 'M') {
            nTime = signalOn(3, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(3, wpm, nTime);
        }
        if (call[column] == 'N') {
            nTime = signalOn(3, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(1, wpm, nTime);
        }
        if (call[column] == 'O') {
            nTime = signalOn(3, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(3, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(3, wpm, nTime);

        }
        if (call[column] == 'P') {
            nTime = signalOn(1, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(3, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(3, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(1, wpm, nTime);
        }
        if (call[column] == 'Q') {
            nTime = signalOn(3, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(3, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(1, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(3, wpm, nTime);
        }
        if (call[column] == 'R') {
            nTime = signalOn(1, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(3, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(1, wpm, nTime);
        }
        if (call[column] == 'S') {
            nTime = signalOn(1, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(1, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(1, wpm, nTime);
        }
        if (call[column] == 'T') {
            nTime = signalOn(3, wpm, nTime);
        }
        if (call[column] == 'U') {
            nTime = signalOn(1, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(1, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(3, wpm, nTime);
        }
        if (call[column] == 'V') {
            nTime = signalOn(1, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(1, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(1, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(3, wpm, nTime);
        }
        if (call[column] == 'W') {
            nTime = signalOn(1, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(3, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(3, wpm, nTime);
        }
        if (call[column] == 'X') {
            nTime = signalOn(3, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(1, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(1, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(3, wpm, nTime);
        }
        if (call[column] == 'Y') {
            nTime = signalOn(3, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(1, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(3, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(3, wpm, nTime);
        }
        if (call[column] == 'Z') {
            nTime = signalOn(3, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(3, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(1, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(1, wpm, nTime);
        }
        //end alpahbet

        //Number
        if (call[column] == 0) {
            for (var s = 1; s <= 4; s++) {
                nTime = signalOn(3, wpm, nTime); signalOffal(1);
            }
            nTime = signalOn(3, wpm, nTime);
        }
        if (call[column] >= 1 && call[column] <= 4) {
            for (var s = 1; s <= call[column]; s++) {
                nTime = signalOn(1, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            }
            for (var l = 1; l <= (5 - call[column]); l++) {
                nTime = signalOn(3, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            }
            nTime = signalOn(3, wpm, nTime);
        }
        if (call[column] == 5) {
            for (var s = 1; s <= 4; s++) {
                nTime = signalOn(1, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            }
            nTime = signalOn(1, wpm, nTime);
        }

        if (call[column] >= 6 && call[column] <= 9) {
            for (var s = 1; s <= (call[column] - 5); s++) {
                nTime = signalOn(3, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            }
            for (var l = 1; l <= (5 - (call[column] - 5) - 1); l++) {
                nTime = signalOn(1, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            }
            nTime = signalOn(1, wpm, nTime);
        }
        if (call[column] == '/') {
            nTime = signalOn(3, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(1, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(1, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(3, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(1, wpm, nTime);
        }
        if (call[column] == '?') {
            nTime = signalOn(1, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(1, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(3, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(3, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(1, wpm, nTime); nTime = signalOff(1, wpm, nTime);
            nTime = signalOn(1, wpm, nTime);
        }
        signalOff(3, wpm); //stop signal
    }

    oscNode.stop(0);
}

//短音なら1を受け取る。長音の場合3を受け取る。
function signalOn(duration_time, wpm, nTime) {

    gainNode.gain.setValueAtTime(10, nTime);
    gainNode.gain.setValueAtTime(0, nTime + (25 / wpm) * 30 * duration_time);
    return nTime + (25 / wpm) * 30 * duration_time;
}
//音と音の間隔を設定する
function signalOff(duration_time, wpm, nTime) {

    gainNode.gain.setValueAtTime(0, nTime);
    gainNode.gain.setValueAtTime(10, nTime + (25 / wpm) * 50 * duration_time);
    return nTime + (25 / wpm) * 50 * duration_time;
}
