import axiosWrapper from '../../utils/axios';
import config from '../../config';
import { GET_LEAGUES, SEARCH_LEAGUE } from './actionNames';

const { serverAddress, availableCompetitions } = config;
const serverApi = `${serverAddress}/v2`;

const getLeagues = (data) => ({
  type: GET_LEAGUES,
  data
});

export const getAllLeagues = () => async (dispatch) => {
  try {
    const { data: { competitions } } = await axiosWrapper({
    method: 'GET',
    url: `${serverApi}/competitions`
  });

  dispatch(getLeagues(competitions.filter(({ id }) => availableCompetitions.includes(id))));
  } catch (err) {
    console.log('all competitions service err');
    throw err;
  }
}

export const searchLeague = (data) => ({
  type: SEARCH_LEAGUE,
  data
});