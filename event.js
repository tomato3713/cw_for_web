window.onload = function () {
    initAddEvent();
    initData();
}

//イベントリスナーに関数を登録する。
function initAddEvent() {
    document.getElementById('Speed').addEventListener('change', speedCheck, false);
    document.getElementById('PlayButton').addEventListener('click', function () {
        selectCallsign();
        setTimeout(
            cw_start(call_answer, document.getElementById('Speed').value)
        , 2);
    }, false);
    document.getElementById('AnswerButton').addEventListener('click', answerCheck, false);
    document.getElementById('key').addEventListener('click', keyboardButtonCheck, false);
    document.getElementById('radioButton').addEventListener('click', RadioButton_changed, false);
    // console.log('window.onload function');
}
// コールサインを格納する変数にコールサインを読み込む

function initData() {
    loadText('Basic');
        // if web audio API is able, meke the context

}