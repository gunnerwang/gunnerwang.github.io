import test from 'node:test';
import assert from 'node:assert/strict';

// Removing the year/type intersection or text normalization would expose unrelated records.
const records = [
  {year: '2026', type: 'article', text: 'Tianyu Wang. LLM agents-driven layout generation. CIRP Annals.'},
  {year: '2026', type: 'preprint', text: 'Tianyu Wang. Ghost Attractor Networks. arXiv.'},
  {year: '2027', type: 'article', text: 'Manuel Chiachío. Prior information-aided prognostics.'},
  {year: '', type: 'preprint', text: 'Amortized Posterior Inference. SSRN.'},
];
const load = async () => (await import('../js/publication-filter.mjs')).matchesPublication;
const select = (fn, filters) => records.filter(record => fn(record, filters));

test('blank filters preserve the full archive, including undated work', async () => {
  assert.equal(select(await load(), {}).length, 4);
});
test('year and publication type are intersected', async () => {
  assert.deepEqual(select(await load(), {year:'2026',type:'article'}), [records[0]]);
});
test('search is case-insensitive and ignores surrounding whitespace', async () => {
  assert.deepEqual(select(await load(), {query:'  GHOST   attractor  '}), [records[1]]);
});
test('author searches accept unaccented text', async () => {
  assert.deepEqual(select(await load(), {query:'chiachio'}), [records[2]]);
});
test('undated publications can be selected explicitly', async () => {
  assert.deepEqual(select(await load(), {year:'undated'}), [records[3]]);
});
test('incompatible filters produce an empty result instead of broadening the query', async () => {
  assert.deepEqual(select(await load(), {year:'2027',type:'preprint',query:'Ghost'}), []);
});
