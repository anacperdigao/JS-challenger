// Write a function that takes two arrays (a and b) as arguments
// Create an object that has properties with keys 'a' and corresponding values 'b'
// Return the object

function myFunction (a, b) {
    
    return console.log(Object.assign(...a.map((k, i)=>({[k]: b[i]}) )));
}

myFunction(['a','b','c'],[1,2,3])
myFunction(['w','x','y','z'],[10,9,5,2])
myFunction([1,'b'],['a',2])

/* RESPOSTA NODE.JS

Info: Start process (12:24:52)
{ a: 1, b: 2, c: 3 }
{ w: 10, x: 9, y: 5, z: 2 }
{ '1': 'a', b: 2 }
Info: End process (12:24:53)
*/