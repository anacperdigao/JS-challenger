// Write a function that takes an object with two properties as argument
// It should return the value of the property with key country

function myFunction (obj) {
    
    return console.log(obj.country)
}


myFunction({ continent: 'Asia', country: 'Japan' })
myFunction({ country: 'Sweden', continent: 'Europe' })

/* RESULTADO NODE.JS

Info: Start process (14:47:17)
Japan
Sweden
Info: End process (14:47:17)
*/