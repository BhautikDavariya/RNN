import axios from "axios";

const axiosInt = axios.create({
    baseURL: 'http://localhost:5000/api'
})



axiosInt.interceptors.request.use((req) => {
    const token = localStorage.getItem('token')
    if (token) {
        req.headers['authorization'] = token;
    }
    return req
}, (error) => {
    Promise.reject(error)
})

axiosInt.interceptors.response.use((res) => {
    return res.data
}, (error) => {
    Promise.reject(error)
})

export default axiosInt