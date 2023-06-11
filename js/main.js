function showLoader(url) {
    // Display the loader element
    var loader = document.createElement('div');
    loader.className = 'loader-overlay';
    document.body.appendChild(loader);
    // Delay the page navigation
    setTimeout(function() {
      window.location.href = url;
    }, 2000); 
    // Delay time in milliseconds (2 seconds in this example)
  }
  // Adding sound
  function playClickSound() {
    var audio = new Audio('../music/mouse.mp3');
    audio.play();
  }