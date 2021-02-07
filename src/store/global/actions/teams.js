import axiosWrapper from '../../../utils/axios';
import config from '../../../config';
import { GET_TEAMS, SEARCH_TEAM } from '../actionNames';

const { serverAddress } = config;
const serverApi = `${serverAddress}/v2`;

const getTeams = (data) => ({
  type: GET_TEAMS,
  data
});

export const searchTeam = (data) => ({
  type: SEARCH_TEAM,
  data
});

export const getAllTeams = (id) => async (dispatch) => {
  try {
    const {data: { teams } } = await axiosWrapper({
    method: 'GET',
    url: `${serverApi}/competitions/${id}/teams`
  });
  dispatch(getTeams(teams));
  } catch (err) {
    console.log('all competitions service err');
    throw err;
  }
}