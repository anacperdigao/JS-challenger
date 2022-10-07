// Write a function that takes an object (a) as argument
// Return the sum of all object values

function myFunction (a) {

    return console.log(Object.values(a).reduce((acumulador, valor) => (acumulador = acumulador + valor)))
}

myFunction({a:1,b:2,c:3})
myFunction({j:9,i:2,x:3,z:4})
myFunction({w:15,x:22,y:13})

/* RESPOSTA NODE.JS

Info: Start process (11:06:53)
6
18
50
Info: End process (11:06:53)
*/