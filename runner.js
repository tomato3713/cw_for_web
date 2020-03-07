"use strict";

const keyboardButtonCheck = (e) => {
    const target = e.target;
    if (target.value != "") {
        if (target.value === "del") {
            ClickOnDel();
        } else {
            ClickOn(target.value);
        }
    }
}
const ClickOn = (key) => {
    let Enter_Call = new Array(document.getElementById("Box").value);
    if (Enter_Call[0] === '') {
        Enter_Call[0] = key;
    } else {
        Enter_Call.push(key);
    }
    document.getElementById("Box").value = Enter_Call.join('');
}
const ClickOnDel = () => {
    let Enter_Call = document.getElementById("Box").value.split('');
    Enter_Call.pop();
    document.getElementById("Box").value = Enter_Call.join('');
}

// return string
const selectString = () => {
    if (state.repeat_wrong_signal) {
        const pre_ans = document.getElementById('Result_Now').alt;
        if (pre_ans != 'wrong') { // 直前の符号を聞き取れているならば
            const row = Math.floor(Math.random() * (state.strList.length));
            return String(state.strList[row]);
        } else {
            return state.answer;
        }
    } else {
        const row = Math.floor(Math.random() * (state.strList.length));
        return String(state.strList[row]);
    }
}

const play = () => {
    document.getElementById('PlayButton').disabled = true;

    let str = selectString();
    state.answer = str;

    // add DE
    if (state.de) {
        str = String(`DE ${state.answer}`);
    }

    const freq = document.getElementById('Freq').value;
    const wpm = document.getElementById("Speed").value;
    const time = playMorseNode(str, freq, wpm, context.currentTime, context);

    setTimeout(() => { document.getElementById('AnswerButton').disabled = false; }, time * 1000);
}

const answerCheck = () => {
    const urAns = new String(document.getElementById("Box").value.toUpperCase());
    const ans = state.answer;

    let match_result = ans.length;
    let result_dif = new Array();
    for (let i = 0; i <= ans.length - 1 && i <= urAns.length - 1; i++) {
        //check answer
        if (ans.charAt(i) === urAns.charAt(i)) {
            result_dif[i] = '〇';
            match_result--;
        } else {
            result_dif[i] = '×';
        }
    }

    if (match_result === 0) {
        document.getElementById("Result_Now").src = "img/circle.png";
        document.getElementById("Result_Now").alt = "right";
        const right_counter = parseInt(document.getElementById("RightCount").value);
        document.getElementById("RightCount").value = right_counter + 1;
    }
    if (match_result != 0) {
        document.getElementById("Result_Now").src = "img/cross.png";
        document.getElementById("Result_Now").alt = "wrong";
        const wrong_counter = parseInt(document.getElementById("WrongCount").value);
        document.getElementById("WrongCount").value = wrong_counter + 1;
    }
    document.getElementById('Box').value = '';

    document.getElementById('History').value += `\n${ans}-${urAns}`;
    document.getElementById('PlayButton').disabled = false;
    document.getElementById('AnswerButton').disabled = true;
}
// if you use pc, register to event listener.
const keyDown = (e) => {
    const keyCode = e.keyCode;
    if (keyCode === 13) { // Enter key
        document.getElementById('Box').placeholder = "Enter the code you heard";
        document.getElementById('AnswerButton').click();
        document.getElementById('PlayButton').click();
        document.getElementById('Box').focus();
    }
    if (keyCode === 27) { // ESC key
        stopMorse(context.currentTime);
        document.getElementById('Box').value = "";
        document.getElementById('Result_Now').src = "img/question-mark.png";
        document.getElementById('PlayButton').disabled = false;
        document.getElementById('AnswerButton').disabled = true;
    }
}

//イベントリスナーに関数を登録する。
const initAddEvent = () => {
    // If support service worker, register service-worker.js
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./service-worker.js')
            .then((registration) => {
                console.log('Service Worker Registered.');
            })
            .catch((err) => {
                console.log('Service Worker Registration failed: ', err);
            });
    }
    document.getElementById('PlayButton').addEventListener('click', play, false);
    document.getElementById('AnswerButton').addEventListener('click', answerCheck);
    document.addEventListener('keydown', keyDown);
    document.getElementById('AnswerButton').disabled = true;

    // Configuration
    document.getElementById('radioButton_log').addEventListener('change', (e) => { state.loadText(e.target.value); }, false);
    document.getElementById('checkbox_addDe').addEventListener('change', () => { state.toggleDe(); }, false);
    document.getElementById('checkbox_rws').addEventListener('change', () => { state.toggleRWS(); }, false);
}

const getStrType = () => {
    let ret = false;
    const typesGroup = document.getElementById('radioButton_log').childNodes;
    typesGroup.forEach((elm) => {
        if (elm.type === 'radio' && elm.name == 'logType') {
            if (elm.checked) {
                ret = elm.value;
            }
        }
    });
    return ret;
}

const State = class {
    constructor(de, rws, type) {
        this.de = de;
        this.repeat_wrong_signal = rws;
        this.answer = new String;
        this.strList = new Array;
        this.loadText(type);
    }
    toggleRWS() {
        this.repeat_wrong_signal = !this.repeat_wrong_signal;
    }
    toggleDe() {
        this.de = !this.de;
    }
    loadText(call_type) {
        const loadJSONfromServer = (state, url) => {
            fetch(url)
                .then(function(resp) {
                    return resp.json();
                })
                .then(function(json) {
                    state.strList = json.str;
                })
                .catch(err => console.error(err));
        }

        document.getElementById('Result_Now').alt = 'result';
        if (call_type === 'Basic') {
            loadJSONfromServer(this, 'http://localhost:8080/data/Basic.json');
        }
        if (call_type === 'Stamp') {
            loadJSONfromServer(this, 'http://localhost:8080/data/rubber-stump.json');
        }
        if (call_type === 'Ja') {
            loadJSONfromServer(this, 'http://localhost:8080/data/ja.json');
        }
        if (call_type === 'DX') {
            loadJSONfromServer(this, 'http://localhost:8080/data/world.json');
        }
    }
}

try {
    window.AudioContext =
        window.AudioContext || window.webkitAudioContext;
}
catch (e) {
    alert('Web Audio API is not supported in this browser');
}

let context = new AudioContext();
let state = new State(
    document.getElementById('checkbox_addDe').checked,
    document.getElementById('checkbox_rws').checked,
    function() {
        const type = getStrType();
        if (type) return type
        else console.error("not checked type")
    }()
)

initAddEvent();
