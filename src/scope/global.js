//Global scope
var fruit = 'Apple';

function bestFruit() {
    console.log(fruit);
}

bestFruit();


function countries() {
    country = 'Mexico'; //varibles without var, let or const are declared on global scope
    console.log(country);
}

countries();
console.log(country);