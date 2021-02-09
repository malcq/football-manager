import queryString from 'query-string';


export const filterBySearch = (searchVal, collection = []) => {
  if (!searchVal) return collection;
  return collection.filter(({ name }) => name === searchVal);
}

export const getDates = (matches) => {
  const dates = matches.map(({ season: { startDate, endDate } }) => [startDate, endDate]);
  return [...new Set(...dates)];
}

export const updateUrl = (parsed, history, location) => {
  const searchString = queryString.stringify(parsed);
  history.push({
    pathname: location.pathname,
    search: searchString
  })
}