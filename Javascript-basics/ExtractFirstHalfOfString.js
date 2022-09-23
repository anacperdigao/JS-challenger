// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result
function myFunction (a) {

    return console.log(a.slice(0,a.length/2));
}

myFunction('abcdefgh')
myFunction('1234')
myFunction('gedcba')

/* RESULTADO NODE.JS

Info: Start process (13:20:42)
abcd
12
ged
Info: End process (13:20:42)
*/