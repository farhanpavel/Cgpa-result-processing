function browseFile() {
    document.getElementById('fileInput').click();
}

function handleFileSelect(file) {
    var formData = new FormData();
    formData.append('file', file);

    var request = new XMLHttpRequest();
    request.open('POST', '../php/index.php');
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status === 200) {
            // Display any response from the PHP script
            console.log(request.responseText);
            showDoneMessage(); // Call function to show "Done" message
        }
    };
    request.send(formData);

    // Display the file name
    var fileNameElement = document.getElementById('fileName');
    fileNameElement.textContent = file.name;

    // Remove the "Or Drag it in this box" text
    var dragTextElement = document.getElementById('dragText');
    dragTextElement.style.display = 'none';
}

function handleFileDrop(event) {
    event.preventDefault();
    var file = event.dataTransfer.files[0];
    handleFileSelect(file);
}

function showDoneMessage() {
    var doneMessageElement = document.getElementById('doneMessage');
    doneMessageElement.style.display = 'block';
}