document.addEventListener('DOMContentLoaded', () => {
  const searchBar = document.getElementById('searchBar');
  if (!searchBar) return;  // only run on cs1_projects.html

  const filterButtons   = document.querySelectorAll('.filter-button');
  const projectResults  = document.getElementById('projectResults');
  const clearBtn = document.getElementById('clearBtn');
    clearBtn.addEventListener('click', () => {
    projectResults.innerHTML = '';
    // optionally reset search + filters:
    searchBar.value = '';
    selectedCategories.clear();
    filterButtons.forEach(b => b.classList.remove('active'));
});
  let selectedCategories = new Set();
  let projects = [];
        
  // load your JSON
  fetch('all_cs1_projects.json')
    .then(res => res.json())
    .then(data => {
      projects = data;
      displayProjects(projects);
    });
  // wire up search + filters
  searchBar.addEventListener('input', filterProjects);
  filterButtons.forEach(btn => btn.addEventListener('click', () => {
    const cat = btn.dataset.category;
    btn.classList.toggle('active');
    selectedCategories.has(cat)
      ? selectedCategories.delete(cat)
      : selectedCategories.add(cat);
    filterProjects();
  }));

  function filterProjects() {
    const q = searchBar.value.toLowerCase();
    let filtered = projects.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
    if (selectedCategories.size) {
      filtered = filtered.filter(p =>
        p.categories.some(c => selectedCategories.has(c))
      );
    }
    displayProjects(filtered);
  }

  function displayProjects(list) {
    projectResults.innerHTML = list.length
      ? list.map(p => `
          <div class="project-item">
            <h3>${p.title}</h3>
            <p>${p.description}</p>
          </div>`).join('')
      : '<p>No matching projects found.</p>';
  }
});
