// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result
function myFunction (a) {

    return console.log(a.slice(0, -3));
}

myFunction('abcdefg')
myFunction('1234')
myFunction('fgedcba')

/* RESULTADO NODE.JS

Info: Start process (13:25:26)
abcd
1
fged
Info: End process (13:25:26)
*/