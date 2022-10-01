// Write a function that takes an object (a) and a string (b) as argument
// Return true if the object has a property with key 'b'
// Return false otherwise
// Tipp: test case 3 is a bit tricky because the value of property 'z' is undefined
// But the property itself exists

function myFunction (a, b) {

    //return console.log(a.hasOwnProperty(b))
    return console.log(b in a)
}


myFunction({a:1,b:2,c:3},'b')
myFunction({x:'a',y:'b',z:'c'},'a')
myFunction({x:'a',y:'b',z:undefined},'z')

/* RESPOSTA NODE.JS

Info: Start process (14:59:53)
true
false
true
Info: End process (14:59:53)
 */