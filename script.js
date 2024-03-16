// Fetch the source code of this page
fetch(window.location.href)
  .then(response => response.text())
  .then(html => {
    // Escape HTML special characters to prevent XSS attacks
    const escapedHtml = html.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    // Display the source code on the webpage
    document.getElementById("sourceCode").innerHTML = escapedHtml;
  })
  .catch(error => {
    console.error("Error fetching source code:", error);
  });
