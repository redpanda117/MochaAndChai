"use strict";

const expect = require("chai").expect;
const makeAlphabet = require("../alphabetOrder.js");

describe("makeAlphabet", function() {
    it("put the letters in alphabetical order", function() {
      expect(makeAlphabet("nguyen")).to.equal("egnnuy");
    });

    it("put the letters in alphabetical order ignore space and made lowercase", function() {
          expect(makeAlphabet("Tina Nguyen")).to.equal("aeginnntuy");
        });
    it("remove all non letter in the string", function(){
          expect(makeAlphabet("fg4ab12h%")).to.equal("abfgh");
    });    
});