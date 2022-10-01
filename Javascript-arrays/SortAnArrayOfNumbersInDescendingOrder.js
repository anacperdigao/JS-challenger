// Write a function that takes an array of numbers as argument
// It should return an array with the numbers sorted in descending order

function myFunction (arr) {

    return console.log(arr.sort((a, b) => b - a))
}

myFunction([1,3,2])
myFunction([4,2,3,1])

/* RESULTADO NODE.JS

Info: Start process (14:31:20)
[ 3, 2, 1 ]
[ 4, 3, 2, 1 ]
Info: End process (14:31:20)
*/