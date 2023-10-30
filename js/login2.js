document.addEventListener("DOMContentLoaded", function () {
    // Get references to the form elements
    const form = document.querySelector("form");
    const usernameInput = document.getElementById("one");
    const passwordInput = document.getElementById("two");
  
    // Add an event listener for form submission
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the form from submitting in the default way
  
      // Get the values of the username and password fields
      const username = usernameInput.value;
      const password = passwordInput.value;
  
      // Replace this logic with your actual authentication logic
      // This is a basic example for demonstration purposes
      if (username === "pavel" && password === "2059" ) {
        window.location.href = "../templates/premium.html";

      }

      else if (username === "walid" && password === "2046" ) {
        window.location.href = "../templates/premium.html";
      }
      
      else {
        alert("Invalid username or password. Please try again.");
      }
  
      // Reset the form
      form.reset();
    });
  });
  