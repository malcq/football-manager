import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useParams, Link } from "react-router-dom";
import styled from 'styled-components';

import { getAllTeams, searchTeam } from '../store/global/actions/teams';
import { AutoCompleteInput, TeamTable } from '../components'; 
import { filterBySearch } from '../utils';
import { SPage } from '../styles';
  

const TeamsPage = () => {
  const teams = useSelector(state => state.global.teams, shallowEqual);
  const { id } = useParams();
  const dispatch = useDispatch();
  const onSearchTeam = (searchStr) => dispatch(searchTeam(searchStr));
  
  const filteredTeams = useMemo(() => 
    filterBySearch(
      teams.searchTeam,
      teams.collection
    ),
  [teams.searchTeam, teams.collection]);

  useEffect(() => dispatch(getAllTeams(id)), [dispatch, id]);
 
  return (
    <SPage>
      <h1 className='page__title'>Teams page</h1>
      <AutoCompleteInput 
        list={teams.collection}
        onSearch={onSearchTeam}
        searchVal={teams.searchTeam}
      />
      <TeamTable list={filteredTeams} />
      <SInfo>
        <Link to={`/competitions/${id}/matches`}>See all matches in league</Link>
      </SInfo>
    </SPage> 
  )
}

export default TeamsPage;

const SInfo = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;