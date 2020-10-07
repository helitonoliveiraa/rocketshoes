import axios from 'axios';

const api = axios.create({
  baseURL: 'https://rocketshoes-server-api.herokuapp.com',
});

export default api;
