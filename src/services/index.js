import axiosWrapper from '../utils/axios';
import config from '../config';

const { serverAddress, availableCompetitions } = config;
const serverApi = `${serverAddress}/v2`;

export const getAllLeaguesService = async () => {
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

export const getAllTeamsService = async (id) => {
  try {
    const {data: { teams } } = await axiosWrapper({
    method: 'GET',
    url: `${serverApi}/competitions/${id}/teams`
  });
  return teams;
  } catch (err) {
    console.log('all competitions service err');
    throw err;
  }
}


export const getAllMatchesByLeagueService = async (id) => {
  try {
    const {data: { matches } } = await axiosWrapper({
    method: 'GET',
    url: `${serverApi}/competitions/${id}/matches`
  });
  
  return matches;
  } catch (err) {
    console.log('all matches by league service err');
    throw err;
  }
}

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