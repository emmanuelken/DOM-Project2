//Generate a random hexadecimal color code
function getRandomColor() {
    let characters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += characters[Math.floor(Math.random() * characters.length)];
    }
    return color;
}

// Function to run when the DOM content is fully loaded
function loadColourChanger() {
    // Get the color box and the change color button by ids
    let colorBox = document.getElementById('color-box');
    let changeColorBtn = document.getElementById('change-color-btn');

    //Use event listener for the change color button to change the bg color of the color box to a random color
    changeColorBtn.addEventListener('click', () => {
        colorBox.style.backgroundColor = getRandomColor();
    });
}

// Wait for the DOM content to be loaded before running the function
document.addEventListener('DOMContentLoaded', loadColourChanger);

