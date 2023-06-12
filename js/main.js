var loader = null; // Variable to store the loader element

function showLoader(url) {
  // If the loader element already exists, return without creating a new one
  if (loader) {
    return;
  }

  // Display the loader element
  loader = document.createElement('div');
  loader.className = 'loader-overlay';
  document.body.appendChild(loader);

  // Add event listener to detect when the user leaves the current page
  window.addEventListener('beforeunload', function() {
    // Remove the loader element
    if (loader) {
      loader.parentNode.removeChild(loader);
      loader = null;
    }
  });

  // Delay the page navigation
  setTimeout(function() {
    window.location.href = url;
  }, 2000); // Delay time in milliseconds (2 seconds in this example)
}

// Adding sound
function playClickSound() {
  var audio = new Audio('../music/mouse.mp3');
  audio.play();
}
