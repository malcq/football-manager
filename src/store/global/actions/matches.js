import axiosWrapper from '../../../utils/axios';
import config from '../../../config';
import { 
  LEAGUE_GET_MATCHES,
  LEAGUE_FILTER_DATE_MATCHES
} from '../actionNames';


const { serverAddress } = config;
const serverApi = `${serverAddress}/v2`;

export const getMatchesByLeague = (data) => ({
  type: LEAGUE_GET_MATCHES,
  data
});

export const filterDateMatches = (data) => ({
  type: LEAGUE_FILTER_DATE_MATCHES,
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