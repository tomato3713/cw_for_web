function loadText(call_type) {
    //ローマ字と数字
    if (call_type == 'Basic') {
        call_name = [
            ['A'], ['B'], ['C'], ['D'], ['E'], ['F'], ['G'],
            ['H'], ['I'], ['J'], ['K'], ['L'], ['M'], ['N'],
            ['O'], ['P'], ['Q'], ['R'], ['S'], ['T'], ['U'],
            ['V'], ['W'], ['X'], ['Y'], ['Z'], ['/'], ['?'],
            ['1'], ['2'], ['3'], ['4'], ['5'],
            ['6'], ['7'], ['8'], ['9'], ['0']
        ];
    }
    //日本のコールサインを格納する。
    if (call_type == 'Ja') {
        // console.log('select japan');
        call_name = [
            [('JA1ZGP').split],
            [('JH1XEX').split],
            [('JG1MJZ').split],
            [('JJ1KKX').split],
            [('JA3KL/2').split],
            [('JI8ISS').split],
            [('JH3ANU').split],
            [('JJ1XZW').split],
            [('JA2KSJ').split]
        ];
    }
    //海外のコールサインを格納する。
    if (call_type == 'DX') {
        call_name = [
            [('EI1JK').split],
            [('KD7RFZ').split],
            [('FR5DZ').split]
          
        ]
    }
    addEndmark(call_name);
  //符号を覚えるモードにする
  //入力された文字を再生するためにフラグを立てる。
  if(call_type == 'Learn'){
  }
}

// used by loadText()
//コールサイン格納用の変数call_nameのそれぞれのコールサインの最後にENDをつける。
function addEndmark(call_name) {
    for (var i = 0; i <= call_name.length - 1; i++) {
        var length = call_name[i].length;
        call_name[i][length] = 'END';
    }
}

//modeを変更したときにコールサイン格納用の変数をからにする。
function delcall() {
    call_name.splice(call_name.length - 1, call_name);
}


//ラジオボタンが変更されたときに格納されているコールサインを更新する。
function RadioButton_changed(e) {
    loadText(e.target.value);
}
