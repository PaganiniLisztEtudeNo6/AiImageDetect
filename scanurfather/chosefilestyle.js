function handleFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    
    if (file) {
        console.log(`Selected file: ${file.name}`);
        // Here you can add code to handle the file, e.g., upload it to a server
    } else {
        console.log('No file selected');
    }
}

function myFunction() {
  document.getElementById("myFile").click();
}
