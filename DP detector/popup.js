document.addEventListener('DOMContentLoaded', function() {
  var blockButton = document.getElementById('blockButton');

  blockButton.addEventListener('click', function() {
    // Implement logic to ask the user for approval and block dark patterns if approved
    var userApproval = confirm("Do you want to block this dark pattern?");
    if (userApproval) {
      // Implement logic to block dark patterns
      chrome.runtime.sendMessage({ action: "blockDarkPattern" });
    }
  });
});
