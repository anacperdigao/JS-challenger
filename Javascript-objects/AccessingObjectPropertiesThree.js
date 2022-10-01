// Write a function that takes an object with two properties and a string as arguments
// It should return the value of the property with key equal to the value of the string

function myFunction (obj, key) {

    return console.log(obj[key]) 
}


myFunction({  continent: 'Asia',  country: 'Japan'}, 'continent')
myFunction({  country: 'Sweden',  continent: 'Europe'}, 'country')

/* RESPOSTA NODE.JS

Info: Start process (16:18:34)
Asia
Sweden
Info: End process (16:18:35)
*/