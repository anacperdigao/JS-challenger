// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value
function myFunction (a, b) {

    return console.log( a < b ? a / b : a * b );
    /* OPCAO COM IF
    if (a < b){
        return console.log(a/b)
    }else{
        return console.log(a*b)
    }
    */
}

myFunction(10, 100)
myFunction(90, 45)
myFunction(8, 20)
myFunction(2, 0.5)

/* RESULTADO DO NODE.JS

Info: Start process (13:40:24)
0.1
4050
0.4
1
Info: End process (13:40:24)
*/