import axios from 'axios';

// axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';
// axios.defaults.headers.get['Access-Control-Allow-Credentials'] = 'false';
// axios.defaults.headers.get['Access-Control-Allow-Methods'] = 'GET,HEAD,OPTIONS,POST,PUT';
// axios.defaults.headers.get['Access-Control-Allow-Headers'] = 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers';

const api = axios.create({
  baseURL: 'https://api.beta.mejorconsalud.com/wp-json/mc/v2/',
})

export default api;