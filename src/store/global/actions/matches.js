import axiosWrapper from '../../../utils/axios';
import config from '../../../config';
import { GET_MATCHES_BY_LEAGUE, SEARCH_TEAM } from '../actionNames';


const { serverAddress } = config;
const serverApi = `${serverAddress}/v2`;

export const getMatchesByLeague = (data) => ({
  type: GET_MATCHES_BY_LEAGUE,
  data
});

export const getAllMatchesByLeague = (id) => async (dispatch) => {
  try {
    const {data: { matches } } = await axiosWrapper({
    method: 'GET',
    url: `${serverApi}/competitions/${id}/matches`
  });

  dispatch(getMatchesByLeague(matches));
  } catch (err) {
    console.log('all matches by league service err');
    throw err;
  }
}