// Write a function that takes an object as argument
// In some cases the object contains other objects with some deeply nested properties
// Return the property 'b' of object 'a' inside the original object if it exists
// If not, return undefined

function myFunction (obj) {

    return console.log(obj.a ? obj.a.b : undefined)
}

myFunction({a:1})
myFunction({a:{b:{c:3}}})
myFunction({b:{a:1}})
myFunction({a:{b:2}})

/* RESPOSTA NODE.JS

Info: Start process (20:11:58)
undefined
{ c: 3 }
undefined
2
Info: End process (20:11:58)
*/