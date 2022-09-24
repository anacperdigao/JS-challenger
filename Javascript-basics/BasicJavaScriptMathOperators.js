// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tipp: mind the order
function myFunction (a, b, c, d, e, f) {

    return console.log(((((a + b)-c)*d)/e)**f)
}

myFunction(6,5,4,3,2,1)
myFunction(6,2,1,4,2,3)
myFunction(2,3,6,4,2,3)

/*RESULTADO NODE.JS
Info: Start process (12:12:15)
10.5
2744
-8
Info: End process (12:12:15)
*/