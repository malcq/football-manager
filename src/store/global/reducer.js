import {
  GET_LEAGUES,
  GET_TEAMS,
  SEARCH_LEAGUE
} from './actionNames.js';


const initialStore = () => ({
  teams: [],
  leagues: [],
});

const globalStore = (store = initialStore(), { type, data } = {}) => {
  switch(type) {
    case GET_LEAGUES:
    case SEARCH_LEAGUE:
      return {
        ...store,
        leagues: data
      };

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