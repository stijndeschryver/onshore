import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const useShowreel = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/api/db/showreel`);
        const showreel = Array.isArray(response.data)
          ? response.data
          : [response.data];
        setData(showreel);
      } catch (err) {
        console.error('Full error:', err);
        console.error('Response data:', err.response?.data);
        console.error('Response status:', err.response?.status);
        setError(
          `${err.message}${err.response?.status ? ` (Status: ${err.response.status})` : ''}`
        );
      } finally {
        setLoading(false);
      }
    };

    fetchData().catch((err) => {
      console.error('Error in fetchData:', err);
      setLoading(false);
    });
  }, []);

  return { data, error, loading };
};
