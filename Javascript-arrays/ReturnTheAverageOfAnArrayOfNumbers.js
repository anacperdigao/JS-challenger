// Write a function that takes an array of numbers as argument
// It should return the average of the numbers

function myFunction (arr) {

    return console.log((arr.reduce((acumulador, valor) => acumulador = (acumulador + valor)))/arr.length)
};

myFunction([10,100,40])
myFunction([10,100,1000])
myFunction([-50,0,50,200])

/* RESPOSTA NODE.JS

Info: Start process (12:36:39)
50
370
50
Info: End process (12:36:39)
*/