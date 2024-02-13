

let mediaHidden = true; // Initial state: media is hidden

// Function to send a message to content script to toggle media visibility
function toggleMediaVisibility() {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    mediaHidden = !mediaHidden; // Toggle the state
    // Update button text based on the new state
    const buttonText = mediaHidden ? 'Show Media' : 'Hide Media';
    const buttonClass = mediaHidden ? 'show-media' : 'hide-media';
    chrome.tabs.sendMessage(tabs[0].id, { action: 'toggleMediaVisibility', mediaHidden });
    document.getElementById('toggleButton').innerText = buttonText;
    document.getElementById('toggleButton').className = buttonClass;
  });
}
// Set initial button text based on the initial state
document.getElementById('toggleButton').innerText = mediaHidden ? 'Show Media' : 'Hide Media';
document.getElementById('toggleButton').className = mediaHidden ? 'show-media' : 'hide-media';
// Add click event listener to the toggle button
document.getElementById('toggleButton').addEventListener('click', toggleMediaVisibility);
