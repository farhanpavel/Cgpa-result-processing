function calculateCGPA() {
  var tableRows = document.querySelectorAll('.changer tr'); // Get all rows in the table
  var totalSum = 0;
  var totalSum2 = 0;
   var totalCredit=0;
   var flag2=0;
   var flag = 0;
  // Iterate through each row and calculate total marks
  tableRows.forEach(function(row) {
    
    var first = parseFloat(row.querySelector('td:nth-child(4) input').value);
    var second = parseFloat(row.querySelector('td:nth-child(5) input').value);
    var third = parseFloat(row.querySelector('td:nth-child(6) input').value);
    var credit = parseFloat(row.querySelector('td:nth-child(3) input').value);
    var incourseMark = parseFloat(row.querySelector('input[type="text"][placeholder="Incourse Mark"]').value);
    // var final = parseFloat(row.querySelector('td:nth-child(7) input').value);

    // Check if the values are valid numbers
    if(credit==1.5 && !isNaN(credit)){
      totalSum=incourseMark+first;
       var lastCell2 = row.querySelector('td:nth-child(7)'); 
       lastCell2.innerText = totalSum.toFixed(2);
      if (totalSum >= 80 && totalSum <= 100) {
        totalSum = 4;
    } else if (totalSum >= 75 && totalSum < 80) {
        totalSum = 3.75;
    } else if (totalSum >= 70 && totalSum < 75) {
        totalSum = 3.5;
    } else if (totalSum >= 65 && totalSum < 70) {
        totalSum = 3.25;
    } else if (totalSum >= 60 && totalSum < 65) {
        totalSum = 3;
    } else if (totalSum >= 55 && totalSum < 60) {
        totalSum = 2.75;
    } else if (totalSum >= 50 && totalSum < 55) {
        totalSum = 2.5;
    } else if (totalSum >= 45 && totalSum < 50) {
        totalSum = 2.25;
    } else if (totalSum >= 40 && totalSum < 45) {
        totalSum = 2;
    } else {
        totalSum = 0;
        flag = 1;
        flag2=1;
    }
    totalCredit+=credit;
    totalSum2+=totalSum*credit;
    }


    else if(credit==0.5 ||credit==1 && !isNaN(credit)){
      totalSum=first;
       var lastCell3 = row.querySelector('td:nth-child(7)'); 
       lastCell3.innerText = totalSum.toFixed(2);
      if (totalSum >= 80 && totalSum <= 100) {
        totalSum = 4;
    } else if (totalSum >= 75 && totalSum < 80) {
        totalSum = 3.75;
    } else if (totalSum >= 70 && totalSum < 75) {
        totalSum = 3.5;
    } else if (totalSum >= 65 && totalSum < 70) {
        totalSum = 3.25;
    } else if (totalSum >= 60 && totalSum < 65) {
        totalSum = 3;
    } else if (totalSum >= 55 && totalSum < 60) {
        totalSum = 2.75;
    } else if (totalSum >= 50 && totalSum < 55) {
        totalSum = 2.5;
    } else if (totalSum >= 45 && totalSum < 50) {
        totalSum = 2.25;
    } else if (totalSum >= 40 && totalSum < 45) {
        totalSum = 2;
    } else {
        totalSum = 0;
        flag = 1;
        flag2=1;
    }
    totalCredit+=credit;
    totalSum2+=totalSum*credit;
    }

    else if (!isNaN(first) && !isNaN(second) && !isNaN(incourseMark)) {
      totalSum = incourseMark;

          var pavel = Math.abs(first - second);

          if (pavel >= 12 && !isNaN(first) && !isNaN(second)) {
              var pavel2 = Math.abs(third - first);
              var pavel3 = Math.abs(third - second);

              if (pavel2 > pavel3 && !isNaN(third) && !isNaN(second)) {
                  totalSum += (second + third) / 2;
              } else if (!isNaN(third) && !isNaN(second)) {
                  totalSum += (first + third) / 2;
              } else {
                  totalSum += first;
              }
          } else {
              if (isNaN(third) && isNaN(second)) {
                  totalSum += first;
              } else {
                  totalSum += (first + second) / 2;
              }
          }
          var lastCell = row.querySelector('td:nth-child(7)'); 
          lastCell.innerText = totalSum.toFixed(2);


          if (totalSum >= 80 && totalSum <= 100) {
              totalSum = 4;
          } else if (totalSum >= 75 && totalSum < 80) {
              totalSum = 3.75;
          } else if (totalSum >= 70 && totalSum < 75) {
              totalSum = 3.5;
          } else if (totalSum >= 65 && totalSum < 70) {
              totalSum = 3.25;
          } else if (totalSum >= 60 && totalSum < 65) {
              totalSum = 3;
          } else if (totalSum >= 55 && totalSum < 60) {
              totalSum = 2.75;
          } else if (totalSum >= 50 && totalSum < 55) {
              totalSum = 2.5;
          } else if (totalSum >= 45 && totalSum < 50) {
              totalSum = 2.25;
          } else if (totalSum >= 40 && totalSum < 45) {
              totalSum = 2;
          } else {
              totalSum = 0;
              flag = 1;
              flag2=1;
          }
          totalCredit+=credit;
          totalSum2+=totalSum*credit;

    }
  });
   totalSum2=(totalSum2/totalCredit);
   if(flag2==0)
   {
  // Display the total marks in the result div
  document.getElementById('result').innerHTML = 'CGPA: ' + totalSum2.toFixed(2);
   }
  else
  {

    document.getElementById('result').innerHTML = 'Failed...!!!';
  }
}




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


