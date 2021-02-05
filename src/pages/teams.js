import { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";

import { getAllTeamsService } from '../services';
  

const TeamsPage = () => {
  const [teams, setTeams] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchTeams = async () => {
    const teams = await getAllTeamsService(Number(id));
    setTeams(teams);
    }

    fetchTeams();
  }, [id]);

  return (
    <>
    <ul>
      teams page
      -----------
      {teams.map(({ id, name }) => <li key={id}><Link to={`/teams/${id}`}>S{name}</Link></li>)}
      -----------
    </ul>
    <Link to={`/competitions/${id}/matches`}>See all matches in league</Link>
    </>
    
  )
}

export default TeamsPage;