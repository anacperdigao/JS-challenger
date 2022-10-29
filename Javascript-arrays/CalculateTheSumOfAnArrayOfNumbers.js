// Write a function that takes an array of numbers as argument
// It should return the sum of the numbers


function myFunction (a) {

    return console.log(a.reduce((total, valor) => total += valor, 0 ))
}

myFunction([10,100,40])
myFunction([10,100,1000,1])
myFunction([-50,0,50,200])

/* Resposta Node.js
Info: Start process (11:43:51)
150
1111
200
Info: End process (11:43:51)

*/