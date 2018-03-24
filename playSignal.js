//オーディオコンテキストを用意する。
try {
  let SupportedAudioContext = window.AudioContext || window.webkitAudioContext;
} catch (e) {
  throw new Error('Web Audio API is not supported.');
}

let context = new window.AudioContext || window.webkitAudioContext;
let gainNode;

const cw_start = (call) => {
	"use strict";
	//再生する文字が入った一次元配列を受け取って、
	//その配列にある文字を前から順にWeb Audio APIを用いて
	//再生していく
	//最盛タイミングはsetTimeoutを用いて行っているため
	//ミリ秒の単位で設定されるがブラウザによって
	//最盛タイミングがずれる可能性がある
	//この関数は何も返さない
	//
	//cwTutor for web, cw runner for web の用法で使用される

	//make the ocilitator
	let oscNode = context.createOscillator();
	oscNode.frequency.value = 630;
	oscNode.type = 'sine';

	// make the ocilitator to controll volume
	gainNode = context.createGain();
	gainNode.gain.value = 0;

	// connect the speaker
	oscNode.connect(gainNode);
	gainNode.connect(context.destination);

	//鳴らすシグナルのタイミングを設定する
	let Time = 10;
	//短点の長さを取得する。
	const signal_duration = (25 /  parseInt(document.getElementById("Speed").value) ) * 50;
	//音量０で鳴らす
	oscNode.start(0);

	for (let column = 0; column <= call.length - 1; column++) {
		//alphabet
		if (call[column] == 'A') {
			//短点を流す予約をする。
			setTimeout( () => {gainNode.gain.value = 10 ; } , Time );
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
			Time = Time  + signal_duration;

			//長点を流す予約をする
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
		}

		if (call[column] == 'B') {
			setTimeout( () => {gainNode.gain.value = 10; } , Time );
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time );
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; }, Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; }, Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10;}, Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0;}, Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10;}, Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0;}, Time);
		}

		if (call[column] == 'C') {
			setTimeout( () => {gainNode.gain.value = 10;}, Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0;}, Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10;} , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0;}, Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10;}, Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0;}, Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10;}, Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0;}, Time);
		}

		if (call[column] == 'D') {
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => { gainNode.gain.value = 0 }, Time);
		}

		if (call[column] == 'E')  {
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if (call[column] == 'F') {
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if (call[column] == 'G') {
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if (call[column] == 'H') {
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if (call[column] == 'I') {
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if (call[column] == 'J') {
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if (call[column] == 'K') {
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if (call[column] == 'L') {
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if (call[column] == 'M') {
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if (call[column] == 'N') {
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if (call[column] == 'O') {
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if (call[column] == 'P') {
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if (call[column] == 'Q') {
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;
		}

		if (call[column] == 'R') {
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if (call[column] == 'S') {
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if (call[column] == 'T') {
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if (call[column] == 'U') {
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if (call[column] == 'V') {
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if (call[column] == 'W') {
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if (call[column] == 'X') {
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if (call[column] == 'Y') {
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if (call[column] == 'Z') {
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}
		//end alpahbet

		//Number
		//0の時は頂点を5回鳴らす
		if (call[column] == 0) {
			for (let s = 1; s <= 4; s++) {
				setTimeout( () => {gainNode.gain.value = 10; } , Time);
				Time = Time + signal_duration * 3;
				setTimeout( () => {gainNode.gain.value = 0; } , Time);
				Time = Time + signal_duration;
			}
			setTimeout(() => { gainNode.gain.value = 10 }, Time);
			Time = Time + signal_duration *3;
			setTimeout(() => { gainNode.gain.value = 0 }, Time);
		}

		//1~4の時
		if (call[column] >= 1 && call[column] <= 4) {
			for (let s = 1; s <= call[column]; s++) {
				setTimeout( () => {gainNode.gain.value = 10; } , Time);
				Time = Time + signal_duration;
				setTimeout( () => {gainNode.gain.value = 0; } , Time);
				Time = Time + signal_duration;
			}

			for (let l = 1; l <= (5 - call[column] - 1); l++) {
				setTimeout( () => {gainNode.gain.value = 10; } , Time);
				Time = Time + signal_duration * 3;
				setTimeout( () => {gainNode.gain.value = 0; } , Time);
				Time = Time + signal_duration;
			}
			setTimeout(() => { gainNode.gain.value = 10 }, Time);
			Time = Time + signal_duration * 3;
			setTimeout(() => {  gainNode.gain.value = 0 }, Time);
		}

		if (call[column] == 5) {
			for (let s = 1; s <= 4; s++) {
				setTimeout( () => {gainNode.gain.value = 10; } , Time);
				Time = Time + signal_duration;
				setTimeout( () => {gainNode.gain.value = 0; } , Time);
				Time = Time + signal_duration;
			}

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if (call[column] >= 6 && call[column] <= 9) {
			for (let s = 1; s <= (call[column] - 5); s++) {
				setTimeout( () => {gainNode.gain.value = 10; } , Time);
				Time = Time + signal_duration * 3;
				setTimeout( () => {gainNode.gain.value = 0; } , Time);
				Time = Time + signal_duration;
			}
			for (let l = 1; l <= (5 - (call[column] - 5) - 1); l++) {
				setTimeout( () => {gainNode.gain.value = 10; } , Time);
				Time = Time + signal_duration;
				setTimeout( () => {gainNode.gain.value = 0; } , Time);
				Time = Time + signal_duration;
			}
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if (call[column] == '/') {
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if (call[column] == '?') {
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		//和文
		if (call[column] == 'あ') {
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if(call[column] == 'い'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if(call[column] == 'う'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if(call[column] == 'え'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if(call[column] == 'お'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if(call[column] == 'か'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if(call[column] == 'き'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if(call[column] == 'く'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if(call[column] == 'け'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if(call[column] == 'こ'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if(call[column] == 'さ'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
		}

		if(call[column] == 'し'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
		}

		if(call[column] == 'す'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
		}

		if(call[column] == 'せ'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
		}

		if(call[column] == 'そ'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
		}

		if(call[column] == 'た'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
		}

		if(call[column] == 'ち'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
		}

		if(call[column] == 'つ'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
		}

		if(call[column] == 'て'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
		}

		if(call[column] == 'と'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
		}

		if(call[column] == 'な') {
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if(call[column] == 'に'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if(call[column] == 'ぬ'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if(call[column] == 'ね'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if(call[column] == 'の'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if(call[column] == 'は'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0 ; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if(call[column] == 'ひ'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if(call[column] == 'ほ'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if(call[column] == 'ま'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if(call[column] == 'み'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if(call[column] == 'む'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if(call[column] == 'め'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if(call[column] == 'も'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if(call[column] == 'や'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout(() => { gainNode.gain.value = 0 }, Time);
		}

		if(call[column] == 'ゆ'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout(() => { gainNode.gain.value = 0 }, Time);
		}

		if(call[column] == 'よ'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout(() => { gainNode.gain.value = 0 }, Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout(() => { gainNode.gain.value = 0 }, Time);
		}

		if(call[column] == 'ら'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout(() => { gainNode.gain.value = 0 }, Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout(() => { gainNode.gain.value = 0 }, Time);
			Time = Time + signal_duration;

			setTimeout(() => { gainNode.gain.value = 10 }, Time);
			Time = Time + signal_duration;
			setTimeout(() => { gainNode.gain.value = 0 }, Time);
		}

		if(call[column] == 'り'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout(() => { gainNode.gain.value = 0 }, Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout(() => { gainNode.gain.value = 0 }, Time);
			Time = Time + signal_duration;

			setTimeout(() => { gainNode.gain.value = 10 }, Time);
			Time = Time + signal_duration;
			setTimeout(() => { gainNode.gain.value = 0 }, Time);
		}

		if(call[column] == 'る'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout(() => { gainNode.gain.value = 0 }, Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout(() => { gainNode.gain.value = 0 }, Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout(() => { gainNode.gain.value = 0 }, Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout(() => { gainNode.gain.value = 0 }, Time);
			Time = Time + signal_duration;

			setTimeout(() => { gainNode.gain.value = 10 }, Time);
			Time = Time + signal_duration;
			setTimeout(() => { gainNode.gain.value = 0 }, Time);
		}

		if(call[column] == 'れ'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout(() => { gainNode.gain.value = 0 }, Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout(() => { gainNode.gain.value = 0 }, Time);
			Time = Time + signal_duration;

			setTimeout(() => { gainNode.gain.value = 10 }, Time);
			Time = Time + signal_duration * 3;
			setTimeout(() => { gainNode.gain.value = 0 }, Time);
		}

		if(call[column] == 'ろ'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if(call[column] == 'わ'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if(call[column] == 'を'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if(call[column] == 'ん'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if(call[column] == '゛'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if(call[column] == '゜'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if(call[column] == 'ー'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if(call[column] == '('){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		if(call[column] == ')'){
			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration * 3;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
			Time = Time + signal_duration;

			setTimeout( () => {gainNode.gain.value = 10; } , Time);
			Time = Time + signal_duration;
			setTimeout( () => {gainNode.gain.value = 0; } , Time);
		}

		//符号と符号の間の空白短点三個分
		Time = Time + signal_duration * 3;
	}
	//再生終了
	setTimeout(() => { oscNode.stop(); }, Time);
}
