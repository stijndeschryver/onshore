import './Cases.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Wave } from './Wave.jsx';
import { WaveCorner } from './WaveCorner.jsx';

const API_URL = import.meta.env.VITE_API_URL;

export const Cases = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(`${API_URL}/api/db/cases`);
        const cases = Array.isArray(response.data)
          ? response.data
          : [response.data];
        setData(cases);
      } catch (err) {
        console.error('Full error:', err); // Log the full error
        console.error('Response data:', err.response?.data); // Log the response data if any
        console.error('Response status:', err.response?.status); // Log the status code if any
        setError(
          `${err.message}${err.response?.status ? ` (Status: ${err.response.status})` : ''}`
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchData().catch((err) => {
      console.error('Error in fetchData:', err);
    });
  }, []);

  if (isLoading) return <div className="content">Loading...</div>;
  if (error) return <div className="content">Error: {error}</div>;
  if (!data.length) return <div className="content">No cases found.</div>;

  return (
    <section id="cases">
      <Wave index={1} />
      <Wave index={2} />
      <div className="content">
        {data.map((caseItem) => (
          <video controls key={caseItem.id} src={caseItem.video_uri} />
        ))}
      </div>
      <WaveCorner />
    </section>
  );
};
