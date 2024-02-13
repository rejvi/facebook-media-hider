let mediaHidden = true; // Initial state: media is hidden
let isFacebookPage = false;
if (window.location.hostname === "www.facebook.com") {
  isFacebookPage = true;
}

// Function to hide images and videos
function hideImagesAndVideos() {
  if (!isFacebookPage) {
    return; 
  }
// Apply the visibility state
  const displayStyle = mediaHidden ? 'none' : 'block';
  document.querySelectorAll('img').forEach(img => img.style.display = displayStyle);
  document.querySelectorAll('video').forEach(video => video.style.display = displayStyle);

}

hideImagesAndVideos();

// Listen for scroll events to hide images and videos when the user scrolls
window.addEventListener('scroll', hideImagesAndVideos);


// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === 'toggleMediaVisibility') {
    mediaHidden = request.mediaHidden;
    hideImagesAndVideos();
  }
});