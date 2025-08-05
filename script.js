  const toggleBtn = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('mobile-sidebar');
  const closeBtn = document.getElementById('close-btn');

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





// === PROJECT SECTION === //
const projectData = [
    {
      category: 'Design',
      title: 'BloomHealth',
      subtitle: 'Product Design Apprentice',
      level: 'Advanced',
      duration: '6 weeks',
      experience: 'Beginner'
    },
    {
      category: 'Design',
      title: 'BloomHealth',
      subtitle: 'Product Design Apprentice',
      level: 'Advanced',
      duration: '6 weeks',
      experience: 'Beginner'
    },
    {
      category: 'Design',
      title: 'BloomHealth',
      subtitle: 'Product Design Apprentice',
      level: 'Advanced',
      duration: '6 weeks',
      experience: 'Beginner'
    },
    {
      category: 'Data Science',
      title: 'Advance Data Fellowship',
      subtitle: 'Data Science Apprentice',
      level: 'Advanced',
      duration: '6 weeks',
      experience: 'Beginner'
    },
    {
      category: 'Data Science',
      title: 'Advance Data Fellowship',
      subtitle: 'Data Science Apprentice',
      level: 'Advanced',
      duration: '6 weeks',
      experience: 'Beginner'
    },
    {
      category: 'Data Science',
      title: 'Advance Data Fellowship',
      subtitle: 'Data Science Apprentice',
      level: 'Advanced',
      duration: '6 weeks',
      experience: 'Beginner'
    },
    {
      category: 'Engineering',
      title: 'CodeWave',
      subtitle: 'Frontend Engineer Apprentice',
      level: 'Intermediate',
      duration: '8 weeks',
      experience: 'Mid-level'
    },
    {
      category: 'Engineering',
      title: 'Universe',
      subtitle: 'Frontend Engineer Apprentice',
      level: 'Beginner',
      duration: '7 weeks',
      experience: 'Entry'
    },
    {
      category: 'Engineering',
      title: 'TechNova',
      subtitle: 'Frontend Engineer Apprentice',
      level: 'Intermediate',
      duration: '8 weeks',
      experience: 'Mid-level'
    },
    {
      category: 'Engineering',
      title: 'Transmission',
      subtitle: 'Frontend Engineer Apprentice',
      level: 'Beginner',
      duration: '5 weeks',
      experience: 'Entry'
    },
    {
      category: 'Engineering',
      title: 'capstone',
      subtitle: 'Frontend Engineer Apprentice',
      level: 'Beginner',
      duration: '8 weeks',
      experience: 'Entry'
    },
    {
      category: 'Engineering',
      title: 'prohub',
      subtitle: 'Frontend Engineer Apprentice',
      level: 'Intermediate',
      duration: '8 weeks',
      experience: 'Mid-level'
    },
    {
      category: 'Marketing',
      title: 'MarketGenius',
      subtitle: 'Digital Marketing Apprentice',
      level: 'Beginner',
      duration: '5 weeks',
      experience: 'Entry'
    },
    {
      category: 'Marketing',
      title: 'MarketGenius',
      subtitle: 'Digital Marketing Apprentice',
      level: 'Beginner',
      duration: '5 weeks',
      experience: 'Entry'
    },
    {
      category: 'Marketing',
      title: 'MarketGenius',
      subtitle: 'Digital Marketing Apprentice',
      level: 'Beginner',
      duration: '5 weeks',
      experience: 'Entry'
    },
    {
      category: 'Marketing',
      title: 'MarketGenius',
      subtitle: 'Digital Marketing Apprentice',
      level: 'Beginner',
      duration: '5 weeks',
      experience: 'Entry'
    },
    {
      category: 'Marketing',
      title: 'MarketGenius',
      subtitle: 'Digital Marketing Apprentice',
      level: 'Beginner',
      duration: '5 weeks',
      experience: 'Entry'
    },
    {
      category: 'Marketing',
      title: 'MarketGenius',
      subtitle: 'Digital Marketing Apprentice',
      level: 'Beginner',
      duration: '5 weeks',
      experience: 'Entry'
    },

    {
      category: 'Product Research',
      title: 'UserScope',
      subtitle: 'Product Research Apprentice',
      level: 'Advanced',
      duration: '4 weeks',
      experience: 'Beginner'
    },
    {
      category: 'Product Research',
      title: 'healthify',
      subtitle: 'Product Research Apprentice',
      level: 'Intermediate',
      duration: '4 weeks',
      experience: 'Mid-level'
    },
    {
      category: 'Product Research',
      title: 'growthLab',
      subtitle: 'Product Research Apprentice',
      level: 'Advanced',
      duration: '4 weeks',
      experience: 'Beginner'
    }
];

let projectIndex = 0;

function renderProjects() {
  const projectContainer = document.querySelector('#projects-section .project-cards');
  const filtered = filterProjects('projects');
  projectContainer.innerHTML = filtered.map(renderProjectCard).join('');
}

function renderProjectCard(item) {
  return `
    <div class="project-card">
      <div class="img-placeholder"><div class="img-bottom-label">${item.category}</div></div>
      <h4>${item.title}</h4>
      <p><small>${item.duration}</small></p>
      <div class="project-footer">
        <div class="meta-block"><p class="value">Duration</p><p class="label">${item.duration}</p></div>
        <div class="meta-block"><p class="value">Experience</p><p class="label">${item.experience}</p></div>
        <button class="apply-btn">Apply now</button>
      </div>
    </div>
  `;
}

function filterProjects(section) {
  const active = document.querySelector(`#${section}-section .filters .active`).textContent;
  return active === 'All' ? projectData : projectData.filter(p => p.category === active);
}

document.querySelectorAll('#projects-section .filters button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#projects-section .filters button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderProjects();
  });
});

renderProjects();


// === EXPLORE SECTION === //
const exploreData = [
  { category: 'Engineering', title: 'AI Lab', duration: '6 weeks', experience: 'Beginner' },
  { category: 'Marketing', title: 'BrandBoost', duration: '8 weeks', experience: 'Intermediate' },
  { category: 'Design', title: 'UX Studio', duration: '5 weeks', experience: 'Advanced' },
];

function renderExplore() {
  const exploreContainer = document.querySelector('#explore-section .project-cards');
  const filtered = filterProjects('explore');
  exploreContainer.innerHTML = filtered.map(renderProjectCard).join('');
}

document.querySelectorAll('#explore-section .filters button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('#explore-section .filters button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderExplore();
  });
});

renderExplore();



document.getElementById('hero-get-started').addEventListener('click', function () {
  window.location.href = 'getstarted.html';
});

document.getElementById('nav-get-started').addEventListener('click', function () {
  window.location.href = 'getstarted.html';
});


document.getElementById('sidebar-get-started').addEventListener('click', function () {
  window.location.href = 'getstarted.html';
});
