// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting
function myFunction (a) {

    return console.log(Array.from(String(a), Number));
    //Outra opção 
    //const string = a + '';
    //const strings = string.split('');
    //return strings.map(digit => Number(digit))
}

myFunction(10)
myFunction(931)
myFunction(193278)

/* RESPOSTA NODE.JS

Info: Start process (11:50:32)
[ 1, 0 ]
[ 9, 3, 1 ]
[ 1, 9, 3, 2, 7, 8 ]
Info: End process (11:50:32)
*/