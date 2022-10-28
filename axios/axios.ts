import axios from 'axios'

export const axiosBaseUrl = axios.create({
    baseURL: 'https://blog-app-backend-1wzt.onrender.com/'
})