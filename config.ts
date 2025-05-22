const protocol = window.location.protocol;
const https_host = 'https://192.168.0.248/'; 
const http_host = 'http://192.168.0.248/';


export const API_URL = protocol === 'https'? https_host : http_host;

