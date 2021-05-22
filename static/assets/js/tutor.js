import cw from './common.js';

//textBox, id:Boxに書かれている文字列のモールス符号を再生する
const play_all = () => {
    if (document.getElementById("Box").value != '') {
        const call = document.getElementById("Box").value.toUpperCase();
        const freq = document.getElementById('Freq').value;
        const wpm = document.getElementById("Speed").value;
        cwplayer.playMorseNode(call, freq, wpm);
    }
}

// if you use pc, register to event listener.
const keyDown = (e) => {
    // get key code
    const keyCode = e.keyCode;
    if (keyCode === 13) { // Enter key
        document.getElementById('PlayButton').click();
    }
    if (keyCode === 27) { // ESC key
        cwplayer.stopMorse();
    }
}

//イベントリスナーに関数を登録する。
const initAddEvent = () => {
    document.getElementById('PlayButton').addEventListener('click', play_all, false);

    // define key command
    document.addEventListener('keydown', keyDown, false);
}

try {
    window.AudioContext =
        window.AudioContext || window.webkitAudioContext;
}
catch (e) {
    alert('Web Audio API is not supported in this browser');
}
let cwplayer = new cw(new AudioContext());
initAddEvent();
