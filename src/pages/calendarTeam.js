import { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import queryString from 'query-string';

import { getAllMatchesByTeam } from '../store/global/actions/matches';
import { DatePicker, ByLeagueTable } from '../components';
import { getDates, updateUrl } from '../utils';
import { SPage } from '../styles';


const CalendarTeamPage = ({location, history}) => {
  const matchesByTeam = useSelector(state => state.global.matches.byTeam, shallowEqual);
  const [dateFilter, setDateFilter] = useState(queryString.parse(location.search));
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleUrl = (parsed) => {
    updateUrl(parsed, history, location);
    setDateFilter({ ...parsed })
  }

  const seasonDates = useMemo(() => getDates(matchesByTeam.collection), [matchesByTeam.collection])

  const onDateSelect = (dateFrom, dateTo) => {
    const parsed = { ...queryString.parse(location.search), dateFrom, dateTo };
    handleUrl(parsed);
  }

  useEffect(() => dispatch(getAllMatchesByTeam(id, dateFilter)),[id, dispatch, dateFilter]);

  return (
    <SPage>
      <h1 className='page__title'>Calendar Team</h1>
     
      <h2>Season starts: {seasonDates[0]}</h2>
      <h2>Season ends: {seasonDates[1]}</h2>
      <div className='page__panel page__panel--team'>
        
        <DatePicker onDateSelect={onDateSelect} disabledArea={seasonDates} />
      </div>
      <div className='page__reset'>
        <span onClick={handleUrl.bind(null, null)}>
          Reset filter
        </span>
      </div>
      <ByLeagueTable list={matchesByTeam.collection} />
    </SPage>
  )
}

export default CalendarTeamPage;