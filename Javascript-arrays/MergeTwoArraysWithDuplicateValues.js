// Write a function that takes two arrays as arguments
// Merge both arrays and remove duplicate values
// Sort the merge result in ascending order
// Return the resulting array


function myFunction (a, b) {

    return console.log([... new Set([...a, ...b])].sort((a, b) => a-b))

}

myFunction([1, 2, 3], [3, 4, 5])
myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42])

/* RESPOSTA NODE.JS

Info: Start process (08:19:47)
[ 1, 2, 3, 4, 5 ]
[
  -11, -10,   5, 22,
   41,  42, 333
]
Info: End process (08:19:47)

*/