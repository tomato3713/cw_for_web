//call the function play()
//by call_name which registered alphabet and number
var call_name = new Array;
var call_answer = new Array;
var turn = 1;//flag of answercheck() able, 答えのターン:0 disable:1

function selectCallsign() {
    var row = Math.floor(Math.random() * (call_name.length));

    turn = 0;

    //前の答えを消去する。
    call_answer.splice(call_answer.length - 1, call_answer.length);

    //call_name[row] = ['---call---', 'END']
    //現在の答えをcall_nameからENDを除いてcall_answerに代入する.
    for (var i = 0; i <= call_name[row].length - 2; i++) {
        call_answer[i] = call_name[row][i];
    }
}

// 数字ならtrue,
  // それ以外はfalse
// を返す。
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

function speedCheck() {
  inputLine = document.getElementById('Speed').value;
  //入力された値が適正か判定する。
  //数値でない場合、Speedのvalueに元の値を代入する。
  if (!(isNumber(inputLine))) {
    document.getElementById('Speed').value = wpm;
  }
}


// ユーザーの回答が正しいか判断する。
function answerCheck() {
  if (turn == 0) {
    //get the user's answer
    var myAnswer = document.getElementById("Box").value.split('');

    var match_result = 0;
    var result_dif = new Array();
    for (i = 0; i <= call_answer.length - 1 && i <= myAnswer.length - 1; i++) {
      //check answer
      // 答えと回答を比較する。
      if (call_answer[i] == myAnswer[i].toUpperCase()) {
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


// 過去の回答の記録に現在の回答を追加する。
    var history = new String();
    history = document.getElementById('History').value;
    history += '\n';
    history += call_answer.join('') + '-' + myAnswer.join('');
    document.getElementById('History').value = history;

  }
}