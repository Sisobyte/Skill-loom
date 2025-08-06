document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  if (!form) {
    console.error("Sign-in form not found!");
    return;
  }

  // Demo credentials (for testing only)
  const demoUser = {
    email: "demo@skilloom.com",
    password: "123456",
  };

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const emailInput = document.getElementById("email").value.trim();
    const passwordInput = document.getElementById("password").value;

    if (
      emailInput === demoUser.email &&
      passwordInput === demoUser.password
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

// Show alert function
function showAlert(message, type = "success") {
  const alertBox = document.getElementById("alert-container");
  if (!alertBox) return;

  alertBox.textContent = message;
  alertBox.className = `alert-container alert-${type} show`;

  setTimeout(() => {
    alertBox.classList.remove("show");
  }, 3000);
}