var firstExaminerInput = newRow.querySelector('td:nth-child(4) input');
var secondExaminerInput = newRow.querySelector('td:nth-child(5) input');
var thirdExaminerInput = newRow.querySelector('td:nth-child(6) input');
//edit 

var subjectInput = newRow.querySelector('td:nth-child(1) input');
var incourse = newRow.querySelector('td:nth-child(2) input');

subjectInput.addEventListener('input',another2);
function another2(){
  const subjectvalue = subjectInput.value;
let subjectvalue2=subjectvalue.toUpperCase();

  if (subjectvalue2=="VIVA"){
    secondExaminerInput.disabled = true;
    secondExaminerInput.classList.add('bg-secondary');
    secondExaminerInput.style.backgroundColor = '';
    incourse.disabled = true;
  incourse.classList.add('bg-secondary');
  incourse.style.backgroundColor = '';
  }
  else{
   
    secondExaminerInput.disabled = false;
    secondExaminerInput.classList.remove('bg-secondary');
    secondExaminerInput.style.backgroundColor = 'white';
    incourse.disabled = false;
  incourse.classList.remove('bg-secondary');
  incourse.style.backgroundColor = 'white';
  }
}



//edit3
var creditInput=newRow.querySelector('td:nth-child(3) input');
creditInput.addEventListener('input',another);
function another(){
  const creditValue = parseFloat(creditInput.value);
  if (!isNaN(creditValue) && creditValue==1.5){
    secondExaminerInput.disabled = true;
    secondExaminerInput.classList.add('bg-secondary');
    secondExaminerInput.style.backgroundColor = '';
  }
  else if(subjectvalue2=="VIVA")
  {
   
    secondExaminerInput.disabled = false;
    secondExaminerInput.classList.remove('bg-secondary');
    secondExaminerInput.style.backgroundColor = 'white';
    }
  }





// Set the initial background color to 'bg-secondary'
thirdExaminerInput.classList.add('bg-secondary');


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
  
  //pavel


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

//This part is used for the first line of the manual input .
const examiner1Input = document.getElementById('examiner1');
const examiner2Input = document.getElementById('examiner2');
const examiner3Input = document.getElementById('examiner3');
// pavel 28//10

const creditInput = document.getElementById('credit');
examiner1Input.addEventListener('input', enableThirdExaminer);
examiner2Input.addEventListener('input', enableThirdExaminer);
const subjectInput = document.getElementById('subject');
const incourse = document.getElementById('incourse');
subjectInput.addEventListener('input',another2);
function another2(){
const subjectvalue = subjectInput.value;
let subjectvalue2=subjectvalue.toUpperCase();

if (subjectvalue2=="VIVA"){
  examiner2Input.disabled = true;
  examiner2Input.classList.add('bg-secondary');
  examiner2Input.style.backgroundColor = '';
  incourse.disabled = true;
  incourse.classList.add('bg-secondary');
  incourse.style.backgroundColor = '';
}

else{
 
  examiner2Input.disabled = false;
  examiner2Input.classList.remove('bg-secondary');
  examiner2Input.style.backgroundColor = 'white';
  incourse.disabled = false;
  incourse.classList.remove('bg-secondary');
  incourse.style.backgroundColor = 'white';
  }
  }

creditInput.addEventListener('input',another);
function another(){
const creditValue = parseFloat(creditInput.value);
if (!isNaN(creditValue) && creditValue==1.5){
  examiner2Input.disabled = true;
  examiner2Input.classList.add('bg-secondary');
  examiner2Input.style.backgroundColor = '';
 
}
else if(subjectvalue2!="VIVA")
{
 
  examiner2Input.disabled = false;
  examiner2Input.classList.remove('bg-secondary');
  examiner2Input.style.backgroundColor ='white';
  
}
}
//edit 3





examiner1Input.addEventListener('input', enableThirdExaminer);
examiner2Input.addEventListener('input', enableThirdExaminer);

function enableThirdExaminer() {
const examiner1Value = parseFloat(examiner1Input.value);
const examiner2Value = parseFloat(examiner2Input.value);
const diff = Math.abs(examiner1Value - examiner2Value);

if (!isNaN(examiner1Value) && !isNaN(examiner2Value) && diff >= 12) {
  examiner3Input.disabled = false;
  examiner3Input.classList.remove('bg-secondary');
  examiner3Input.style.backgroundColor = 'white';
} else {
  examiner3Input.disabled = true;
  examiner3Input.classList.add('bg-secondary');
  examiner3Input.style.backgroundColor = '';
}
}
//This part is used for excell file reader

// this Function used to show the message box
function showMessage() {

var messageBox = document.getElementById('message-box');
messageBox.classList.remove('hide');
 // Play the music when it's ready
 var audio = new Audio('../music/Notification.mp3');
 audio.addEventListener('canplaythrough', function() {
   audio.play();
 });

 audio.addEventListener('error', function() {
   console.log('Failed to load the audio file');
 });

 // Start loading the audio
 audio.load();

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
function goToPage(url) {
// Navigate to the specified URL
window.location.href = url;
}