// Write a function that takes an array of objects as argument. 
// Sort the array by property b in ascending order. 
// Return the sorted array

function myFunction (arr) {

    return console.log(arr.sort((x, y) => x.a - y.b ))
}


myFunction([{a:1,b:2},{a:5,b:4}])
myFunction([{a:2,b:10},{a:5,b:4}])
myFunction([{a:1,b:7},{a:2,b:1}])

/* Resposta Node
Info: Start process (21:26:02)
[ { a: 1, b: 2 }, { a: 5, b: 4 } ]
[ { a: 5, b: 4 }, { a: 2, b: 10 } ]
[ { a: 2, b: 1 }, { a: 1, b: 7 } ]
Info: End process (21:26:02)
 */