// this function is to ring the sign0;al
//play(i, wpm)
// wpm :speed
//i :playOn-0, playOff 1;
// duration_time: time 1, 3, 7

//まだできていない仕事
//鳴らすタイミングを設定するようにsignaOn(), signalOff()変更する。

//[コールサイン+wpm]を受け取って、対応する符号を再生する
//オーディオコンテキストを用意する。
try {
    var SupportedAudioContext = window.AudioContext || window.webkitAudioContext;
} catch (e) {
    throw new Error('Web Audio API is not supported.');
}
var context = new SupportedAudioContext();
var gainNode;

function cw_start(call ) {
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

    var Time = 5;
  //短点の長さを取得する。
  var signal_duration = (25 /  parseInt(document.getElementById("Speed").value) ) * 30; 
    //音量０で鳴らす
    oscNode.start(0);

    for (var column = 0; column <= call.length - 1; column++) {
        //alphabet
        if (call[column] == 'A') {
          //短点を流す予約をする。
            setTimeout( function() {gainNode.gain.value = 10 ; } , Time ); 
          Time = Time + signal_duration;
            setTimeout( function() {gainNode.gain.value = 0 ; } , Time);
            Time = Time  + signal_duration;

          //長点を流す予約をする
          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration * 3;
         setTimeout( function() {gainNode.gain.value = 0; }, Time);
        }
        if (call[column] == 'B') {
          setTimeout( function() {gainNode.gain.value = 10; } , Time );
          Time = Time + signal_duration * 3;
          setTimeout( function() {gainNode.gain.value = 0; } , Time );
            Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10; }, Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0; }, Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10;}, Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0;}, Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10;}, Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0;}, Time);
          Time = Time + signal_duration;
        }
        if (call[column] == 'C') {
          setTimeout( function() {gainNode.gain.value = 10;}, Time);
          Time = Time + signal_duration * 3;
          setTimeout( function() {gainNode.gain.value = 0;}, Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10;} , Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0;}, Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10;}, Time);
          Time = Time + signal_duration * 3;
          setTimeout( function() {gainNode.gain.value = 0;}, Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10;}, Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0;}, Time);
          Time = Time + signal_duration;

        }
        if (call[column] == 'D') {
          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration * 3;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;
        }

        if (call[column] == 'E')  {
          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;
        }
        if (call[column] == 'F') {
          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration * 3;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

        }
        if (call[column] == 'G') {
          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration * 3;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration * 3;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;
        }
        if (call[column] == 'H') {
          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

        }
        if (call[column] == 'I') {
          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

        }
        if (call[column] == 'J') {
          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration * 3;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration * 3;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration * 3;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

        }
        if (call[column] == 'K') {
          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration * 3;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration * 3;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

        }
        if (call[column] == 'L') {
          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration * 3;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

        }
        if (call[column] == 'M') {

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration * 3;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration * 3;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

        }
        if (call[column] == 'N') {

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration * 3;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

        }
        if (call[column] == 'O') {

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration * 3;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration * 3;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;


          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration * 3;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;
        }
        if (call[column] == 'P') {

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration * 3;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration * 3;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

        }
        if (call[column] == 'Q') {

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration * 3;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration * 3;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;


          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration * 3;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration * 3;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

        }
        if (call[column] == 'R') {

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;
 

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration * 3;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

        }
        if (call[column] == 'S') {

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;


          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;


          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

        }
        if (call[column] == 'T') {

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

        }
        if (call[column] == 'U') {

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;



          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration * 3;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

        }
        if (call[column] == 'V') {

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;



          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration * 3;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

        }
        if (call[column] == 'W') {


          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration * 3;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration * 3;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

        }
        if (call[column] == 'X') {


          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration * 3;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;


          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;


          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration * 3;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

        }
        if (call[column] == 'Y') {

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration * 3;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;


          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration * 3;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;


          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration * 3;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;


        }
        if (call[column] == 'Z') {

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration * 3;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;


          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration * 3;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;

          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;
        }
        //end alpahbet

        //Number
      //0の時は頂点を5回鳴らす
        if (call[column] == 0) {
            for (var s = 1; s <= 5; s++) {
          setTimeout( function() {gainNode.gain.value = 10; } , Time);
          Time = Time + signal_duration * 3;
          setTimeout( function() {gainNode.gain.value = 0; } , Time);
          Time = Time + signal_duration;
            }
        }
          //1~4の時
        if (call[column] >= 1 && call[column] <= 4) {
            for (var s = 1; s <= call[column]; s++) {
              setTimeout( function() {gainNode.gain.value = 10; } , Time);
              Time = Time + signal_duration;
              setTimeout( function() {gainNode.gain.value = 0; } , Time);
              Time = Time + signal_duration;
            }
            for (var l = 1; l <= (5 - call[column]); l++) {
              setTimeout( function() {gainNode.gain.value = 10; } , Time);
              Time = Time + signal_duration * 3;  
              setTimeout( function() {gainNode.gain.value = 0; } , Time);
              Time = Time + signal_duration;
            }
        }
        if (call[column] == 5) {
            for (var s = 1; s <= 5; s++) {
              setTimeout( function() {gainNode.gain.value = 10; } , Time);
              Time = Time + signal_duration;  
              setTimeout( function() {gainNode.gain.value = 0; } , Time);
              Time = Time + signal_duration;
            }
        }

        if (call[column] >= 6 && call[column] <= 9) {
            for (var s = 1; s <= (call[column] - 5); s++) {
              setTimeout( function() {gainNode.gain.value = 10; } , Time);
              Time = Time + signal_duration * 3;
              setTimeout( function() {gainNode.gain.value = 0; } , Time);
              Time = Time + signal_duration;
            }
            for (var l = 1; l <= (5 - (call[column] - 5) - 1); l++) {
              setTimeout( function() {gainNode.gain.value = 10; } , Time);
              Time = Time + signal_duration;
              setTimeout( function() {gainNode.gain.value = 0; } , Time);
              Time = Time + signal_duration;
            }
        }
        if (call[column] == '/') {
              setTimeout( function() {gainNode.gain.value = 10; } , Time);
              Time = Time + signal_duration * 3;
              setTimeout( function() {gainNode.gain.value = 0; } , Time);
              Time = Time + signal_duration;

              setTimeout( function() {gainNode.gain.value = 10; } , Time);
              Time = Time + signal_duration;
              setTimeout( function() {gainNode.gain.value = 0; } , Time);
              Time = Time + signal_duration;

              setTimeout( function() {gainNode.gain.value = 10; } , Time);
              Time = Time + signal_duration;
              setTimeout( function() {gainNode.gain.value = 0; } , Time);
              Time = Time + signal_duration;

              setTimeout( function() {gainNode.gain.value = 10; } , Time);
              Time = Time + signal_duration * 3;
              setTimeout( function() {gainNode.gain.value = 0; } , Time);
              Time = Time + signal_duration;

              setTimeout( function() {gainNode.gain.value = 10; } , Time);
              Time = Time + signal_duration;
              setTimeout( function() {gainNode.gain.value = 0; } , Time);
              Time = Time + signal_duration;
        }
        if (call[column] == '?') {
              setTimeout( function() {gainNode.gain.value = 10; } , Time);
              Time = Time + signal_duration;
              setTimeout( function() {gainNode.gain.value = 0; } , Time);
              Time = Time + signal_duration;

              setTimeout( function() {gainNode.gain.value = 10; } , Time);
              Time = Time + signal_duration;
              setTimeout( function() {gainNode.gain.value = 0; } , Time);
              Time = Time + signal_duration;

              setTimeout( function() {gainNode.gain.value = 10; } , Time);
              Time = Time + signal_duration * 3;
              setTimeout( function() {gainNode.gain.value = 0; } , Time);
              Time = Time + signal_duration;

              setTimeout( function() {gainNode.gain.value = 10; } , Time);
              Time = Time + signal_duration * 3;
              setTimeout( function() {gainNode.gain.value = 0; } , Time);
              Time = Time + signal_duration;

              setTimeout( function() {gainNode.gain.value = 10; } , Time);
              Time = Time + signal_duration;
              setTimeout( function() {gainNode.gain.value = 0; } , Time);
              Time = Time + signal_duration;

              setTimeout( function() {gainNode.gain.value = 10; } , Time);
              Time = Time + signal_duration;
              setTimeout( function() {gainNode.gain.value = 0; } , Time);
              Time = Time + signal_duration;
        }
    }
  setTimeout(function() { oscNode.stop(); }, Time);
}
