// Write a function that takes arguments an arbitrary number of arrays. 
// It should return an array containing the values of all arrays.

function myFunction(...arrays) {
    return console.log(Array.prototype.concat(...arrays))
    //arrays.flat()
}


myFunction([1, 2, 3], [4, 5, 6])
myFunction(['a', 'b', 'c'], [4, 5, 6])
myFunction([true, true], [1, 2], ['a', 'b'])