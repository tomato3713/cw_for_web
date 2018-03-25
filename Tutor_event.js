//イベントリスナーに関数を登録する。
const initAddEvent = () => {
	document.getElementById('Speed').addEventListener('change', speedCheck, false);
	document.getElementById('PlayButton').addEventListener('click', play_all , false);
	document.getElementById('key').addEventListener('click', keyboardButtonCheck, false);
}

initAddEvent();
