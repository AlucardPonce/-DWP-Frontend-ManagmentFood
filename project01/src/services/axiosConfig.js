import axios from 'axios';

const api = axios.create({
    baseURL: 'https://your-api-url.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(config => {
    // Aquí puedes añadir lógica antes de enviar la solicitud
    return config;
}, error => {
    return Promise.reject(error);
});

api.interceptors.response.use(response => {
    // Aquí puedes manejar la respuesta
    return response;
}, error => {
    return Promise.reject(error);
});

export default api;