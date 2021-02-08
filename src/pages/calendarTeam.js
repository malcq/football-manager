import { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import queryString from 'query-string';

import { getAllMatchesByTeam } from '../store/global/actions/matches';
import { getDates } from '../utils/helper';
import DatePicker from '../components/DatePicker';
  

const CalendarTeamPage = ({location, history}) => {
  const matchesByTeam = useSelector(state => state.global.matches.byTeam, shallowEqual);
  const [dateFilter, setDateFilter] = useState(queryString.parse(location.search));
  const dispatch = useDispatch();
  const { id } = useParams();

  const updateUrl = (parsed) => {
    const searchString = queryString.stringify(parsed);
    history.push({
      pathname: location.pathname,
      search: searchString
    })
    setDateFilter({ ...parsed })
  }
  const seasonDates = useMemo(() => getDates(matchesByTeam.collection), [matchesByTeam.collection])

  const onDateSelect = (dateFrom, dateTo) => {
    const parsed = { ...queryString.parse(location.search), dateFrom, dateTo };
    updateUrl(parsed);
  }

  useEffect(() => dispatch(getAllMatchesByTeam(id, dateFilter)),[id, dispatch, dateFilter]);

  return (
    <>
      <h1>Calendar Team</h1>
      <DatePicker onDateSelect={onDateSelect} disabledArea={seasonDates} />
      <h2>Season starts: {seasonDates[0]}</h2>
      <h2>Season ends: {seasonDates[1]}</h2>
      <h3 onClick={updateUrl.bind(null, null)}>Reset filter</h3>
      <ul>
        calendar Team
        -----------
        {
          matchesByTeam.collection.map(({ id, homeTeam, awayTeam }) => ( 
            <li key={id}>{homeTeam.name} vs {awayTeam.name}</li>))
        }
        -----------
      </ul>
    </>
  )
}

export default CalendarTeamPage;