import {
  GET_LEAGUES,
  SEARCH_LEAGUE,
  GET_TEAMS,
  SEARCH_TEAM,
  LEAGUE_GET_MATCHES,
  LEAGUE_FILTER_DATE_MATCHES
} from './actionNames.js';


const initialStore = () => ({
  leagues: {
    searchCompetition: '',
    collection: [],
  },
  teams: {
    searchTeam: '',
    season: {},
    collection: [],
  },
  matches: {
    byTeam: {
      collection: []
    },
    byLeague: {
      collection: []
    }  
  }
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
        teams: {
          ...store.teams,
          collection: data
        }
      };
    case SEARCH_TEAM:
      return {
        ...store,
        teams: {
          ...store.teams,
          searchTeam: data
        }
      }
      case LEAGUE_GET_MATCHES:
        return {
          ...store,
          matches: {
            ...store.matches,
            byLeague: {
              ...store.matches.byLeague,
              collection: data
            }
          }
        }
    default:
      return store;
  }
};

export default globalStore;