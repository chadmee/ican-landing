// Read the content of your HTML file
fetch('https://www.icandrink.wtf/user/documents/upload/index.html')
  .then(response => response.text())
  .then(htmlContent => {
    // Replace the entire content of the current HTML file
    document.documentElement.innerHTML = htmlContent;
  })
  .catch(error => console.error('Error loading HTML file:', error));
