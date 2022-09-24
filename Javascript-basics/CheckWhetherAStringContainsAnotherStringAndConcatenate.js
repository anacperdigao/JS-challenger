// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation
function myFunction (a, b) {

    return console.log(a.includes(b) ? b + a : a + b);
    //opcao
    //a.indexOf(b) === -1 ? a + b : b + a
}

myFunction('cheese', 'cake')
myFunction('lips', 's')
myFunction('Java', 'script')
myFunction(' think, therefore I am', 'I')

/* RESULTADO NODE.JS
Info: Start process (12:52:00)
cheesecake
slips
Javascript
I think, therefore I am
Info: End process (12:52:00)
*/