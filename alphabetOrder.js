"use strict";
const should = require("chai").should();

function makeAlphabet(str) { 
    const arr = str.toLowerCase().split(''),
        alpha = arr.sort().join('').replace(/\s+/g, '');
    return alpha; 
}

console.log(makeAlphabet("Tina Nguyen"));
module.exports = makeAlphabet;