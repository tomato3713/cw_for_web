window.onload = function () {
    initAddEvent();
    initData();
}

function initAddEvent() {
    document.getElementById('Speed').addEventListener('change', speedChange, false);
    document.getElementById('PlayButton').addEventListener('click', cw_start, false);
    document.getElementById('PlayButton').addEventListener('click', select_signal, false);
    document.getElementById('AnswerButton').addEventListener('click', answerCheck, false);

    //for computer, not mobile
    if (navigator.userAgent.indexOf('iPhone') > 0 ||
    navigator.userAgent.indexOf('iPad') > 0 ||
    navigator.userAgent.indexOf('iPod') > 0 ||
    navigator.userAgent.indexOf('Android') > 0 ||
    navigator.userAgent.indexOf('Windows Phone')) {
//スマートフォン時に実行したいjs
}else {
    document.addEventListener('keydown', keydownAddEventFunc, false);
}

    // console.log('window.onload function');
}
function initData() {
    speedChange();
    loadText();
}