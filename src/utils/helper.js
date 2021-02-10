import queryString from 'query-string';

import config from '../config';

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


export const paginate = (array, maxPerPage, page_number = 1) => {
  return array.slice((page_number - 1) * maxPerPage, page_number * maxPerPage);
}

export const getCountPages = (array, maxPerPage) => {
  let cntPages;
  if (!array.length) {
    cntPages = 0;
  } else if (array.length <= maxPerPage) {
    cntPages = 1;
  } else {
    cntPages = Math.ceil(array.length / maxPerPage);
  }
  return cntPages;
}

export const renderPages = (pages, activePage) => {
  if (pages === 1) return [];
  return config.rangeNumbs(1, pages)
}