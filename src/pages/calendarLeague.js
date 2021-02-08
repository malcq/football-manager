import { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import queryString from 'query-string';

import { getAllMatchesByLeague } from '../store/global/actions/matches';
import DatePicker from '../components/DatePicker';
import CustomSelect from '../components/CustomSelect';

const getDates = (matches) => {
  const dates = matches.map(({ season: { startDate, endDate } }) => [startDate, endDate]);
  return [...new Set(...dates)];
} 

const CalendarLeaguePage = ({location, history}) => {
  const matchesByLeague = useSelector(state => state.global.matches.byLeague, shallowEqual);
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

  const seasonDates = useMemo(() => getDates(matchesByLeague.collection), [matchesByLeague.collection])

  const onSelect = (dateFrom, dateTo) => {
    const parsed = { ...queryString.parse(location.search), dateFrom, dateTo };
    updateUrl(parsed);
  }

  const handleSelect = (season) => {
    const parsed = { ...queryString.parse(location.search), season };
    updateUrl(parsed);
  }

  useEffect(() => dispatch(getAllMatchesByLeague(id, dateFilter)),[id, dispatch, dateFilter]);

  return (
    <>
      <h1>Calendar League</h1>
      <DatePicker onSelect={onSelect} disabledArea={seasonDates} />
      <h2>Season starts: {seasonDates[0]}</h2>
      <h2>Season ends: {seasonDates[1]}</h2>
      <CustomSelect onSelect={handleSelect} />
      <ul>
      {
        matchesByLeague.collection.map(({ id, homeTeam, awayTeam }) => ( 
          <li key={id}>{homeTeam.name} vs {awayTeam.name}</li>))
      }
      -----------
      </ul>
    </>
  )
}

export default CalendarLeaguePage;