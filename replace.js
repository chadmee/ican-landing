// Fetches the html file
fetch('https://www.icandrink.wtf/user/documents/upload/index.html')
  .then(response => response.text())
  .then(htmlContent => {
    // Replace all html data with ones from file
    document.documentElement.innerHTML = htmlContent;
  })
  .then(getScript('https://www.icandrink.wtf/user/documents/upload/script.js'))
  // In case anything fucks up (shoptet bruh)
  .catch(error => console.error('Error loading HTML file:', error));


  $(document).ready(function)