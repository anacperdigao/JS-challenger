// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result
function myFunction (a) {

    return a.slice(3)
}

console.log(myFunction('abcdefg'))
console.log(myFunction('1234'))
console.log(myFunction('fgedcba'))

/* RESULTADO NODE.JS

Info: Start process (10:34:28)
defg
4
dcba
Info: End process (10:34:28)
*/