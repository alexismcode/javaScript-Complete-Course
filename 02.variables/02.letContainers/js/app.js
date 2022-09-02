"use strict"

var name = "Alexis";
//Global variable
console.log(name);

function greet(){
    let name = "alexismcode"
    //Local variable
    console.log(name);

    let age = 19;
    console.log(age);
}
/*
console.log(age); ->scope local
Uncaught ReferenceError: age is not defined
*/
greet();

