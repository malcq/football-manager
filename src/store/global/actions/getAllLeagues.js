import axiosWrapper from '../utils/axios';
import config from '../config';

const { serverAddress, availableCompetitions } = config;
const serverApi = `${serverAddress}/v2`;

export const getAllLeagues = async () => {
  try {
    const {data: { competitions } } = await axiosWrapper({
    method: 'GET',
    url: `${serverApi}/competitions`
  });
  
  return competitions.filter(({ id }) => availableCompetitions.includes(id));
  } catch (err) {
    console.log('all competitions service err');
    throw err;
  }
}