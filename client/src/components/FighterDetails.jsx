import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import axios from 'axios';

const FighterDetails = () => {
    const [fighter, setFighter] = useState(null);
    const { id } = useParams(); 
  
    useEffect(() => {
      const fetchFighterDetails = async () => {
        try {
          const response = await axios.get(`/api/v1/fighter/${id}`);
          setFighter(response.data.data);
        } catch (error) {
          console.error('Error fetching fighter details:', error);
        }
      };
      fetchFighterDetails();
    }, [id]); 
  
    if (!fighter) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <h2>Fighter Details</h2>
        <p>Name: {fighter.name}</p>
        <p>Age: {fighter.age}</p>
        <p>Description: {fighter.description}</p>
      </div>
    );
  };
  
  export default FighterDetails;