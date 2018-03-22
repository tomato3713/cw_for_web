window.onload = function () {
    initAddEvent();
}

//イベントリスナーに関数を登録する。
const initAddEvent = () => {
    document.getElementById('Speed').addEventListener('change', speedCheck, false);
    document.getElementById('PlayButton').addEventListener('click', play_all , false);
    document.getElementById('key').addEventListener('click', keyboardButtonCheck, false);
  //テキストが入力されるごとに再生する。
    document.getElementById('key').addEventListener('click', successivePlay, false);
}
