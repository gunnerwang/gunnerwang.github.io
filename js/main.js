import { matchesPublication } from './publication-filter.mjs';

const mobileMenu = document.querySelector('.mobile-nav');
mobileMenu?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => { mobileMenu.open = false; });
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobileMenu?.open) {
    mobileMenu.open = false;
    mobileMenu.querySelector('summary').focus();
  }
});

const filters = document.getElementById('publication-filters');
if (filters) {
  const publications = Array.from(document.querySelectorAll('.archive-publication')).map(element => ({
    element,
    year: element.dataset.year,
    type: element.dataset.type,
    text: element.textContent,
  }));
  const groups = document.querySelectorAll('.publication-group');
  const status = document.getElementById('filter-status');
  const empty = document.getElementById('empty-state');
  const update = () => {
    const values = Object.fromEntries(new FormData(filters));
    let visible = 0;
    publications.forEach(record => {
      const matches = matchesPublication(record, values);
      record.element.hidden = !matches;
      visible += Number(matches);
    });
    groups.forEach(group => {
      group.hidden = !Array.from(group.querySelectorAll('.archive-publication')).some(element => !element.hidden);
    });
    status.textContent = visible === publications.length
      ? `Showing all ${publications.length} publications`
      : `Showing ${visible} of ${publications.length} publications`;
    empty.hidden = visible !== 0;
  };
  filters.hidden = false;
  filters.addEventListener('submit', event => event.preventDefault());
  filters.addEventListener('input', update);
  filters.addEventListener('change', update);
  filters.addEventListener('reset', () => requestAnimationFrame(update));
  update();
}
