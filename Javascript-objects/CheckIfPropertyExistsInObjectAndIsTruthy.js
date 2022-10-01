// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b', but only if it has a truthy value
// In other words, it should not be null or undefined or false
// Return false otherwise

function myFunction (a, b) {

    //return console.log(a[b] ? true : false)
    return console.log(Boolean(a[b]))
}

myFunction({a:1,b:2,c:3},'b')
myFunction({x:'a',y:null,z:'c'},'y')
myFunction({x:'a',b:'b',z:undefined},'z')

/* RESPOSTA NODE.JS

Info: Start process (16:34:30)
true
false
false
Info: End process (16:34:30)
*/