document.addEventListener('DOMContentLoaded', () => {
  const searchBar      = document.getElementById('searchBar');
  if (!searchBar) return;  // only run on cs1_projects.html

  const filterButtons  = document.querySelectorAll('.filter-button');
  const projectResults = document.getElementById('projectResults');
  let selectedCategories = new Set();
  let projects = [];

  // load JSON but don't render anything yet
  fetch('all_cs1_projects.json')
    .then(res => res.json())
    .then(data => {
      projects = data;
      projectResults.innerHTML = '';  // start empty
    })
    .catch(console.error);

  // wire up search input
  searchBar.addEventListener('input', applyFilters);

  // wire up filter buttons
  filterButtons.forEach(btn => btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    const cat = btn.dataset.category;
    if (selectedCategories.has(cat)) selectedCategories.delete(cat);
    else                            selectedCategories.add(cat);
    applyFilters();
  }));

  function applyFilters() {
    const q = searchBar.value.trim().toLowerCase();

    // if no query AND no categories selected => clear and bail
    if (!q && selectedCategories.size === 0) {
      projectResults.innerHTML = '';
      return;
    }

    // otherwise filter
    const filtered = projects.filter(p => {
      const matchCat = selectedCategories.size === 0
        ? true
        : p.categories.some(c => selectedCategories.has(c));
      const matchQ = q === ''
        ? true
        : p.title.toLowerCase().includes(q)
          || p.description.toLowerCase().includes(q);
      return matchCat && matchQ;
    });

    // render
    if (filtered.length === 0) {
      projectResults.innerHTML = '<p>No matching projects found.</p>';
    } else {
      projectResults.innerHTML = filtered.map(p => `
        <div class="project-item">
          <h3>${p.title}</h3>
          <p>${p.description}</p>
        </div>
      `).join('');
    }
  }
});
