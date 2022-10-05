// Write a function that takes an array of numbers as argument
// Return the number of negative values in the array

function myFunction (a) {

    return console.log(a.filter(valor => valor < 0).length)
}

myFunction([1,-2,2,-4])
myFunction([0,9,1])
myFunction([4,-3,2,1,0])

/* RESPOSTA NODE.JS

Info: Start process (09:23:07)
2
0
1
Info: End process (09:23:07)
*/