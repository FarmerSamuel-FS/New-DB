import { useState, useEffect } from 'react';
import axios from 'axios';

const LeaguesList = () => {
  const [leagues, setLeagues] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeagues = async () => {
      setLoading(true);
      try {
        const response = await axios.get('http://localhost:3000/api/v1/league');
        setLeagues(response.data.data);
      } catch (error) {
        console.error('Error fetching leagues:', error);
        setError('Error fetching leagues. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchLeagues();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Leagues List</h2>
      {leagues.length === 0 ? (
        <p>No leagues found.</p>
      ) : (
        <ul>
          {leagues.map(league => (
            <li key={league._id}>
              <p>Name: {league.name}</p>
              <p>Location: {league.location}</p>
              <p>Description: {league.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LeaguesList;
