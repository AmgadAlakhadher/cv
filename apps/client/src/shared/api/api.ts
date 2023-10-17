import axios from 'axios';



const api = axios.create({
    baseURL: `${process.env.REACT_APP_BASE_URL}${process.env.REACT_APP_PORT}`,
    headers: {
        Accept: 'application/json, text/plain, */*',
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