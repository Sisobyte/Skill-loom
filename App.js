window.addEventListener('DOMContentLoaded', () => {
  loadPage('dashboard');
  attachNavEvents();
  showUserInitials();
  attachLogoutEvents();
});

// Attach nav event handlers
function attachNavEvents() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      const page = link.dataset.page;
      if (page) {
        loadPage(page);

        // Update active state
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        // Hide mobile dropdown after click
        document.getElementById('mobile-dropdown').classList.remove('show');
      }
    });
  });
}

// Load HTML into #page-content and run page-specific logic
function loadPage(page) {
  fetch(`pages/${page}.html`)
    .then(res => res.text())
    .then(data => {
      document.getElementById('page-content').innerHTML = data;

      if (page === 'dashboard') {
        updateGreeting(); // ✅ Run after dashboard page is loaded
      }

      // Reattach logout events for dynamically loaded content
      attachLogoutEvents();
    })
    .catch(err => {
      document.getElementById('page-content').innerHTML = `<p>Failed to load page.</p>`;
    });
}

// Toggle mobile menu
const toggleBtn = document.getElementById('menu-toggle');
const dropdown = document.getElementById('mobile-dropdown');

toggleBtn.addEventListener('click', () => {
  dropdown.classList.toggle('show');
  attachNavEvents(); // Re-attach events if new elements are shown
});

// Show user initials in profile circle (using demo name)
function showUserInitials() {
  const demoName = "Demo User";
  const initials = demoName
    .split(" ")
    .map(n => n[0])
    .join("")
    .toUpperCase();

  const profileEl = document.getElementById("profile-initials");
  if (profileEl) {
    profileEl.textContent = initials;
  }
}

// Show greeting in dashboard (using demo name)
function updateGreeting() {
  const demoName = "Demo User";
  const greetingEl = document.getElementById("greeting");
  if (greetingEl) {
    const firstName = demoName.split(" ")[0];
    greetingEl.innerHTML = `Hi ${firstName} 👋, Ready To Grow Today?`;
  }
}

// Logout logic (just redirects — no storage involved)
function attachLogoutEvents() {
  document.querySelectorAll('.logout').forEach(logoutBtn => {
    logoutBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'signin.html'; // Redirect to sign-in page
    });
  });
}

// Re-attach logout events for dynamically loaded buttons
document.addEventListener('click', () => {
  attachLogoutEvents();
});
