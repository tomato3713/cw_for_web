"use strict";
let context;
let oscNode;

const cw_start = ( str, freq, speed ) => {
	// call を一文字に分割する
	if( context === undefined ) {
		try {
			window.AudioContext =
				window.AudioContext || window.webkitAudioContext;
			context = new AudioContext();
		}
		catch(e) {
			alert('Web Audio API is not supported in this browser');
		}
	}
	const call = new String(str).split('');

	oscNode = context.createOscillator();
	let gainNode = context.createGain();
	oscNode.connect(gainNode);
	gainNode.connect(context.destination);

	const stime= context.currentTime;
	let time = context.currentTime;
	oscNode.type = 'sine';
	oscNode.frequency.setValueAtTime(freq, time);

	//短点の長さを取得する。
	const signal_duration = speed;

	for (let column = 0; column < call.length; column++) {
		//alphabet
		if (call[column] === 'A') {
			//短点を流す予約をする。
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if (call[column] === 'B') {
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if (call[column] === 'C') {
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if (call[column] === 'D') {
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if (call[column] === 'E')  {
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if (call[column] === 'F') {
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if (call[column] === 'G') {
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if (call[column] === 'H') {
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if (call[column] === 'I') {
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if (call[column] === 'J') {
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if (call[column] === 'K') {
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if (call[column] === 'L') {
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if (call[column] === 'M') {
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if (call[column] === 'N') {
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if (call[column] === 'O') {
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if (call[column] === 'P') {
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if (call[column] === 'Q') {
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if (call[column] === 'R') {
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if (call[column] === 'S') {
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if (call[column] === 'T') {
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if (call[column] === 'U') {
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if (call[column] === 'V') {
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if (call[column] === 'W') {
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if (call[column] === 'X') {
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if (call[column] === 'Y') {
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if (call[column] === 'Z') {
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		//end alpahbet

		//Number
		//0の時は頂点を5回鳴らす
		if (call[column] === '0') {
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			for (let s = 1; s <= 4; s++) {
				gainNode.gain.setValueAtTime(1.0, time += signal_duration);
				gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
			}
		}
		//1~4の時
		if (call[column] >= '1' && call[column] <= '4') {
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
			for (let s = 1; s <= call[column] -1 ; s++) {
				gainNode.gain.setValueAtTime(1.0, time += signal_duration);
				gainNode.gain.setValueAtTime(0, time += signal_duration);
			}

			for (let l = 1; l <= (5 - call[column] ); l++) {
				gainNode.gain.setValueAtTime(1.0, time += signal_duration);
				gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
			}
		}
		if (call[column] === '5') {
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
			for (let s = 1; s <= 4; s++) {
				gainNode.gain.setValueAtTime(1.0, time += signal_duration);
				gainNode.gain.setValueAtTime(0, time += signal_duration);
			}
		}
		if (call[column] >= '6' && call[column] <= '9') {
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
			for (let s = 1; s <= (call[column] - 6); s++) {
				gainNode.gain.setValueAtTime(1.0, time += signal_duration);
				gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
			}
			for (let l = 1; l <= (5 - (call[column] - 5) ); l++) {
				gainNode.gain.setValueAtTime(1.0, time += signal_duration);
				gainNode.gain.setValueAtTime(0, time += signal_duration);
			}
		}
		if (call[column] === '/') {
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if (call[column] === '?') {
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

		}

		//和文
		if (call[column] === '\u3042') { // あ
			// --.--
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] === '\u3044'){ // い
			// .-
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] === '\u3046'){ // う
			// ..-
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] === '\u3048'){ // え
			// -.---
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] === '\u304A'){ // お
			// .-...
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] === '\u304B'){ // か
			// .-..
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] === '\u304D'){ // き
			// -.-..
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] === '\u304F'){ // く
			// ...-
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] === '\u3051'){ // け
			// -.--
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] === '\u3053'){ // こ
			// ----
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] === '\u3055'){ // さ
			// -.-.-
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] === '\u3057'){ // し
			// --.-.
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] === '\u3059'){ // す
			// ---.-
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] === '\u305B'){ // せ
			// .---.
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] === '\u305D'){ // そ
			// ---.
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] === '\u305F'){ // た
			// -.
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] === '\u3061'){ // ち
			// ..-.
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] === '\u3064'){ // つ
			// .--.
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] === '\u3066'){ // て
			// .-.--
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] === '\u3068'){ // と
			// ..-..
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] === '\u306A') { // な
			// .-.
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] === '\u306B'){ // に
			// -.-.
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] === '\u306C'){ // ぬ
			// ....
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] === '\u306D'){ // ね
			// --.-
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] === '\u306E'){ // の
			// ..--
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] === '\u306F'){ // は
			// -...
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] === '\u3072'){ // ひ
			// --..-
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] === '\u3075'){ // ふ
			// --..
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] === '\u3078'){ // へ
			// .
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] === '\u307B'){ // ほ
			// --..
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] === '\u307E'){ // ま
			// -..-
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] === '\u307F'){ // み
			// ..-.-
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] === '\u3080'){ // む
			// -
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] === '\u3081'){ // め
			// -...-
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] === '\u3082'){ // も
			// -..-.
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] === '\u3084'){ // や
			// .--
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] === '\u3086'){ // ゆ
			// -..--
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] === '\u3088'){ // よ
			// --
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] === '\u3089'){ // ら
			// ...
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] === '\u308A'){ // り
			// --.
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] === '\u308B'){ // る
			// -.--.
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] === '\u308C'){ // れ
			// ---
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] === '\u308D'){ // ろ
			// .-.-
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] === '\u308F'){ // わ
			// -.-
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] === '\u3092'){ // を
			// .---
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] === '\u3093'){ // ん
			// .-.-.
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] === '\u309B'){ // ゛
			// ..
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] === '\u309C'){ // ゜
			// ..--.
			gainNode.gain.setValueAtTime(1.0, time);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);

			gainNode.gain.setValueAtTime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration);
		}
		if(call[column] === '\u30FC'){ // ー
			// .--.-
			gainnode.gain.setvalueattime(1.0, time);
			gainnode.gain.setvalueattime(0, time += signal_duration);

			gainnode.gain.setvalueattime(1.0, time += signal_duration);
			gainnode.gain.setvalueattime(0, time += signal_duration * 3);

			gainnode.gain.setvalueattime(1.0, time += signal_duration);
			gainnode.gain.setvalueattime(0, time += signal_duration * 3);

			gainnode.gain.setvalueattime(1.0, time += signal_duration);
			gainnode.gain.setvalueattime(0, time += signal_duration);

			gainnode.gain.setvalueattime(1.0, time += signal_duration);
			gainNode.gain.setValueAtTime(0, time += signal_duration * 3);
		}
		if(call[column] === '\u0020' ) { // 半角空白
			time += signal_duration * 7;
		} else {
			//符号と符号の間の空白短点三個分
			time += signal_duration * 3;
		}
	}
	time -= signal_duration * 3;
    if (time < 0) {
        time = 0;
    }
	oscNode.start();
	oscNode.stop(time);
	return time - stime;
}

const cw_stop = () => {
	oscNode.stop( context.currentTime );
}
