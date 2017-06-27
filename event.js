window.onload = function () {
    initAddEvent();
    initData();
}

function initAddEvent() {
    document.getElementById('Speed').addEventListener('change', speedChange, false);
    document.getElementById('PlayButton').addEventListener('click', cw_start, false);
    document.getElementById('PlayButton').addEventListener('click', select_signal, false);
    document.getElementById('AnswerButton').addEventListener('click', answerCheck, false);
    document.getElementById('key').addEventListener('click', keyboardButtonCheck, false);
    document.getElementById('radioButton').addEventListener('click', RadioButton_changed, false);
    // console.log('window.onload function');
}
function initData() {
    speedChange();
    loadText();
}