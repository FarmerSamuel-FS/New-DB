import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import axios from 'axios';

const LeagueDetails = () => {
  const [league, setLeague] = useState(null);
  const { id } = useParams(); 

  useEffect(() => {
    const fetchLeagueDetails = async () => {
      try {
        const response = await axios.get(`/api/v1/league/${id}`);
        setLeague(response.data.data);
      } catch (error) {
        console.error('Error fetching league details:', error);
      }
    };
    fetchLeagueDetails();
  }, [id]); 

  if (!league) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>League Details</h2>
      <p>Name: {league.name}</p>
      <p>Location: {league.location}</p>
      <p>Description: {league.description}</p>
    </div>
  );
};

export default LeagueDetails;
