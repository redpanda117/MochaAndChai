"use strict";
const should = require("chai").should();

function makeAlphabet(str) { 
 if(typeof str === 'string' && str.length >= 2){
    //removeNonletter remove all character that are not letters in the string
    //  the [] represents a character (or a number of different possible characters)
    //  the ^ means all characters EXCEPT the ones defined in the brackets
    //  A-Z equals capital letters
    //  a-z equals lowercase letters    
    const removeNonletters = str.replace(/[^A-Za-z]+/g, ''); 
    
    const arr = removeNonletters.toLowerCase().split(''),
        alpha = arr.sort().join('').replace(/\s+/g, '');
    
        return alpha; 
}else{
    console.log ("string only has one letter or not a string (not letters)")
    } 
}

console.log(makeAlphabet("ab4fg12h%"));
module.exports = makeAlphabet;