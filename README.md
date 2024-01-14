<h1 align="center">ICanDrink.wtf Landing Page</h1>

<img src="https://img.shields.io/badge/license-MIT-blue.svg" align="center">

<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white" href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" align="center">
img src="https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white" href="https://developer.mozilla.org/en-US/docs/Web/CSS" align="center">

<p align="center">Welcome to the official repository for the ICanDrink.wtf landing page. This repository contains the source code for the landing page, as well as a script designed for use with Shoptet to replace all HTML content on a given page.</p>
<br>
<br>

## Replacement Script Usage

To integrate the replacement script, follow the example usage below:

```javascript
// Fetches the HTML file (from URL)
fetch('https://www.icandrink.wtf/user/documents/upload/index.html')
  .then(response => response.text())
  .then(htmlContent => {
    // Replace all HTML data with ones from the file
    document.documentElement.innerHTML = htmlContent;
  })
  // Error handling
  .catch(error => console.error('Error loading HTML file:', error));
```

## Contributing

All contributions to this repository are welcome! If you plan to contribute, please adhere to the following guidelines:

- Notify the author before committing any changes, listing all modifications made.
- Perform commits on a custom branch, avoiding direct commits to the **main** branch.
- Ensure all changes align with the repository's coding standards and practices.

## Contact

For inquiries or additional information, please contact us at [krystof@bonghemia.cz](mailto:krystof@bonghemia.cz).

## Support

If you encounter any issues or have questions, please check our [FAQ](docs/FAQ.md) or open a [new issue](https://github.com/chadmee/ican-landing/issues).

Thank you for considering contributing to the ICanDrink.wtf landing page project.
