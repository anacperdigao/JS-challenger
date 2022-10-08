// Write a function that takes an array (a) and a number (n) as arguments
// It should return the last n elements of a

function myFunction (a, n) {

    return console.log(a.slice(-n))
}

myFunction([1, 2, 3, 4, 5], 2)
myFunction([1, 2, 3], 6)
myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3)

/* RESPOSTA NODE.JS
Info: Start process (12:59:02)
[ 4, 5 ]
[ 1, 2, 3 ]
[ 6, 7, 8 ]
Info: End process (12:59:02)
*/