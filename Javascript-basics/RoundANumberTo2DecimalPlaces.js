// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number
function myFunction (a) {

    return console.log(a.toFixed(2))
    
}

myFunction(2.12397)
myFunction(3.136)
myFunction(1.12397)
myFunction(26.1379)

/* RESULTADO NODE.JS

Info: Start process (12:58:24)
2.12
3.14
1.12
26.14
Info: End process (12:58:24)
*/