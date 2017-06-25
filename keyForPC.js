function keydownAddEventFunc(){
    //if answercheck() is able...
    if(turn == 0){
        document.addEventListener('keydown', keyDownCheckFunc, false);
    }
}

//if C^A is pushed, call answerCheck()
// if Enterkey is pushed, call cw_start and select_signal
function keyDownCheckFunc(e){
    if ( e.ctrlKey == true && (e.KeyCode == 'A' || e.KeyCode =='a') ){

    }
}