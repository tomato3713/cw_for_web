//textBox, id:Boxに書かれている文字列のモールス符号を再生する
const play_all = () => {
"use strict";
	if ( document.getElementById("Box").value !=  '' ) {
		const call = document.getElementById("Box").value.split('');
		cw_start(call);
	}
}
//delとナンバーアルファベットキーのどちらが入力されたのか判断する。
const keyboardButtonCheck = (e) => {
"use strict";
    const target = e.target;
    if(target.type == 'button' && target.value != ""){
      if (target.value == "del") {
          ClickOnDel();
      } else {
          ClickOn(target.value);
		  cw_start(target.value);
      }
    }
}

// ナンバー、アルファベットキーが押されたら、
// 対応する文字をテキストボックス（id:Box）に入力する。
const ClickOn = (key) => {
"use strict";
    let Enter_Call = new Array(document.getElementById("Box").value);
    //add the char clicked
    if ( Enter_Call[0] == '' ){
        //not existed first char.
        Enter_Call[0] = key;
    } else {
        //existed
        Enter_Call.push(key);
    }
    document.getElementById("Box").value = Enter_Call.join('');
}

// delキーが入力されたら
// テキストボックス（id:Box）のテキストの最後を一文字消す。
const ClickOnDel = () => {
"use strict";
    let Enter_Call = document.getElementById("Box").value.split('');
    //delete the last char
    Enter_Call.pop();
    document.getElementById("Box").value = Enter_Call.join('');
}

// if you use pc, register to event listener.
const keyDown = (e) => {
"use strict";
	// get key code
	const keyCode = e.keyCode;
	if ( keyCode == 13 ) { // Enter key
		document.getElementById('PlayButton').click();
	}
	if( keyCode == 27 ) { // ESC key
		cw_stop();
	}
}

//イベントリスナーに関数を登録する。
const initAddEvent = () => {
"use strict";
	document.getElementById('PlayButton').addEventListener('click', play_all , false);
	document.getElementById('key').addEventListener('click', keyboardButtonCheck, false);

	if(
		navigator.userAgent.indexOf('iPhone') > 0 ||
		navigator.userAgent.indexOf('iPad') > 0 ||
		navigator.userAgent.indexOf('iPod') > 0 ||
		navigator.userAgent.indexOf('Android') > 0 )
	{
		// if you use tablet,
	} else
	{
		// if you use pc,
		// define key command
		document.addEventListener('keydown', keyDown);
	}
}

initAddEvent();
