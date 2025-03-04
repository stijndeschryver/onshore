import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const useCases = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/db/cases`);
        const cases = Array.isArray(response.data)
          ? response.data
          : [response.data];
        setData(cases);
      } catch (err) {
        console.error('Full error:', err);
        console.error('Response data:', err.response?.data);
        console.error('Response status:', err.response?.status);
        setError(
          `${err.message}${err.response?.status ? ` (Status: ${err.response.status})` : ''}`
        );
      }
    };

    fetchData().catch((err) => {
      console.error('Error in fetchData:', err);
    });
  }, []);

  return { data, error };
};
