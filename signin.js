document.addEventListener("DOMContentLoaded", function () {
  const signInBtn = document.getElementById("sign-in-btn");

  if (!signInBtn) {
    console.error("Sign-in button not found!");
    return;
  }

  signInBtn.addEventListener("click", function () {
    // Optional: Show success alert
    showAlert("Redirecting to dashboard...", "success");

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1000);
  });
});

// Reusable alert function
function showAlert(message, type = "success") {
  const alertBox = document.getElementById("alert-container");
  if (!alertBox) return;

  alertBox.textContent = message;
  alertBox.className = `alert-container alert-${type} show`;

  setTimeout(() => {
    alertBox.classList.remove("show");
  }, 3000);
}
