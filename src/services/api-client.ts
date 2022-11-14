import axios from 'axios';
const { REACT_APP_BASE_API_URL } = process.env;

 const apiClient = axios.create({
    baseURL: REACT_APP_BASE_API_URL,
    headers: {'Content-Type': 'application/json'}
  });

export default apiClient;