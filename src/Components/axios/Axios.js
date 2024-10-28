// Create a file like axiosConfig.js (or any name) in your project:

import axios from 'axios';

// Create an instance of axios with the default baseURL
const axiosInstance = axios.create({
  baseURL: 'http://194.164.77.238:8001/api', // Set the default base URL
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2OGM4ZDNhZTQ0YmQ1YjAzZTFmNzFjYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcyOTc2Njg5MX0.SSXQMQM0vdzDnr2f7M7EtIRuEhNbfdLRMh2Sux37N5U`
  }
});
export default axiosInstance;
