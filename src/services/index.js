import axiosWrapper from '../utils/axios';
import config from '../config';

const { serverAddress, availableCompetitions } = config;
const serverApi = `${serverAddress}/v2`;


export const getAllMatchesByTeamService = async (id) => {
  try {
    const {data: { matches } } = await axiosWrapper({
    method: 'GET',
    url: `${serverApi}/teams/${id}/matches`
  });
  return matches;
  } catch (err) {
    console.log('all matches by league service err');
    throw err;
  }
}