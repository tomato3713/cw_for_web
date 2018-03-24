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
	oscNode.frequency.value = 550;
	oscNode.type = 'sine';

	// make the ocilitator to controll volume
	gainNode = context.createGain();
	gainNode.gain.value = 0;

	// connect the speaker
	oscNode.connect(gainNode);
	gainNode.connect(context.destination);

	let time = context.currentTime;

	//短点の長さを取得する。
	const signal_duration = (parseInt(document.getElementById("Speed").value) / 500) ;
	//音量０で鳴らす
	oscNode.start(0);

	for (let column = 0; column <= call.length - 1; column++) {
		//alphabet
		if (call[column] == 'A') {
			//短点を流す予約をする。
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if (call[column] == 'B') {
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if (call[column] == 'C') {
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if (call[column] == 'D') {
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if (call[column] == 'E')  {
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if (call[column] == 'F') {
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if (call[column] == 'G') {
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if (call[column] == 'H') {
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if (call[column] == 'I') {
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if (call[column] == 'J') {
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if (call[column] == 'K') {
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if (call[column] == 'L') {
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if (call[column] == 'M') {
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if (call[column] == 'N') {
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if (call[column] == 'O') {
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if (call[column] == 'P') {
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if (call[column] == 'Q') {
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if (call[column] == 'R') {
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if (call[column] == 'S') {
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if (call[column] == 'T') {
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if (call[column] == 'U') {
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if (call[column] == 'V') {
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if (call[column] == 'W') {
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if (call[column] == 'X') {
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if (call[column] == 'Y') {
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if (call[column] == 'Z') {
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		//end alpahbet

		//Number
		//0の時は頂点を5回鳴らす
		if (call[column] == 0) {
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			for (let s = 1; s <= 4; s++) {
				gainNode.gain.setValueAtTime(10, time += signal_duration);
				gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
			}
		}
		//1~4の時
		if (call[column] >= 1 && call[column] <= 4) {
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
			for (let s = 1; s <= call[column] -1 ; s++) {
				gainNode.gain.setValueAtTime(10, time += signal_duration);
				gainNode.gain.setValueAtTime(0, time += signal_duration);
			}

			for (let l = 1; l <= (5 - call[column] - 1); l++) {
				gainNode.gain.setValueAtTime(10, time += signal_duration);
				gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
			}
		}
		if (call[column] == 5) {
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
			for (let s = 1; s <= 4; s++) {
				gainNode.gain.setValueAtTime(10, time += signal_duration);
				gainNode.gain.setValueAtTime(0, time += signal_duration);
			}
		}
		if (call[column] >= 6 && call[column] <= 9) {
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
			for (let s = 1; s <= (call[column] - 6); s++) {
				gainNode.gain.setValueAtTime(10, time += signal_duration);
				gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
			}
			for (let l = 1; l <= (5 - (call[column] - 5) - 1); l++) {
				gainNode.gain.setValueAtTime(10, time += signal_duration);
				gainNode.gain.setValueAtTime(0, time += signal_duration);
			}
		}
		if (call[column] == '/') {
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if (call[column] == '?') {
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

		}

		//和文
		if (call[column] == 'あ') {
			// --.--
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] == 'い'){
			// .-
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] == 'う'){
			// ..-
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] == 'え'){
			// -.---
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] == 'お'){
			// .-...
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] == 'か'){
			// .-..
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] == 'き'){
			// -.-..
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] == 'く'){
			// ...-
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] == 'け'){
			// -.--
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] == 'こ'){
			// ----
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] == 'さ'){
			// -.-.-
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] == 'し'){
			// --.-.
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] == 'す'){
			// ---.-
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] == 'せ'){
			// .---.
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] == 'そ'){
			// ---.
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] == 'た'){
			// -.
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] == 'ち'){
			// ..-.
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] == 'つ'){
			// .--.
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] == 'て'){
			// .-.--
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] == 'と'){
			// ..-..
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] == 'な') {
			// .-.
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] == 'に'){
			// -.-.
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] == 'ぬ'){
			// ....
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] == 'ね'){
			// --.-
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] == 'の'){
			// ..--
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] == 'は'){
			// -...
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] == 'ひ'){
			// --..-
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] == 'ほ'){
			// --..
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] == 'ま'){
			// -..-
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] == 'み'){
			// ..-.-
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] == 'む'){
			// -
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] == 'め'){
			// -...-
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] == 'も'){
			// -..-.
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] == 'や'){
			// .--
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] == 'ゆ'){
			// -..--
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] == 'よ'){
			// --
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] == 'ら'){
			// ...
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] == 'り'){
			// --.
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] == 'る'){
			// -.--.
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] == 'れ'){
			// ---
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] == 'ろ'){
			// .-.-
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] == 'わ'){
			// -.-
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] == 'を'){
			// .---
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] == 'ん'){
			// .-.-.
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] == '゛'){
			// ..
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] == '゜'){
			// ..--.
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] == 'ー'){
			// .--.-
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] == '('){
			// -.--.-
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] == ')'){
			// .-..-.
			gainNode.gain.setValueAtTime(10, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(10, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		//符号と符号の間の空白短点三個分
		time += signal_duration * 3;
	}
	oscNode.stop(time);
}
