import { useState, useEffect } from 'react';
import axios from 'axios';

const FightersList = () => {
  const [fighters, setFighters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFighters = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:3000/api/v1/fighter?page=${currentPage}`);
        setFighters(response.data.data);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error('Error fetching fighters:', error);
        setError('Error fetching fighters. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchFighters();
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h2>Fighters List</h2>
      {fighters.length === 0 ? (
        <p>No fighters found.</p>
      ) : (
        <>
          <ul>
            {fighters.map(fighter => (
              <li key={fighter._id}>
                <p>Name: {fighter.name}</p>
                <p>Age: {fighter.age}</p>
                <p>League: {fighter.league}</p>
                <p>Description: {fighter.description}</p>
              </li>
            ))}
          </ul>
          <div>
            <button onClick={prevPage} disabled={currentPage === 1}>Previous Page</button>
            <button onClick={nextPage} disabled={currentPage === totalPages}>Next Page</button>
          </div>
        </>
      )}
    </div>
  );
};

export default FightersList;
