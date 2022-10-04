// Write a function that takes an object as argument
// It should return an object with all original object properties
// except for the property with key 'b'

function myFunction (obj) {

    return console.log(Object.assign(obj, delete obj.b))
}

myFunction({ a: 1, b: 7, c: 3 })
myFunction({ b: 0, a: 7, d: 8 })
myFunction({ e: 6, f: 4, b: 5, a: 3 })

/* RESPOSTA NODE.JS

Info: Start process (18:14:33)
{ a: 1, c: 3 }
{ a: 7, d: 8 }
{ e: 6, f: 4, a: 3 }
Info: End process (18:14:33)
*/