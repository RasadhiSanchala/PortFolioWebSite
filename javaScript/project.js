
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projects = document.querySelectorAll('.filter-item');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;

            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            projects.forEach(proj => {
                if (filter === 'all' || proj.classList.contains(filter)) {
                    proj.classList.add('show');
                } else {
                    proj.classList.remove('show');
                }
            });
        });
    });

    // Default to show all
    document.querySelector('.filter-btn[data-filter="all"]').click();

