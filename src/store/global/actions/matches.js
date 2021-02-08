import axiosWrapper from '../../../utils/axios';
import config from '../../../config';
import { 
  LEAGUE_GET_MATCHES,
  TEAM_GET_MATCHES
} from '../actionNames';


const { serverAddress } = config;
const serverApi = `${serverAddress}/v2`;

export const getMatchesByLeague = (data) => ({
  type: LEAGUE_GET_MATCHES,
  data
});

export const getMatchesByTeam = (data) => ({
  type: TEAM_GET_MATCHES,
  data
});

export const getAllMatchesByLeague = (id, params = {}) => async (dispatch) => {
  try {
    const {data: { matches } } = await axiosWrapper({
    method: 'GET',
    url: `${serverApi}/competitions/${id}/matches`,
    params
  });

  dispatch(getMatchesByLeague(matches));
  } catch (err) {
    console.log('all matches by league service err');
    throw err;
  }
}

export const getAllMatchesByTeam = (id, params = {}) => async (dispatch) => {
  try {
    const {data: { matches } } = await axiosWrapper({
    method: 'GET',
    url: `${serverApi}/teams/${id}/matches`,
    params
  });
  dispatch(getMatchesByTeam(matches));
  } catch (err) {
    console.log('all matches by team service err');
    throw err;
  }
}