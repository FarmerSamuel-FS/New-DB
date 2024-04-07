import  { useState } from 'react';
import axios from 'axios';

const CreateLeagueForm = () => {
  const [leagueData, setLeagueData] = useState({
    name: '',
    location: '',
    description: ''
  });

  const handleChange = (e) => {
    setLeagueData({ ...leagueData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/v1/league', { league: leagueData });
      console.log('New league created:', response.data.data);
    } catch (error) {
      console.error('Error creating league:', error);
    }
  };

  return (
    <div>
      <h2>Create League</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={leagueData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Location:</label>
          <input type="text" name="location" value={leagueData.location} onChange={handleChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={leagueData.description} onChange={handleChange} />
        </div>
        <button type="submit">Create League</button>
      </form>
    </div>
  );
};

export default CreateLeagueForm;
