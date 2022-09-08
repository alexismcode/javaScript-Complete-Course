"use strict"

//*****************************
//*** Logical Operators 

var valA = 10;
var valB = 20;

//AND OPERATOR &&
var and = (valA > 10 && valB > 10);
console.log(`The result of the evaluation AND: ${and}`);

//OR OPERATOR ||
var or = (valA > 10 || valB > 10);
console.log(`The result of the evaluation OR: ${or}`);

//NOT OPERATOR !
var not = !(valA > 10);
console.log(`The result of the evaluation NOT: ${not}`);
