// Write a function that takes a string (a) and a number (n) as argument
// Return the nth character of 'a'
function myFunction (a, n) {

    return a[n-1]
    //Opção: return a.charAt(n-1)
}

console.log(myFunction('abcd',1))
console.log(myFunction('zyxbwpl',5))
console.log(myFunction('gfedcba',3))

/* RESPOSTA NODE.JS

Info: Start process (18:58:22)
a
w
e
Info: End process (18:58:22)
*/