import axios from 'axios';
const token = localStorage.getItem('token');
axios.defaults.baseURL = 'http://127.0.0.1:8000/'
axios.defaults.headers.common = { 'Authorization': `Bearer ${token}` }
export default axios;