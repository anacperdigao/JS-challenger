// In this scenario the existing code listens to a click on the button. 
// When the button is clicked, the function changeInput is triggered. 
// changeInput tries to select an input field with id inputEl. 
// But, the existing input field does not have this id. 
// Add some Javascript code to add the id inputEl to the existing input field.
// Verify that your code works by clicking the button.

const button = document.querySelector('#wrapper button');

const changeInput = () => {
  const input = document.querySelector('#inputEl');
  if(input) {
    input.value = 'Hello World';
  }
};

button.addEventListener('click', changeInput);

//Resposta
document.querySelector('#wrapper input').setAttribute('id', 'inputEl');