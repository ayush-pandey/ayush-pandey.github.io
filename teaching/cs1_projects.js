document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded fired');
  const searchBar      = document.getElementById('searchBar');
  const projectResults = document.getElementById('projectResults');
  const clearBtn       = document.getElementById('clearBtn');

  // only select buttons that actually have data-category
  const filterButtons = document.querySelectorAll('.filter-button[data-category]');

  console.log('filterButtons count:', filterButtons.length);
  filterButtons.forEach((b,i) =>
    console.log(`btn[${i}] category=`, b.dataset.category)
  );

  // *** immediately clear any static content ***
  projectResults.innerHTML = '';

  let projects = [];
  let selectedCategories = new Set();

  // load JSON
  fetch('all_cs1_projects.json')
    .then(r => r.json())
    .then(data => {
      projects = data;
      console.log('loaded projects:', projects.length);
      // already cleared above
    })
    .catch(console.error);

  // wire up search
  searchBar.addEventListener('input', () => {
    console.log('search input:', searchBar.value);
    applyFilters();
  });

  // wire up filters
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const cat = btn.dataset.category;
      console.log('filter clicked:', cat);
      btn.classList.toggle('active');
      if (selectedCategories.has(cat)) selectedCategories.delete(cat);
      else                            selectedCategories.add(cat);
      console.log('selectedCategories:', Array.from(selectedCategories));
      applyFilters();
    });
  });

  // clear button
  clearBtn.addEventListener('click', () => {
    console.log('clearBtn clicked');
    projectResults.innerHTML = '';
    searchBar.value = '';
    selectedCategories.clear();
    filterButtons.forEach(b => b.classList.remove('active'));
  });

  // filtering logic
  function applyFilters() {
    const q = searchBar.value.trim().toLowerCase();
    console.log('applyFilters:', { q, cats: Array.from(selectedCategories) });
    if (!q && selectedCategories.size === 0) {
      console.log('nothing selected → clearing');
      projectResults.innerHTML = '';
      return;
    }
    const filtered = projects.filter(p => {
      const okCat = selectedCategories.size === 0
        ? true
        : p.categories.some(c => selectedCategories.has(c));
      const okQ = q === ''
        ? true
        : p.title.toLowerCase().includes(q)
          || p.description.toLowerCase().includes(q);
      return okCat && okQ;
    });
    console.log('filtered count:', filtered.length);
    projectResults.innerHTML = filtered.length
      ? filtered.map(p=>`
          <div class="project-item">
            <h3>${p.title}</h3>
            <p>${p.description}</p>
          </div>
        `).join('')
      : '<p>No matching projects found.</p>';
  }
  clearBtn.classList.add('active');
  projectResults.innerHTML = '';
});
