// Write a function that takes an array (a) as argument
// Extract the last 3 elements of 'a'
// Return the resulting array
function myFunction (a) {

    return console.log(a.slice(-3))
}

myFunction([1,2,3,4])
myFunction([5,4,3,2,1,0])
myFunction([99,1,1])

/* RESPOSTA NODE.JS

Info: Start process (15:13:02)
[ 2, 3, 4 ]
[ 2, 1, 0 ]
[ 99, 1, 1 ]
Info: End process (15:13:02)
*/