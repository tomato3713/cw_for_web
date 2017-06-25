// this function is to ring the signal
//play(i, wpm)
// wpm :speed
//i :playOn-0, playOff 1;
// duration_time: time 1, 3, 7

// Web Audio APIが使えるか確認しつつ、contextをつくる
var wpm;
var SupportedAudioContext;

var context;
var oscNode;
var gainNode;

function cw_start() {
try {
  SupportedAudioContext = window.AudioContext || window.webkitAudioContext;
} catch (e) {
  throw new Error('Web Audio API is not supported.');
}
context = new SupportedAudioContext();

// オシレーターをつくる
oscNode = context.createOscillator();
oscNode.frequency.value = 630;
oscNode.type = 'sine';

// 音量調節用のnodeを作成
gainNode = context.createGain();
gainNode.gain.value = 0;

// もろもろつなげる
oscNode.connect(gainNode);
gainNode.connect(context.destination);

  oscNode.start(0);
  //remove event cw_start()
  document.getElementById('PlayButton').removeEventListener('click', cw_start);
}

//signal short signal:duration_time = 1, long signal:duration_time=3
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
//between signal.
function signalOff(duration_time) {
  gainNode.gain.value = 0;
  //stop beep sound time
  var start_Time = new Date();
  do {
    var end_Time = new Date();
  } while ((end_Time - start_Time) < (25 / wpm) * 50 * duration_time)
  // console.log((25/wpm)*50 *duration_time);
}

function isNumber(value) {
  var result = Boolean(false);
  if (value || value === 0) {
    var typeValue = typeof (value);
    if (typeValue.match(/^(number|string)$/) && value !== NaN) {
      result = true;
    }
  }
  return result;
}

function speedChange() {
  inputLine = document.getElementById('Speed').value;
  if (isNumber(inputLine)) {
    wpm = inputLine;
    console.log('wpm changed');
  } else {
    //write the textbox.
    document.getElementById('Speed').value = wpm;
  }
}


function answerCheck() {
  if (turn == 0) {
    //get the user's answer
    var myAnswer = document.getElementById("Box").value.split('');


    var match_result = 0;
    var result_dif = new Array();
    for (i = 0; i <= call_answer.length - 1 && i <= myAnswer.length - 1; i++) {
      //check answer
      if (call_answer[i] == myAnswer[i].toUpperCase() ) {
        result_dif[i] = 'R';//right
      } else {
        result_dif[i] = 'W';//wrong
        match_result++;
      }
    }

    var right_counter = parseInt(document.getElementById("RightCount").value);
    var wrong_counter = parseInt(document.getElementById("WrongCount").value);
    if (match_result == 0) {
      document.getElementById("Result_Now").value = 'R_' + result_dif.join(',');
      document.getElementById("RightCount").value = right_counter + 1;
    }
    if (match_result != 0) {
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