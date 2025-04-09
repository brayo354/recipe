// script.js

// Array of emojis to cycle through
const emojis = ['😋', '🤤', '🍕', '🍔', '🍣'];

// Function to change the emoji with animation effect
function changeEmoji() {
  const emojiElement = document.getElementById('emojiDisplay');
  emojiElement.classList.add('fade-out');  // Add fade-out class

  // Wait for the fade-out transition to finish before changing the emoji
  setTimeout(() => {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    emojiElement.textContent = randomEmoji;
    emojiElement.classList.remove('fade-out'); // Remove fade-out class
  }, 500); // Match this with the duration of the opacity transition
}

// Automatically change the emoji every 3 seconds (3000 milliseconds)
setInterval(changeEmoji, 3000);
