function makeAlphabet(str) { 
    var arr = str.split(''),
        alpha = arr.sort().join('').replace(/\s+/g, '');
    return alpha; 
}

