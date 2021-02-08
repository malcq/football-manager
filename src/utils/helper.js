export const getDates = (matches) => {
  const dates = matches.map(({ season: { startDate, endDate } }) => [startDate, endDate]);
  return [...new Set(...dates)];
} 