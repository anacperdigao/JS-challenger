// Write a function that takes an array of strings as argument
// Sort the array elements alphabetically
// Return the result
function myFunction (arr) {

    return console.log(arr.sort())
}

myFunction(['b', 'c', 'd', 'a'])
myFunction(['z', 'c', 'd', 'a', 'y', 'a', 'w'])

/* RESPOSTA NODE.JS

Info: Start process (15:16:49)
[ 'a', 'b', 'c', 'd' ]
[
  'a', 'a', 'c',
  'd', 'w', 'y',
  'z'
]
Info: End process (15:16:49)
*/