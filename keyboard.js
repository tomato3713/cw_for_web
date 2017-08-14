//delとナンバーアルファベットキーのどちらが入力されたのか判断する。
function keyboardButtonCheck(e) {
    var target = e.target;
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
function ClickOn(key) {
    var Enter_Call = new Array(document.getElementById("Box").value);
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
function ClickOnDel(){
    var Enter_Call = (document.getElementById("Box").value).split('');
    //delete the last char
    Enter_Call.pop();
    document.getElementById("Box").value = Enter_Call.join('');
}
