import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getAllMatchesByTeamService } from '../services';
  

const CalendarTeamPage = () => {
  const [matchesByTeam, setMatchesByTeam] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchMatchesByTeam = async () => {
      const matches = await getAllMatchesByTeamService(id);
      setMatchesByTeam(matches);
    }

    fetchMatchesByTeam();
  }, [id]);

  return (
    <ul>
      calendar Team
      -----------
    {matchesByTeam.map(({ id, homeTeam, awayTeam }) => <li key={id}>{homeTeam.name} vs {awayTeam.name}</li>)}
      -----------
    </ul>
  )
}

export default CalendarTeamPage;