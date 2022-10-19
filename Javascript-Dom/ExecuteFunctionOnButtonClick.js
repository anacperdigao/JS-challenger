// The Javascript function handleClick fills the input field with the words Hello World. 
// But, there is no code to execute this function.
// Complete the existing code below such that the function is called when the button is clicked. 
// Verify by clicking the button.


const button = document.getElementById('button');
const input = document.getElementById('input');

const handleClick = () => {
  input.value = 'Hello World';
};

// type in your code here

button.addEventListener('click', handleClick)