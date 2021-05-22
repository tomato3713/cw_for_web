"use strict";
let oscNode;

// wpm2ms は WPM を短点の長さの秒単位表記の値に変換します。
const wpm2ms = (wpm) => { return 60 / (50 * wpm); }

// playMorseNode は 与えた文字列のモールス符号音声の再生時間を返します。
// str: 再生する文字列, freq: サイン波の周波数
// wpm: 速度, st: 再生開始時間, context: AudioContext
const playMorseNode = (str, freq, wpm, st, context) => {
    let gainNode = context.createGain();
    gainNode.gain.setValueAtTime = (1, st);

    // 受け取った文字列を位置文字ごとに分割して letter に入れる.
    const letter = new String(str).split('');

    // Sin波を生成する
    oscNode = context.createOscillator();
    oscNode.type = 'sine';
    oscNode.connect(gainNode);

    // 短点の長さを取得する。
    const duration = wpm2ms(wpm);

    let time = st;
    for (let column = 0; column < letter.length; column++) {
        //alphabet
        if (letter[column] === 'A') {
            //短点を流す予約をする。
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);
        }
        if (letter[column] === 'B') {
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);
        }
        if (letter[column] === 'C') {
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);
        }
        if (letter[column] === 'D') {
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);
        }
        if (letter[column] === 'E') {
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration);
        }
        if (letter[column] === 'F') {
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);
        }
        if (letter[column] === 'G') {
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);
        }
        if (letter[column] === 'H') {
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);
        }
        if (letter[column] === 'I') {
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);
        }
        if (letter[column] === 'J') {
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);
        }
        if (letter[column] === 'K') {
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);
        }
        if (letter[column] === 'L') {
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);
        }
        if (letter[column] === 'M') {
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);
        }
        if (letter[column] === 'N') {
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);
        }
        if (letter[column] === 'O') {
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);
        }
        if (letter[column] === 'P') {
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);
        }
        if (letter[column] === 'Q') {
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);
        }
        if (letter[column] === 'R') {
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);
        }
        if (letter[column] === 'S') {
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);
        }
        if (letter[column] === 'T') {
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);
        }
        if (letter[column] === 'U') {
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);
        }
        if (letter[column] === 'V') {
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);
        }
        if (letter[column] === 'W') {
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);
        }
        if (letter[column] === 'X') {
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);
        }
        if (letter[column] === 'Y') {
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);
        }
        if (letter[column] === 'Z') {
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);
        }
        //end alpahbet

        //Number
        //0の時は頂点を5回鳴らす
        if (letter[column] === '0') {
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            for (let s = 1; s <= 4; s++) {
                oscNode.frequency.setValueAtTime(freq, time += duration);
                oscNode.frequency.setValueAtTime(0, time += duration * 3);
            }
        }
        //1~4の時
        if (letter[column] >= '1' && letter[column] <= '4') {
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration);
            for (let s = 1; s <= letter[column] - 1; s++) {
                oscNode.frequency.setValueAtTime(freq, time += duration);
                oscNode.frequency.setValueAtTime(0, time += duration);
            }

            for (let l = 1; l <= (5 - letter[column]); l++) {
                oscNode.frequency.setValueAtTime(freq, time += duration);
                oscNode.frequency.setValueAtTime(0, time += duration * 3);
            }
        }
        if (letter[column] === '5') {
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration);
            for (let s = 1; s <= 4; s++) {
                oscNode.frequency.setValueAtTime(freq, time += duration);
                oscNode.frequency.setValueAtTime(0, time += duration);
            }
        }
        if (letter[column] >= '6' && letter[column] <= '9') {
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);
            for (let s = 1; s <= (letter[column] - 6); s++) {
                oscNode.frequency.setValueAtTime(freq, time += duration);
                oscNode.frequency.setValueAtTime(0, time += duration * 3);
            }
            for (let l = 1; l <= (5 - (letter[column] - 5)); l++) {
                oscNode.frequency.setValueAtTime(freq, time += duration);
                oscNode.frequency.setValueAtTime(0, time += duration);
            }
        }
        if (letter[column] === '/') {
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);
        }
        if (letter[column] === '?') {
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

        }

        //和文
        if (letter[column] === '\u3042') { // あ
            // --.--
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);
        }
        if (letter[column] === '\u3044') { // い
            // .-
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);
        }
        if (letter[column] === '\u3046') { // う
            // ..-
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);
        }
        if (letter[column] === '\u3048') { // え
            // -.---
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);
        }
        if (letter[column] === '\u304A') { // お
            // .-...
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);
        }
        if (letter[column] === '\u304B') { // か
            // .-..
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);
        }
        if (letter[column] === '\u304D') { // き
            // -.-..
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);
        }
        if (letter[column] === '\u304F') { // く
            // ...-
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);
        }
        if (letter[column] === '\u3051') { // け
            // -.--
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);
        }
        if (letter[column] === '\u3053') { // こ
            // ----
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);
        }
        if (letter[column] === '\u3055') { // さ
            // -.-.-
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);
        }
        if (letter[column] === '\u3057') { // し
            // --.-.
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);
        }
        if (letter[column] === '\u3059') { // す
            // ---.-
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);
        }
        if (letter[column] === '\u305B') { // せ
            // .---.
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);
        }
        if (letter[column] === '\u305D') { // そ
            // ---.
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);
        }
        if (letter[column] === '\u305F') { // た
            // -.
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);
        }
        if (letter[column] === '\u3061') { // ち
            // ..-.
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);
        }
        if (letter[column] === '\u3064') { // つ
            // .--.
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);
        }
        if (letter[column] === '\u3066') { // て
            // .-.--
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);
        }
        if (letter[column] === '\u3068') { // と
            // ..-..
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);
        }
        if (letter[column] === '\u306A') { // な
            // .-.
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);
        }
        if (letter[column] === '\u306B') { // に
            // -.-.
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);
        }
        if (letter[column] === '\u306C') { // ぬ
            // ....
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);
        }
        if (letter[column] === '\u306D') { // ね
            // --.-
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);
        }
        if (letter[column] === '\u306E') { // の
            // ..--
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);
        }
        if (letter[column] === '\u306F') { // は
            // -...
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);
        }
        if (letter[column] === '\u3072') { // ひ
            // --..-
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);
        }
        if (letter[column] === '\u3075') { // ふ
            // --..
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);
        }
        if (letter[column] === '\u3078') { // へ
            // .
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration);
        }
        if (letter[column] === '\u307B') { // ほ
            // --..
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);
        }
        if (letter[column] === '\u307E') { // ま
            // -..-
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);
        }
        if (letter[column] === '\u307F') { // み
            // ..-.-
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);
        }
        if (letter[column] === '\u3080') { // む
            // -
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);
        }
        if (letter[column] === '\u3081') { // め
            // -...-
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);
        }
        if (letter[column] === '\u3082') { // も
            // -..-.
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);
        }
        if (letter[column] === '\u3084') { // や
            // .--
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);
        }
        if (letter[column] === '\u3086') { // ゆ
            // -..--
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);
        }
        if (letter[column] === '\u3088') { // よ
            // --
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);
        }
        if (letter[column] === '\u3089') { // ら
            // ...
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);
        }
        if (letter[column] === '\u308A') { // り
            // --.
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);
        }
        if (letter[column] === '\u308B') { // る
            // -.--.
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);
        }
        if (letter[column] === '\u308C') { // れ
            // ---
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);
        }
        if (letter[column] === '\u308D') { // ろ
            // .-.-
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);
        }
        if (letter[column] === '\u308F') { // わ
            // -.-
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);
        }
        if (letter[column] === '\u3092') { // を
            // .---
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);
        }
        if (letter[column] === '\u3093') { // ん
            // .-.-.
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);
        }
        if (letter[column] === '\u309B') { // ゛
            // ..
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);
        }
        if (letter[column] === '\u309C') { // ゜
            // ..--.
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);
        }
        if (letter[column] === '\u30FC') { // ー
            // .--.-
            oscNode.frequency.setValueAtTime(freq, time);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration);

            oscNode.frequency.setValueAtTime(freq, time += duration);
            oscNode.frequency.setValueAtTime(0, time += duration * 3);
        }
        if (letter[column] === '\u0020') { // 半角空白
            time += duration * 7;
        } else {
            //符号と符号の間の空白短点三個分
            time += duration * 3;
        }
    }
    time -= duration * 3;
    // この時点で、timeには再生時間が格納されている。

    if (time < 0) { time = 0; }

    // ノードの再生開始
    oscNode.start(st);
    oscNode.stop(time);

    gainNode.connect(context.destination);
    return time - st;
}

// モールス符号の再生を途中停止する。
const stopMorse = (t) => { oscNode.stop(t); }

// for tooltip by bootstrap and propper.js
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
