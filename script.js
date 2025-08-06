const toggleBtn = document.getElementById('menu-toggle');
const sidebar = document.getElementById('mobile-sidebar');
const closeBtn = document.getElementById('close-btn');

// Toggle mobile sidebar
toggleBtn.addEventListener('click', () => {
  sidebar.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  sidebar.classList.remove('active');
});

const apprenticeBtn = document.getElementById('apprenticeBtn');
const companyBtn = document.getElementById('companyBtn');
const title = document.getElementById('toggle-title');
const desc = document.getElementById('toggle-desc');
const link = document.getElementById('toggle-link');
const cards = document.getElementById('toggle-cards');

// Toggle apprentice/company section
apprenticeBtn.addEventListener('click', () => {
  apprenticeBtn.classList.add('active');
  companyBtn.classList.remove('active');

  title.innerText = 'Stuck in the “no experience, no job” loop?';
  desc.innerHTML = `We get it. You've got skills, passion, and drive — but without real <br>
    experience, breaking into the digital space can feel impossible.`;
  link.innerText = 'Browse Apprenticeship →';

  cards.innerHTML = `
    <div class="card" id="box1">Build portfolio-worthy work</div>
    <div class="card" id="box2">Receive mentorship from pros</div>
    <div class="card" id="box3">Apply to real digital briefs</div>
    <div class="card" id="box4">Earn endorsements and badges</div>
  `;
});

companyBtn.addEventListener('click', () => {
  companyBtn.classList.add('active');
  apprenticeBtn.classList.remove('active');

  title.innerText = 'Digital help you can trust without the hiring risk';
  desc.innerHTML = `Tight budget? Overflowing backlog? You don't need another Junior hire - you need <br> focused support.`;
  link.innerText = 'Post a Project →';

  cards.innerHTML = `
    <div class="card" id="box1">UI/UX, content,social,dev & more </div>
    <div class="card" id="box2">Guided apprentices with mentor support </div>
    <div class="card" id="box3">Clear deliverables & project tracking</div>
    <div class="card" id="box4">Free or low-cost option for small orgs</div>
  `;
});



// ==== PROJECT DATA ====
const projectData = [
  {
    title: "BloomHealth",
    category: "Design",
    duration: "6 weeks",
    experience: "Beginner"
  },
  {
    title: "BloomHealth",
    category: "Design",
    duration: "6 weeks",
    experience: "Beginner"
  },
  {
    title: "Advance Data Fellowship",
    category: "Data Science",
    duration: "6 weeks",
    experience: "Beginner"
  },
  {
    title: "Advance Data Fellowship",
    category: "Data Science",
    duration: "6 weeks",
    experience: "Beginner"
  },
  {
    title: "TechSprint",
    category: "Engineering",
    duration: "8 weeks",
    experience: "Intermediate"
  },
  {
    title: "TechSprint",
    category: "Engineering",
    duration: "8 weeks",
    experience: "Intermediate"
  },
  {
    title: "TechSprint",
    category: "Engineering",
    duration: "8 weeks",
    experience: "Intermediate"
  },
  {
    title: "MarketGuru",
    category: "Marketing",
    duration: "4 weeks",
    experience: "Beginner"
  },
   {
    title: "MarketGuru",
    category: "Marketing",
    duration: "4 weeks",
    experience: "Beginner"
  },
   {
    title: "MarketGuru",
    category: "Marketing",
    duration: "4 weeks",
    experience: "Beginner"
  },
  {
    title: "UserLens",
    category: "Product Research",
    duration: "5 weeks",
    experience: "Advanced"
  },
  {
    title: "UserLens",
    category: "Product Research",
    duration: "5 weeks",
    experience: "Advanced"
  }
];

// ==== RENDER ONE CARD ====
function renderProjectCard(item) {
  return `
    <div class="project-card">
      <div class="img-placeholder">
        <div class="img-top-left">1.2K Students 150 Reviews</div>
        <div class="img-bottom-label">${item.category}</div>
      </div>
      <h4>${item.title}</h4>
      <p>${item.category} Apprentice<br><small>Mentorship</small></p>
      <div class="project-footer">
        <div class="meta-block">
          <p class="value">Duration</p>
          <p class="label">${item.duration}</p>
        </div>
        <div class="meta-block">
          <p class="value">Experience</p>
          <p class="label">${item.experience}</p>
        </div>
        <button class="apply-btn">Apply now</button>
      </div>
    </div>
  `;
}

// ==== FILTER FUNCTION ====
function filterProjects() {
  const activeFilter = document.querySelector('.filters .filter-left .active').textContent;
  return activeFilter === 'All'
    ? projectData
    : projectData.filter(p => p.category === activeFilter);
}

// ==== RENDER FUNCTION ====
function renderProjects() {
  const container = document.querySelector('#projects-section .project-cards');
  const filtered = filterProjects();
  container.innerHTML = filtered.map(renderProjectCard).join('');

  const isAll = document.querySelector('.filters .filter-left .active').textContent === 'All';
  const isExpanded = container.classList.contains('fixed-grid');

  container.classList.remove('scroll-row', 'grid-view', 'fixed-grid');

  if (isAll && isExpanded) {
    container.classList.add('fixed-grid'); // 3-column
  } else if (isAll && !isExpanded) {
    container.classList.add('scroll-row'); // row scroll
  } else {
    container.classList.add('grid-view'); // default filter grid
  }

  // Arrow visibility
  const showArrows = isAll && !isExpanded;
  document.querySelector('.filter-right button:nth-child(2)').style.display =
  document.querySelector('.filter-right button:nth-child(3)').style.display =
    showArrows ? 'inline-block' : 'none';
}

// ==== FILTER BUTTONS ====
document.querySelectorAll('#projects-section .filters .filter-left button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#projects-section .filters .filter-left button')
      .forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const container = document.querySelector('#projects-section .project-cards');
    container.classList.remove('fixed-grid');
    exploreAllBtn.textContent = 'Explore all →';

    renderProjects();
  });
});

// ==== INITIAL RENDER ====
renderProjects();

// ==== EXPLORE ALL TOGGLE ====
const exploreAllBtn = document.getElementById('explore-all-btn');
const projectContainer = document.querySelector('#projects-section .project-cards');

exploreAllBtn.addEventListener('click', () => {
  const activeFilter = document.querySelector('.filters .filter-left .active').textContent;
  if (activeFilter !== 'All') return;

  projectContainer.classList.toggle('fixed-grid');

  exploreAllBtn.textContent = projectContainer.classList.contains('fixed-grid')
    ? 'Collapse all ←'
    : 'Explore all →';

  renderProjects();
});

// ==== SCROLL ARROWS ====
const leftBtn = document.querySelector('.filter-right button:nth-child(2)');
const rightBtn = document.querySelector('.filter-right button:nth-child(3)');

leftBtn.addEventListener('click', () => {
  projectContainer.scrollBy({ left: -300, behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
  projectContainer.scrollBy({ left: 300, behavior: 'smooth' });
});





// === GET STARTED REDIRECT ===
document.getElementById('hero-get-started').addEventListener('click', function () {
  window.location.href = 'getstarted.html';
});

document.getElementById('nav-get-started').addEventListener('click', function () {
  window.location.href = 'getstarted.html';
});

document.getElementById('sidebar-get-started').addEventListener('click', function () {
  window.location.href = 'getstarted.html';
});
