import axios from 'axios';
const config = require('../Configs/Config.js');

const axiosInstance = axios.create({
    baseURL: config.apiPath + config.apiVersion,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    }
});

export default axiosInstance