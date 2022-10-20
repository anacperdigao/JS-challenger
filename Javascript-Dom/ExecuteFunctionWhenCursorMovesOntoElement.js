// The Javascript function changeText changes the text inside the circle. 
// But again, there is no code to execute this function.
// Complete the existing code below such that the function is called when the cursor moves onto the circle. 
// Verify that your code works by hovering over the circle.

const element = document.getElementById('element');

const changeText = () => {
  element.innerText = 'Thanks!';
};

// type in your code here

element.addEventListener("mouseover", changeText);