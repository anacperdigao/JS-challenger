// Write a function that takes a string as argument
// Extract the last 3 characters from the string
// Return the result
function myFunction(str) {

    return str.slice(-3) 
}

console.log(myFunction('abcdefg'))
console.log(myFunction('1234'))
console.log(myFunction('fgedcba'))

/*RESPOSTA NODE.JS

Info: Start process (18:35:02)
efg
234
cba
Info: End process (18:35:02)
*/