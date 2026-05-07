
// 1. Select the necessary elements from the HTML
const lampShade = document.getElementById('lamp-shade');
const body = document.body;
const chainContainer = document.getElementById('chain-container');

// 2. Initialize the click sound effect
// Ensure you have a file named 'click.mp3' in your project folder
const clickSound = new Audio('click.wav'); 

// 3. Handle the 'Pulling' action (When the mouse is pressed down)
chainContainer.addEventListener('mousedown', () => {
    // This adds the 'pulling' class to trigger the wire stretching in CSS
    chainContainer.classList.add('pulling');
});

// 4. Handle the 'Release' action (When the mouse is released)
chainContainer.addEventListener('mouseup', () => {
    // Return the wire to its original length
    chainContainer.classList.remove('pulling');

    // Reset audio and play the click sound
    clickSound.currentTime = 0; // Allows rapid clicking
    clickSound.play();

    // Toggle the lamp shade light and the room background
    lampShade.classList.toggle('on');
    body.classList.toggle('light-on');
});