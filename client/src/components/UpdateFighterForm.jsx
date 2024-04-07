import { useState, useEffect } from 'react'; 
import axios from 'axios';
import PropTypes from 'prop-types';

const UpdateFighterForm = ({ fighterId }) => {
  const [fighterData, setFighterData] = useState({
    name: '',
    age: '',
    description: '',
    league: '', 
  });

  useEffect(() => {
    const fetchFighterDetails = async () => {
      try {
        const response = await axios.get(`/api/v1/fighter/${fighterId}`);
        const { name, age, description, league } = response.data.data;
        setFighterData({ name, age, description, league });
      } catch (error) {
        console.error('Error fetching fighter details:', error);
      }
    };
    fetchFighterDetails();
  }, [fighterId]);

  const handleChange = (e) => {
    setFighterData({ ...fighterData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`/api/v1/fighter/${fighterId}`, { fighter: fighterData });
      console.log('Fighter updated:', response.data.data);
    } catch (error) {
      console.error('Error updating fighter:', error);
    }
  };

  return (
    <div>
      <h2>Update Fighter</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={fighterData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Age:</label>
          <input type="number" name="age" value={fighterData.age} onChange={handleChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={fighterData.description} onChange={handleChange} />
        </div>
        <div>
          <label>League:</label>
          <input type="text" name="league" value={fighterData.league} onChange={handleChange} />
        </div>
        <button type="submit">Update Fighter</button>
      </form>
    </div>
  );
};

UpdateFighterForm.propTypes = {
  fighterId: PropTypes.string.isRequired,
};

export default UpdateFighterForm;
