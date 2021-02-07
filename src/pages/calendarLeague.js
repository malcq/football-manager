import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch, shallowEqual } from "react-redux";


import { getAllMatchesByLeague } from '../store/global/actions/matches';
import DatePicker from '../components/DatePicker';

const CalendarLeaguePage = () => {
  const matchesByLeague = useSelector(state => state.global.matches.byLeague, shallowEqual);
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => dispatch(getAllMatchesByLeague(id)), [id, dispatch]);


  return (
    <>
      <h1>Calendar League</h1>
      <DatePicker />
      <ul>
      {matchesByLeague.collection.map(({ id, homeTeam, awayTeam }) => <li key={id}>{homeTeam.name} vs {awayTeam.name}</li>)}
      -----------
    </ul>
    </>
  )
}

export default CalendarLeaguePage;