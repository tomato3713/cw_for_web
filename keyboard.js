function keyboardButtonCheck(e) {
    var target = e.target;
    if (target.value == "del") {
        ClickOnDel();
    } else {
        ClickOn(target.value);
    }
}
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

function ClickOnDel(){
    var Enter_Call = (document.getElementById("Box").value).split('');
    //delete the last char
    Enter_Call.pop();
    document.getElementById("Box").value = Enter_Call.join('');
}