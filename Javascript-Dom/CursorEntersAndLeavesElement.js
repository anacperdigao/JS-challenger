// In this scenario we want the color of the circle to change depending on the type of cursor movement. 
// Use the function toggleColor to turn the circle orange when the cursor moves onto it. 
// Reuse the same function to turn it black when the cursor leaves it.
// The tricky part is that you have to call toggleColor with different values for the parameter isEntering. 
// Verify that your code is working by hovering the circle with the mouse cursor and leaving it again.

const element = document.querySelector('#element');

const toggleColor = (isEntering) => {
  element.style.background = isEntering ? 'orange' : 'black';
};

// type in your code here

element.addEventListener('mouseenter', () => toggleColor(true));
element.addEventListener('mouseleave', () => toggleColor(false));