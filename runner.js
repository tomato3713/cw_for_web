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

const playRunner = () => {
    document.getElementById('PlayButton').disabled = true;
    const time = runner.play();
    setTimeout(
        () => {
            document.getElementById('AnswerButton').disabled = false;
        },
        time * 1000
    );
}

const answerRunner = () => {
    const urAns = new String(document.getElementById("Box").value.toUpperCase());
    if (runner.checkAnswer(urAns)) {
        document.getElementById("Result_Now").src = "img/circle.png";
        document.getElementById("Result_Now").alt = "right";
        const right_counter = parseInt(document.getElementById("RightCount").value);
        document.getElementById("RightCount").value = right_counter + 1;
    } else {
        document.getElementById("Result_Now").src = "img/cross.png";
        document.getElementById("Result_Now").alt = "wrong";
        const wrong_counter = parseInt(document.getElementById("WrongCount").value);
        document.getElementById("WrongCount").value = wrong_counter + 1;
    }

    document.getElementById('Box').value = '';
    document.getElementById('History').value += `\n${runner.answer}-${urAns}`;
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
    document.getElementById('PlayButton').addEventListener('click', playRunner, false);
    document.getElementById('AnswerButton').addEventListener('click', answerRunner);
    document.addEventListener('keydown', keyDown);
    document.getElementById('AnswerButton').disabled = true;

    // Configuration
    document.getElementById('radioButton_log').addEventListener(
        'change',
        (e) => {
            answerRunner();
            runner.changeLogType(e.target.value);
        },
        false
    );
    document.getElementById('checkbox_addDe').addEventListener('change', () => { runner.toggleDe(); }, false);
    document.getElementById('checkbox_rws').addEventListener('change', () => { runner.toggleRWS(); }, false);
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

const Runner = class {
    constructor(de, rws, type, freq, wpm) {
        this.de = de;
        this.repeat_wrong_signal = rws;
        this.answer = new String;
        this.strList = new Array;
        this.loadText(type);

        // reSelect is flag variable.
        this.reSelect = true;

        this.freq = freq;
        this.wpm = wpm;
    }
    changeLogType(type) {
        this.reSelect = true;
        this.loadText(type);
    }
    toggleRWS() {
        this.repeat_wrong_signal = !this.repeat_wrong_signal;
        this.reSelect = true;
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

        const url = document.URL;

        document.getElementById('Result_Now').alt = 'result';
        if (call_type === 'Basic') {
            loadJSONfromServer(this, `${url}data/Basic.json`);
        }
        if (call_type === 'Stamp') {
            loadJSONfromServer(this, `${url}data/rubber-stump.json`);
        }
        if (call_type === 'Ja') {
            loadJSONfromServer(this, `${url}data/ja.json`);
        }
        if (call_type === 'DX') {
            loadJSONfromServer(this, `${url}data/world.json`);
        }
    }
    // return string
    selectString() {
        if (this.reSelect) {
            const row = Math.floor(Math.random() * (this.strList.length));
            return String(this.strList[row]);
        } else {
            return this.answer;
        }
    }
    play() {
        let str = this.selectString();
        this.answer = str;

        // add DE
        if (this.de) {
            str = String(`DE ${this.answer}`);
        }

        const time = playMorseNode(
            str,
            this.freq,
            this.wpm,
            context.currentTime,
            context
        );
    }
    checkAnswer(resp) {
        const ans = this.answer;
        let match_result = ans.length;
        let result_dif = new Array();

        for (let i = 0; i <= ans.length - 1 && i <= resp.length - 1; i++) {
            //check answer
            if (ans.charAt(i) === resp.charAt(i)) {
                result_dif[i] = '〇';
                match_result--;
            } else {
                result_dif[i] = '×';
            }
        }

        if (match_result === 0) {
            // the answer is right.
            this.reSelect = true;
            return true;
        }
        // the answer is wrong.
        if (!this.repeat_wrong_signal) {
            this.reSelect = true;
        } else {
            this.reSelect = false;
        }
        return false;
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
let runner = new Runner(
    document.getElementById('checkbox_addDe').checked,
    document.getElementById('checkbox_rws').checked,
    function() {
        const type = getStrType();
        if (type) return type
        else console.error("not checked type")
    }(),
    document.getElementById('Freq').value,
    document.getElementById("Speed").value
);

initAddEvent();
