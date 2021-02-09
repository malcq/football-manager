import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { getAllLeagues, searchLeague } from '../store/global/actions/leagues';
import { AutoCompleteInput, LeagueTable } from '../components';  
import { filterBySearch } from '../utils';
import { SPage } from '../styles';


const LeaguesPage = () => {
  const leagues = useSelector(state => state.global.leagues, shallowEqual);
  const dispatch = useDispatch();
  const onSearchLeague = (searchStr) => dispatch(searchLeague(searchStr));

  const competitions = useMemo(() =>
    filterBySearch(
      leagues.searchCompetition,
      leagues.collection
    ),
  [leagues.searchCompetition,leagues.collection]);
 
  useEffect(() => dispatch(getAllLeagues()), [dispatch]);

 
  return (
    <SPage>
      <h1 className='page__title'>Leagues page</h1>
      <AutoCompleteInput 
        list={leagues.collection}
        onSearch={onSearchLeague}
        searchVal={leagues.searchCompetition}
      />
      <LeagueTable list={competitions} />
    </SPage>
  )
}

export default LeaguesPage;