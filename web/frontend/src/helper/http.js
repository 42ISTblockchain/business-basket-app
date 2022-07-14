import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

axiosInstance.interceptors.request.use(
    function(config) {
        const token = JSON.parse(localStorage.getItem("auth"))?.tokens;
        if (token)
            config.headers["Authorization"] = 'Bearer ' + token.access_token;
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);

export default axiosInstance