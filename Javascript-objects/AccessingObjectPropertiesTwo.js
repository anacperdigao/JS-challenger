// Write a function that takes an object with two properties as argument
// It should return the value of the property with key 'prop-2'
// Tipp: you might want to use the square brackets property accessor

function myFunction (obj) {

    return console.log(obj['prop-2'])
}

myFunction({  one: 1,  'prop-2': 2})
myFunction({  'prop-2': 'two',  prop: 'test'})

/* RESPOSTA NODE.JS

Info: Start process (16:32:18)
2
two
Info: End process (16:32:18)
*/