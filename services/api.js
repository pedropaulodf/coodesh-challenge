import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.beta.mejorconsalud.com/wp-json/mc/v2/',
})

export default api;