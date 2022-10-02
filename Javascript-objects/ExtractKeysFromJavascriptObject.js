// Write a function that takes an object (a) as argument
// Return an array with all object keys

function myFunction (a) {

    return console.log(Object.keys(a))
}


myFunction({a:1,b:2,c:3})
myFunction({j:9,i:2,x:3,z:4})
myFunction({w:15,x:22,y:13})

/* RESPOSTA NODE.JS

Info: Start process (09:43:05)
[ 'a', 'b', 'c' ]
[ 'j', 'i', 'x', 'z' ]
[ 'w', 'x', 'y' ]
Info: End process (09:43:05)
*/