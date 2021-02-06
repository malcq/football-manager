import {
  GET_LEAGUES,
  GET_TEAMS,
  SEARCH_LEAGUE
} from './actionNames.js';


const initialStore = () => ({
  teams: [],
  leagues: {
    searchCompetition: '',
    collection: [],
  },
});

const globalStore = (store = initialStore(), { type, data } = {}) => {
  switch(type) {
    case GET_LEAGUES:
      return {
        ...store,
        leagues: {
          ...store.leagues,
          collection: data
        } 
      };
    case SEARCH_LEAGUE:
      return {
        ...store,
        leagues: {
          ...store.leagues,
          searchCompetition: data
        }
      }

    case GET_TEAMS: 
      return {
        ...store,
        teams: data
      };

    default:
      return store;
  }
};

export default globalStore;