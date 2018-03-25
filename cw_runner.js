let call_name = new Array; //コールサインのデータを格納する。
let call_answer = new Array;　//回答となるコールサインを格納する。playボタンが押されるたびに変更される。
let turn = 1; //flag of answercheck() able, 答えのターン:0 disable:1
//問題が再生される前にanswerボタンが押されても反応しないようにする

//再生するコールサインを決定し、答えをcall_answerに保存する。
//cw_startを呼び出し、コールサインを再生する。
const selectCallsign = () => {
	"use strict";
	turn = 0; //answercheck()を有効にする

	//前の答えを消去する。
	call_answer.splice(call_answer.length - 1, call_answer.length);

	//call_nameに格納されているコールサインのうちどれを再生するのかを決定する
	const row = Math.floor(Math.random() * (call_name.length));

	//現在の答えをcall_answerに代入する。
	for (let i = 0; i <= call_name[row].length -1 ; i++) {
		call_answer[i] = call_name[row][i];
	}
	//鳴らす
	cw_start(call_answer);
}

// ユーザーの回答の採点を行う
// turn = 0の時のみ実行する
const answerCheck = () => {
	"use strict";
	if (turn == 0) {
		//get the user's answer
		const myAnswer = document.getElementById("Box").value.split('');

		let match_result = 0;
		let result_dif = new Array();
		for (let i = 0; i <= call_answer.length - 1 && i <= myAnswer.length - 1; i++) {
			//check answer
			// 答えと回答を比較する。
			if (call_answer[i] == myAnswer[i].toUpperCase()) {
				result_dif[i] = 'R';//right
			} else {
				result_dif[i] = 'W';//wrong
				match_result++;
			}
		}

		//回答が正しければ、正当数を1増やし、間違っていれば、不可数を1増やす。
		if (match_result == 0) {
			document.getElementById("Result_Now").value = 'R_' + result_dif.join('');
			const right_counter = parseInt(document.getElementById("RightCount").value);
			document.getElementById("RightCount").value = right_counter + 1;
		}
		if (match_result != 0) {
			document.getElementById("Result_Now").value = 'W_' + result_dif.join('');
			const wrong_counter = parseInt(document.getElementById("WrongCount").value);
			document.getElementById("WrongCount").value = wrong_counter + 1;
		}
		document.getElementById('Box').value = '';
		turn = 1;

		// 過去の回答の記録に現在の回答を追加する。
		document.getElementById('History').value += '\n' + call_answer.join('') + '-' + myAnswer.join('');
	}
}
