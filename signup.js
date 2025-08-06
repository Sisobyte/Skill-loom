document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("signup-form");

  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!name || !email || !password) {
      showAlert("Please fill in all fields.", "error");
      return;
    }

    // Simulate a successful signup — for demo only
    showAlert("Sign-up successful! (Demo mode)", "success");

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
