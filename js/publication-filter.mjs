const normalize = value => String(value ?? '').normalize('NFD').replace(/\p{M}/gu, '').toLowerCase().replace(/\s+/g, ' ').trim();

export function matchesPublication(record, {year = '', type = '', query = ''} = {}) {
  const recordYear = record.year || 'undated';
  return (!year || year === recordYear)
    && (!type || type === record.type)
    && normalize(record.text).includes(normalize(query));
}
