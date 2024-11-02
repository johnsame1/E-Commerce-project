// Create a file like axiosConfig.js (or any name) in your project:

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://194.164.77.238:8001/api', // Set the default base URL

});
export default axiosInstance;
