import axios from "axios";

const axiosHelper = axios.create({
    baseURL: 'http://localhost:5000/api'
});

// ✅ Add token to headers before every request
axiosHelper.interceptors.request.use(
    (req) => {
        const token = localStorage.getItem('token');
        if (token) {
            req.headers['authorization'] = token;
        }
        return req;
    },
    (error) => {
        console.log('Request error:', error);
        return Promise.reject(error);
    }
);

// ✅ Handle errors in response
axiosHelper.interceptors.response.use(
    (res) => res,
    (error) => {
        console.log('Response error:', error);
        return Promise.reject(error);
    }
);

export default axiosHelper;
