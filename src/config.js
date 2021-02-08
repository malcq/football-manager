const config = {
  serverAddress: 'https://api.football-data.org',
  xAuthToken: 'f61c04196391472988cb5aebacdcae1c',
  availableCompetitions: [2000,2001,2002,2003,2013,2014,2015,2016,2017,2018,2019,2021],
  setSeasons: (start, end) => Array(end - start + 1).fill().map((_, idx) => start + idx),
};


export default config;