// Write a function that takes an array (a) and a value (b) as argument
// The function should remove all elements equal to 'b' from the array
// Return the filtered array

function myFunction (a, b) {
    
    return console.log(a.filter(valor => valor !== b))
}


myFunction([1,2,3], 2)
myFunction([1,2,'2'], '2')
myFunction([false,'2',1], false)
myFunction([1,2,'2',1], 1)

/* RESPOSTA NODE.JS

Info: Start process (12:19:11)
[ 1, 3 ]
[ 1, 2 ]
[ '2', 1 ]
[ 2, '2' ]
Info: End process (12:19:11)
 */