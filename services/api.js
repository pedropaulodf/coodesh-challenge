import axios from 'axios';

axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

const api = axios.create({
  baseURL: 'https://api.beta.mejorconsalud.com/wp-json/mc/v2/',
})

export default api;