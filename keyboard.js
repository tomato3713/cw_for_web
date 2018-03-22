//delとナンバーアルファベットキーのどちらが入力されたのか判断する。
const keyboardButtonCheck = (e) => {
	"use strict";
    let target = e.target;
    if(target.value != ""){
      if (target.value == "del") {
          ClickOnDel();
      } else {
          ClickOn(target.value);
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
    let Enter_Call = (document.getElementById("Box").value).split('');
    //delete the last char
    Enter_Call.pop();
    document.getElementById("Box").value = Enter_Call.join('');
}
