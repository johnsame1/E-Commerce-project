// Create a file like axiosConfig.js (or any name) in your project:

import axios from 'axios';

// Create an instance of axios with the default baseURL
const axiosInstance = axios.create({
  baseURL: 'https://fakestoreapi.com/products', // Set the default base URL
 
});
export default axiosInstance;
