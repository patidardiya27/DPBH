// background.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "blockDarkPattern") {
    // Implement logic to block dark patterns
    console.log("Blocking dark pattern...");
    // You can use the chrome.webRequest API to block specific requests or manipulate the DOM to hide elements.
  }
});
