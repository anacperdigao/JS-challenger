// Make the balloons pop by hovering over them.
// Extend the JavaScript code below to interact with the displayed HTML elements. 
// Every time you hover over a balloon, it should become invisible.
// Your goal is to pop all the balloons one after the other.

/* HTML

<ul id="list">
    <li/>
    <li/>
    <li/>
    <li/>
    <li/>
    <li/>
    <li/>
    <li/>
    <li/>
    <li/>
</ul>

*/


const list = document.getElementById('list');

list.childNodes.forEach(elemento => elemento.addEventListener('mouseover', () => elemento.setAttribute('hidden','true')))
