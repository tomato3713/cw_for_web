//キーボードのボタンを押される都度に
//対応するモールス符号を再生する
function successivePlay(e) {
  //div要素をクリックされたときの対策
  //文字の入っていないボタンをクリックされたときの対策
  if(e.target.value == null){
  }else {
    var target = e.target;
    //cw_startは配列を受け取るため配列を宣言する
    var text = new Array;
    text = target.value;
    cw_start(text);
  }
}

//textBox, id:Boxに書かれている文字列のモールス符号を再生する
function play_all() {
  var call = new Array;

  if ( document.getElementById("Box").value !=  '' ) {
    call = document.getElementById("Box").value.split('');
    
    cw_start(call);
  }
}
