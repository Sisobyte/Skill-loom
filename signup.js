document.addEventListener("DOMContentLoaded", function () {
  const signUpBtn = document.getElementById("sign-up-btn");

  if (!signUpBtn) {
    console.error("Sign-up button not found!");
    return;
  }

  signUpBtn.addEventListener("click", function () {
    showAlert("Creating demo account... Redirecting to dashboard", "success");

    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 1500);
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
