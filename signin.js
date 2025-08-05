document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  if (!form) {
    console.error("Sign-in form not found!");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailInput = document.getElementById("email").value.trim();
    const passwordInput = document.getElementById("password").value;

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      showAlert("No user found. Please sign up first.", "error");
      return;
    }

    if (
      storedUser.email === emailInput &&
      storedUser.password === passwordInput
    ) {
      showAlert("Login successful!", "success");
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1000);
    } else {
      showAlert("Invalid email or password.", "error");
    }
  });
});

// Show alert function (insert once globally or import it)
function showAlert(message, type = "success") {
  const alertBox = document.getElementById("alert-container");
  if (!alertBox) return;

  alertBox.textContent = message;
  alertBox.className = `alert-container alert-${type} show`;

  setTimeout(() => {
    alertBox.classList.remove("show");
  }, 3000);
}