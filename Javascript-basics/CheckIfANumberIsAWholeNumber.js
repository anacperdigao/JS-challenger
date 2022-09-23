// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false
function myFunction (a) {

    return console.log(Number.isInteger(a));
    //OPCAO: return a - Math.floor(a) === 0;
}

myFunction(4)
myFunction(1.123)
myFunction(1048)
myFunction(10.48)

/* RESPOSTA NODE.JS

Info: Start process (13:57:01)
true
false
true
false
Info: End process (13:57:01)
*/