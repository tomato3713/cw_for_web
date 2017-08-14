//キーボードから入力されるごとに鳴らす
function successivePlay(e) {
  //divタグがクリックされたときの対策
  if(e.target.value == null){
}else {
    var target = e.target;
    var text = new Array;
    text = target.value;
    cw_start(text);
  }

}

function play_all() {
    var call = new Array;
  if ( document.getElementById("Box").value !=  '' ) {
    call = document.getElementById("Box").value.split('');
    
  cw_start(call);
  }
}
