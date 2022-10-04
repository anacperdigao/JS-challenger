// Write a function that takes two objects as arguments
// Unfortunately, the property 'b' in the second object has the wrong key
// It should be named 'd' instead
// Merge both objects and correct the wrong property name
// Return the resulting object
// It should have the properties 'a', 'b', 'c', 'd', and 'e'

function myFunction (x, y) {

    return console.log({...Object.assign(y, y['d'] = y['b']), ...x})
    
}

myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })
myFunction({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })

/* RESPOSTA NODE.JS

Info: Start process (17:11:49)
{ c: 3, b: 2, e: 5, d: 4, a: 1 }
{ c: 3, b: 4, e: 2, d: 1, a: 5 }
Info: End process (17:11:49)
*/