"use strict"

var symbol1 = Symbol();
/*
var symbol1 = new Symbol();
Uncaught TypeError: Symbol is not a constructor
    at new Symbol
*/
var symbol2 = Symbol();

var envioroment = Symbol('dev');