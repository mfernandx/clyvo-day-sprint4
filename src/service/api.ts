import axios from 'axios';
import { sessionStorage } from '../security/sessionStorage';

export const api = axios.create({
    baseURL: 'https://clyvo-day-api.azurewebsites.net',
    timeout: 10000,

    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    
    async (config) => {

        const token = await sessionStorage.getToken();

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);