
function addRow() {
  var table = document.querySelector('.changer'); // Get the table element
  var newRow = table.insertRow(table.rows.length); // Insert a new row at the end of the table
  
  // Add cells to the new row
  for (var i = 0; i < table.rows[0].cells.length; i++) {
    var newCell = newRow.insertCell(i);
    newCell.innerHTML = '<input type="text" placeholder="' + table.rows[0].cells[i].querySelector('input').placeholder + '">';
  }
  
  var deleteIconCell = newRow.insertCell(); // Add a cell for delete icon
  deleteIconCell.style.border = 'none';
  deleteIconCell.style.outline = 'none';
  deleteIconCell.innerHTML = '<i class="fa-regular fa-circle-xmark fa-2xl delete-icon"></i>';
  
  // Add event listener to the delete icon
  var deleteIcon = deleteIconCell.querySelector('.delete-icon');
  deleteIcon.addEventListener('click', function () {
    var row = this.parentNode.parentNode;
    row.parentNode.removeChild(row);
  });
  
  // Retrieve the input fields for the new row
  var firstExaminerInput = newRow.querySelector('td:nth-child(4) input');
  var secondExaminerInput = newRow.querySelector('td:nth-child(5) input');
  var thirdExaminerInput = newRow.querySelector('td:nth-child(6) input');
  
  // Set the initial background color to 'bg-secondary'
  thirdExaminerInput.classList.add('bg-secondary');
  
  // Disable the third examiner input field initially
  thirdExaminerInput.disabled = true;
  
  // Add event listeners to the 1st and 2nd examiner input fields
  firstExaminerInput.addEventListener('input', handleExaminerInputChange);
  secondExaminerInput.addEventListener('input', handleExaminerInputChange);
  
  function handleExaminerInputChange() {
    var firstExaminerValue = parseFloat(firstExaminerInput.value);
    var secondExaminerValue = parseFloat(secondExaminerInput.value);
  
    // Calculate the difference between the two numbers
    var difference = Math.abs(firstExaminerValue - secondExaminerValue);
  
    // Enable or disable the 3rd examiner input field based on the difference
    if (difference >= 12) {
      thirdExaminerInput.disabled = false;
      thirdExaminerInput.classList.remove('bg-secondary');
      thirdExaminerInput.style.backgroundColor = 'white';
    } else {
      thirdExaminerInput.disabled = true;
      thirdExaminerInput.classList.add('bg-secondary');
      thirdExaminerInput.style.backgroundColor = '';
    }
  }
}

// Disabling
const examiner1Input = document.getElementById('examiner1');
const examiner2Input = document.getElementById('examiner2');
const examiner3Input = document.getElementById('examiner3');

examiner1Input.addEventListener('input', enableThirdExaminer);
examiner2Input.addEventListener('input', enableThirdExaminer);

function enableThirdExaminer() {
  const examiner1Value = parseFloat(examiner1Input.value) || 0;
  const examiner2Value = parseFloat(examiner2Input.value) || 0;
  const diff = Math.abs(examiner1Value - examiner2Value);

  if (examiner1Value && examiner2Value && diff >= 12) {
    examiner3Input.disabled = false;
    examiner3Input.classList.remove('bg-secondary');
    examiner3Input.style.backgroundColor = 'white';
  } else {
    examiner3Input.disabled = true;
    examiner3Input.classList.add('bg-secondary');
    examiner3Input.style.backgroundColor = '';
  }
}

//
function browseFile() {
  var fileInput = document.createElement('input');
  fileInput.type = 'file';
  fileInput.addEventListener('change', handleFileSelect);
  fileInput.click();
}

function handleFileSelect(event) {
  var file = event.target.files[0];
  displayFileName(file.name);
}

function handleFileDrop(event) {
  event.preventDefault();
  var file = event.dataTransfer.files[0];
  displayFileName(file.name);
}

function displayFileName(fileName) {
  var box = document.querySelector('.shob-four');
  box.querySelector('h5').textContent = fileName;
}

// Function to show the message box
function showMessage() {
  var messageBox = document.getElementById('message-box');
  messageBox.classList.remove('hide');
}

// Wait for 5 seconds and show the message box
setTimeout(showMessage, 5000);

// Add event listeners to the stars for rating
var stars = document.querySelectorAll('.rating i');
var messageBox = document.getElementById('message-box');
var selectedRating;

stars.forEach(function(star, index) {
  star.addEventListener('click', function() {
    var rating = this.getAttribute('data-rating');
    console.log('Selected rating: ' + rating);

    // Set the selected rating
    selectedRating = rating;

    // Highlight the selected stars
    stars.forEach(function(star, i) {
      if (i <= index) {
        star.classList.add('selected');
      } else {
        star.classList.remove('selected');
      }
    });

    // Hide the message box after selecting a rating
    messageBox.classList.add('hide');
    messageBox.classList.remove('hide');
    // Show the thank you message
    var thankYouMessage = document.createElement('div');
    thankYouMessage.classList.add('thank-you-message');
    thankYouMessage.innerHTML = '<h3 class=text-center>Thank you for rating!</h3><img style="width: 100px;"class="d-block m-auto" src="https://em-content.zobj.net/source/animated-noto-color-emoji/356/smiling-face_263a-fe0f.gif">';
    messageBox.innerHTML = '';
    messageBox.appendChild(thankYouMessage);
    setTimeout(function() {
      messageBox.parentNode.removeChild(messageBox);
    }, 2000);
  });
});
// number check
