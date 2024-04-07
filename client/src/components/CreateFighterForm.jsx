import { useState } from 'react';
import axios from 'axios';

const CreateFighterForm = () => {
  const [fighterData, setFighterData] = useState({
    name: '',
    age: '',
    description: '',
    league: '', 
  });

  const handleChange = (e) => {
    setFighterData({ ...fighterData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/v1/fighter', { fighter: fighterData });
      console.log('New fighter created:', response.data.data);
    } catch (error) {
      console.error('Error creating fighter:', error);
    }
  };

  return (
    <div>
      <h2>Create Fighter</h2>
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
        <button type="submit">Create Fighter</button>
      </form>
    </div>
  );
};

export default CreateFighterForm;
