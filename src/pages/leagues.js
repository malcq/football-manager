import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { getAllLeagues, searchLeague } from '../store/global/actions';
import AutoCompleteInput from '../components/Autocomplete';  

const filterCompetitions = (searchVal, collection) => {
 
  if (!searchVal) return collection;
  return collection.filter(({ name }) => name === searchVal);
}

const LeaguesPage = () => {
  const leagues = useSelector(state => state.global.leagues, shallowEqual);
  const searchVal = useSelector(state => state.global.leagues.searchCompetition, shallowEqual);
  const dispatch = useDispatch();
  const onSearchLeague = (searchStr) => dispatch(searchLeague(searchStr));
  useEffect(() => dispatch(getAllLeagues()), [dispatch]);
  
  const competitions = filterCompetitions(
    searchVal,
    leagues.collection
  );
  return (
    <>
    <h1>Leagues page</h1>
    <AutoCompleteInput 
      list={leagues.collection}
      onSearchLeague={onSearchLeague}
      searchVal={searchVal}
    />
    <ul>
      -----------
      {competitions.map(
        ({ id, name }) => <li key={id}><Link to={`/competitions/${id}`}>{name}</Link></li>
      )}
      -----------
    </ul>
    </>
  )
}

export default LeaguesPage;