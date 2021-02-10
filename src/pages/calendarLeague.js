import { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import queryString from 'query-string';

import { getAllMatchesByLeague } from '../store/global/actions/matches';
import { DatePicker, CustomSelect, Table } from '../components';
import { getDates, updateUrl } from '../utils';
import { SPage } from '../styles';

const CalendarLeaguePage = ({location, history}) => {
  const matchesByLeague = useSelector(state => state.global.matches.byLeague, shallowEqual);
  const [dateFilter, setDateFilter] = useState(queryString.parse(location.search));
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleUrl = (parsed) => {
    updateUrl(parsed, history, location);
    setDateFilter({ ...parsed })
  }

  const seasonDates = useMemo(() => getDates(matchesByLeague.collection), [matchesByLeague.collection])

  const onDateSelect = (dateFrom, dateTo) => {
    const parsed = { ...queryString.parse(location.search), dateFrom, dateTo };
    handleUrl(parsed);
  }

  const seasonSelect = (season) => {
    const parsed = { ...queryString.parse(location.search), season };
    handleUrl(parsed);
  }

  useEffect(() => dispatch(getAllMatchesByLeague(id, dateFilter)),[id, dispatch, dateFilter]);

  return (
    <SPage>
      <h1 className='page__title'>Calendar League</h1>
      <h2>Season starts: {seasonDates[0]}</h2>
      <h2>Season ends: {seasonDates[1]}</h2>
      <div className='page__panel'>
        <CustomSelect onSeasonSelect={seasonSelect} />
        <DatePicker onDateSelect={onDateSelect} disabledArea={seasonDates} />
      </div>
      <div
        className='page__reset'   
      >
        <span onClick={handleUrl.bind(null, null)}>
          Reset filter
        </span>
      </div>
      <Table list={matchesByLeague.collection} />
    </SPage>
  )
}

export default CalendarLeaguePage;