import api from './axiosConfig';

export const getData = () => api.get('/endpoint');
export const postData = (data) => api.post('/endpoint', data);
// Añade más llamadas API según sea necesario