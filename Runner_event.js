//htmlが読み込まれたときに
//ボタンにイベントを登録する
window.onload = function () {
    initAddEvent();
    initData();
}

//イベントリスナーに関数を登録する。
function initAddEvent() {
  document.getElementById('Speed').addEventListener('change', speedCheck, false);
  document.getElementById('PlayButton').addEventListener('click', selectCallsign, false);
  document.getElementById('AnswerButton').addEventListener('click', answerCheck, false);
  document.getElementById('key').addEventListener('click', keyboardButtonCheck, false);
  document.getElementById('radioButton').addEventListener('click', RadioButton_changed, false);
}

// コールサインを格納する変数にコールサインを読み込む
function initData() {
    loadText('Basic');
}
