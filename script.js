// Change text content dynamically
const changeTextBtn = document.getElementById('change-text-btn');
const textElement = document.getElementById('change-text');

changeTextBtn.addEventListener('click', () => {
    textElement.textContent = "The text has been changed successfully!";
});

// Modify CSS styles via JavaScript
const changeStyleBtn = document.getElementById('change-style-btn');
const styleDemo = document.getElementById('style-demo');

changeStyleBtn.addEventListener('click', () => {
    styleDemo.style.backgroundColor = '#4CAF50';
    styleDemo.style.color = 'white';
    styleDemo.style.padding = '20px';
    styleDemo.style.borderRadius = '8px';
    styleDemo.textContent = "Styles have been modified!";
});

// Add or remove an element when a button is clicked
const toggleElementBtn = document.getElementById('toggle-element-btn');
const toggleElement = document.getElementById('toggle-element');

toggleElementBtn.addEventListener('click', () => {
    if (toggleElement.style.display === 'none') {
        toggleElement.style.display = 'block';
        toggleElementBtn.textContent = 'Toggle Element';
    } else {
        toggleElement.style.display = 'none';
        toggleElementBtn.textContent = 'Bring Back Element';
    }
});