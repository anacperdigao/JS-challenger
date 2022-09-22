// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result
function myFunction(a) {

    return a.slice(0,3)
}

console.log(myFunction('abcdefg'))
console.log(myFunction('1234'))
console.log(myFunction('fgedcba'))

/*RESPOSTA NODE.JS

Info: Start process (19:04:15)
abc
123
fge
Info: End process (19:04:15)

*/