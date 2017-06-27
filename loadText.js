function loadText() {
    if (call_type == 'Basic') {
        call_name = [['A'], ['B'], ['C'], ['D'],
        ['E'], ['F'], ['G'],
        ['H'], ['I'], ['J'], ['K'], ['L'], ['M'], ['N'],
        ['O'], ['P'], ['Q'], ['R'], ['S'], ['T'], ['U'],
        ['V'], ['W'], ['X'], ['Y'], ['Z'], ['/'], ['?']];
    }
    if (call_type == 'Ja') {
        // console.log('select japan');
        call_name = [['J', 'A', '1', 'Z', 'G', 'P'],
                     ['J', 'H', '1', 'X', 'E', 'X'],
                     ['J', 'G', '1', 'M', 'J', 'Z'],
                     ['J', 'J', '1', 'K', 'K', 'X'],
                     ['J', 'A', '3', 'K', 'L', '/' ,'2'],
                     ['J', 'I', '8', 'I', 'S', 'S'],
                     ['J', 'H', '3', 'A', 'N', 'U'],
                     ['J', 'J', '1', 'X', 'Z', 'W']
                     ];
    }
    if (call_type == 'DX') {
        // console.log('select DX');
    }
    addEndmark(call_name);
    return call_name;
}

// used by loadText()
function addEndmark(call_name) {
    // add the END mark(delete?)
    for (var i = 0; i <= call_name.length - 1; i++) {
        var length = call_name[i].length;
        call_name[i][length] = 'END';
    }
}

//radio button
var call_type='Basic';

function RadioButton_changed(e) {
    var target = e.target;
    call_type = target.value;
    loadText();
}