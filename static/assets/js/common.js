export default class cw {
    constructor(context) {
        this.context = context;
    }

    // wpm2ms は WPM を短点の長さの秒単位表記の値に変換します。
    wpm2ms = (wpm) => { return 60 / (50 * wpm); }

    // playMorseNode は 与えた文字列のモールス符号音声の再生時間を返します。
    // str: 再生する文字列, freq: サイン波の周波数, wpm: 速度
    playMorseNode = (str, freq, wpm) => {
        // 再生開始時間
        let st = this.context.currentTime;
        let gainNode = this.context.createGain();
        gainNode.gain.setValueAtTime = (1, st);

        // 受け取った文字列を位置文字ごとに分割して letter に入れる.
        const letter = new String(str).split('');

        // Sin波を生成する
        this.oscNode = this.context.createOscillator();
        this.oscNode.type = 'sine';
        this.oscNode.connect(gainNode);

        // 短点の長さを取得する。
        const duration = this.wpm2ms(wpm);

        let time = st;
        for (let column = 0; column < letter.length; column++) {
            //alphabet
            if (letter[column] === 'A') {
                //短点を流す予約をする。
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);
            }
            if (letter[column] === 'B') {
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);
            }
            if (letter[column] === 'C') {
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);
            }
            if (letter[column] === 'D') {
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);
            }
            if (letter[column] === 'E') {
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration);
            }
            if (letter[column] === 'F') {
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);
            }
            if (letter[column] === 'G') {
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);
            }
            if (letter[column] === 'H') {
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);
            }
            if (letter[column] === 'I') {
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);
            }
            if (letter[column] === 'J') {
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);
            }
            if (letter[column] === 'K') {
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);
            }
            if (letter[column] === 'L') {
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);
            }
            if (letter[column] === 'M') {
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);
            }
            if (letter[column] === 'N') {
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);
            }
            if (letter[column] === 'O') {
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);
            }
            if (letter[column] === 'P') {
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);
            }
            if (letter[column] === 'Q') {
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);
            }
            if (letter[column] === 'R') {
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);
            }
            if (letter[column] === 'S') {
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);
            }
            if (letter[column] === 'T') {
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);
            }
            if (letter[column] === 'U') {
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);
            }
            if (letter[column] === 'V') {
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);
            }
            if (letter[column] === 'W') {
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);
            }
            if (letter[column] === 'X') {
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);
            }
            if (letter[column] === 'Y') {
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);
            }
            if (letter[column] === 'Z') {
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);
            }
            //end alpahbet

            //Number
            //0の時は頂点を5回鳴らす
            if (letter[column] === '0') {
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                for (let s = 1; s <= 4; s++) {
                    this.oscNode.frequency.setValueAtTime(freq, time += duration);
                    this.oscNode.frequency.setValueAtTime(0, time += duration * 3);
                }
            }
            //1~4の時
            if (letter[column] >= '1' && letter[column] <= '4') {
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration);
                for (let s = 1; s <= letter[column] - 1; s++) {
                    this.oscNode.frequency.setValueAtTime(freq, time += duration);
                    this.oscNode.frequency.setValueAtTime(0, time += duration);
                }

                for (let l = 1; l <= (5 - letter[column]); l++) {
                    this.oscNode.frequency.setValueAtTime(freq, time += duration);
                    this.oscNode.frequency.setValueAtTime(0, time += duration * 3);
                }
            }
            if (letter[column] === '5') {
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration);
                for (let s = 1; s <= 4; s++) {
                    this.oscNode.frequency.setValueAtTime(freq, time += duration);
                    this.oscNode.frequency.setValueAtTime(0, time += duration);
                }
            }
            if (letter[column] >= '6' && letter[column] <= '9') {
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);
                for (let s = 1; s <= (letter[column] - 6); s++) {
                    this.oscNode.frequency.setValueAtTime(freq, time += duration);
                    this.oscNode.frequency.setValueAtTime(0, time += duration * 3);
                }
                for (let l = 1; l <= (5 - (letter[column] - 5)); l++) {
                    this.oscNode.frequency.setValueAtTime(freq, time += duration);
                    this.oscNode.frequency.setValueAtTime(0, time += duration);
                }
            }
            if (letter[column] === '/') {
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);
            }
            if (letter[column] === '?') {
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

            }

            //和文
            if (letter[column] === '\u3042') { // あ
                // --.--
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);
            }
            if (letter[column] === '\u3044') { // い
                // .-
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);
            }
            if (letter[column] === '\u3046') { // う
                // ..-
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);
            }
            if (letter[column] === '\u3048') { // え
                // -.---
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);
            }
            if (letter[column] === '\u304A') { // お
                // .-...
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);
            }
            if (letter[column] === '\u304B') { // か
                // .-..
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);
            }
            if (letter[column] === '\u304D') { // き
                // -.-..
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);
            }
            if (letter[column] === '\u304F') { // く
                // ...-
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);
            }
            if (letter[column] === '\u3051') { // け
                // -.--
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);
            }
            if (letter[column] === '\u3053') { // こ
                // ----
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);
            }
            if (letter[column] === '\u3055') { // さ
                // -.-.-
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);
            }
            if (letter[column] === '\u3057') { // し
                // --.-.
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);
            }
            if (letter[column] === '\u3059') { // す
                // ---.-
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);
            }
            if (letter[column] === '\u305B') { // せ
                // .---.
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);
            }
            if (letter[column] === '\u305D') { // そ
                // ---.
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);
            }
            if (letter[column] === '\u305F') { // た
                // -.
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);
            }
            if (letter[column] === '\u3061') { // ち
                // ..-.
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);
            }
            if (letter[column] === '\u3064') { // つ
                // .--.
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);
            }
            if (letter[column] === '\u3066') { // て
                // .-.--
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);
            }
            if (letter[column] === '\u3068') { // と
                // ..-..
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);
            }
            if (letter[column] === '\u306A') { // な
                // .-.
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);
            }
            if (letter[column] === '\u306B') { // に
                // -.-.
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);
            }
            if (letter[column] === '\u306C') { // ぬ
                // ....
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);
            }
            if (letter[column] === '\u306D') { // ね
                // --.-
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);
            }
            if (letter[column] === '\u306E') { // の
                // ..--
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);
            }
            if (letter[column] === '\u306F') { // は
                // -...
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);
            }
            if (letter[column] === '\u3072') { // ひ
                // --..-
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);
            }
            if (letter[column] === '\u3075') { // ふ
                // --..
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);
            }
            if (letter[column] === '\u3078') { // へ
                // .
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration);
            }
            if (letter[column] === '\u307B') { // ほ
                // --..
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);
            }
            if (letter[column] === '\u307E') { // ま
                // -..-
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);
            }
            if (letter[column] === '\u307F') { // み
                // ..-.-
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);
            }
            if (letter[column] === '\u3080') { // む
                // -
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);
            }
            if (letter[column] === '\u3081') { // め
                // -...-
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);
            }
            if (letter[column] === '\u3082') { // も
                // -..-.
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);
            }
            if (letter[column] === '\u3084') { // や
                // .--
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);
            }
            if (letter[column] === '\u3086') { // ゆ
                // -..--
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);
            }
            if (letter[column] === '\u3088') { // よ
                // --
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);
            }
            if (letter[column] === '\u3089') { // ら
                // ...
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);
            }
            if (letter[column] === '\u308A') { // り
                // --.
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);
            }
            if (letter[column] === '\u308B') { // る
                // -.--.
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);
            }
            if (letter[column] === '\u308C') { // れ
                // ---
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);
            }
            if (letter[column] === '\u308D') { // ろ
                // .-.-
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);
            }
            if (letter[column] === '\u308F') { // わ
                // -.-
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);
            }
            if (letter[column] === '\u3092') { // を
                // .---
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);
            }
            if (letter[column] === '\u3093') { // ん
                // .-.-.
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);
            }
            if (letter[column] === '\u309B') { // ゛
                // ..
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);
            }
            if (letter[column] === '\u309C') { // ゜
                // ..--.
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);
            }
            if (letter[column] === '\u30FC') { // ー
                // .--.-
                this.oscNode.frequency.setValueAtTime(freq, time);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration);

                this.oscNode.frequency.setValueAtTime(freq, time += duration);
                this.oscNode.frequency.setValueAtTime(0, time += duration * 3);
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
        this.oscNode.start(st);
        this.oscNode.stop(time);

        gainNode.connect(this.context.destination);
        return time - st;
    }

    // モールス符号の再生を途中停止する。
    stopMorse = () => { this.oscNode.stop(this.context.currentTime); }
}

// モールス符号の再生を途中停止する。
const stopMorse = (t) => { oscNode.stop(t); }

// for tooltip by bootstrap and propper.js
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
