// Write a function that takes an array of strings as argument
// Return the longest string

function myFunction (arr) {

    return console.log(arr.reduce((savedText, text) => (text.length > savedText.length ? text : savedText)))
}

myFunction(['help', 'me'])
myFunction(['I', 'need', 'candy'])

/* RESPOSTA NODE.JS

Info: Start process (10:26:05)
help
candy
Info: End process (10:26:05)
*/