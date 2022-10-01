// Write a function that takes two strings (a and b) as arguments
// Create an object that has a property with key 'a' and a value of 'b'
// Return the object

function myFunction (a, b) {

    return console.log({[a]: b})
}

myFunction('a','b')
myFunction('z','x')
myFunction('b','w')

/* RESPOSTA NODE.JS

Info: Start process (15:24:38)
{ a: 'b' }
{ z: 'x' }
{ b: 'w' }
Info: End process (15:24:38)
*/