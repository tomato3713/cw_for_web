function loadText() {
    if (call_type == 'basic') {
        call_name = [['A'], ['B'], ['C'], ['D'],
        ['E'], ['F'], ['G'],
        ['H'], ['I'], ['J'], ['K'], ['L'], ['M'], ['N'],
        ['O'], ['P'], ['Q'], ['R'], ['S'], ['T'], ['U'],
        ['V'], ['W'], ['X'], ['Y'], ['Z'], ['/'], ['?']];
    }
    if (call_type == 'ja') {
        console.log('select japan');
        call_name = [['J', 'A', '1', 'Z', 'G', 'P'],
                     ['J', 'H', '1', 'X', 'E', 'X'],
                     ['J', 'G', '1', 'M', 'J', 'Z'],
                     ];
    }
    if (call_type == 'DX') {
        console.log('select DX');
    }
    addEndmark(call_name);
    return call_name;
}

function addEndmark(call_name) {
    // add the END mark(delete?)
    for (var i = 0; i <= call_name.length - 1; i++) {
        var length = call_name[i].length;
        call_name[i][length] = 'END';
    }
}