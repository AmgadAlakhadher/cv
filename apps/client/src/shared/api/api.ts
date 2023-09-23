import axios from 'axios';
import { getAccessToken } from 'entites/Session';



let token = localStorage.getItem("token") || getAccessToken;
const api = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        Accept: 'application/json, text/plain, */*',
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    async config => config,
    error => {
        return Promise.reject(error);
    },
);

api.interceptors.response.use(
    config => {
        const resData = config.data;
        if (resData.error) localStorage.clear();

        return config;
    },
    async error => {
        if(error.toJSON().message === 'Network Error'){
            return Promise.reject("no connection");
        }
        else {
            localStorage.clear();
            return Promise.reject(error);
        }
    },
);

export const $api = api;