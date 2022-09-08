"use strict"

// JSON -> JavaScript Object Notation

var person = {
    name: 'Alexis', 
    twitter: 'alexismcode'
};

var persons = [
    {
        name: 'Juan', 
        twitter: 'jdCodec'
    },
    {
        name: 'Erick', 
        twitter: 'easpluS'
    },
    {
        name: 'Luisa', 
        twitter: 'luisaEP'
    },
    person
];

var personJSON = JSON.stringify(person);

var newPerson = JSON.parse(personJSON);
