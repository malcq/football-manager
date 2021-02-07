import { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useParams, Link } from "react-router-dom";

import { getAllTeams, searchTeam } from '../store/global/actions/teams';

import AutoCompleteInput from '../components/Autocomplete'; 
  

const filterTeams = (searchVal, collection) => {
 
  if (!searchVal) return collection;
  return collection.filter(({ name }) => name === searchVal);
}

const TeamsPage = () => {
  const teams = useSelector(state => state.global.teams, shallowEqual);
  const { id } = useParams();
  const dispatch = useDispatch();
  const onSearchTeam = (searchStr) => dispatch(searchTeam(searchStr));
  
  useEffect(() => dispatch(getAllTeams(id)), [dispatch, id]);
  const filteredTeams = filterTeams(
    teams.searchTeam,
    teams.collection
  );
 
  return (
    <>
      <h1>Teams page</h1>
      <AutoCompleteInput 
        list={teams.collection}
        onSearch={onSearchTeam}
        searchVal={teams.searchTeam}
      />
      <ul>
        teams page
        -----------
      {filteredTeams.map(({ id, name }) => <li key={id}><Link to={`/teams/${id}`}>{name}</Link></li>)}
        -----------
      </ul>
      <Link to={`/competitions/${id}/matches`}>See all matches in league</Link>
    </> 
  )
}

export default TeamsPage;