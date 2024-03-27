// apiService.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000';

const apiService = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getExampleData = async () => {
  try {
    const response = await apiService.get('/api/example');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};

export const postExampleData = async (data) => {
  try {
    const response = await apiService.post('/api/example', data);
    return response.data;
  } catch (error) {
    console.error('Error posting data:', error);
    throw error;
  }
};

// Other API calls as needed
