import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { getAllLeagues, searchLeague } from '../store/global/actions';
import AutoCompleteInput from '../components/Autocomplete';  

const LeaguesPage = () => {
  const competitions = useSelector(state => state.global.leagues, shallowEqual);
  const dispatch = useDispatch();
  const onSearchLeague = (searchCompetitions) => dispatch(searchLeague(searchCompetitions));
  useEffect(() => dispatch(getAllLeagues()), [dispatch]);
  
  return (
    <>
    <h1>Leagues page</h1>
    <AutoCompleteInput list={competitions} onUpdList={onSearchLeague} />
    <ul>
      -----------
      {competitions.map(({ id, name }) => <li key={id}><Link to={`/competitions/${id}`}>{name}</Link></li>)}
      -----------
    </ul>
    </>
  )
}

export default LeaguesPage;