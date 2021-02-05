import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getAllMatchesByLeagueService } from '../services';
  

const CalendarLeaguePage = () => {
  const [matchesByLeague, setMatchesByLeague] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchMatchesByLeague = async () => {
      const matches = await getAllMatchesByLeagueService(id);
     setMatchesByLeague(matches);
    }

    fetchMatchesByLeague();
  }, [id]);

  return (
    <ul>
      calendar league
      -----------
     {matchesByLeague.map(({ id, homeTeam, awayTeam }) => <li key={id}>{homeTeam.name} vs {awayTeam.name}</li>)}
      -----------
    </ul>
  )
}

export default CalendarLeaguePage;