import axios from 'axios'

const http = axios.create = ({
  baseURL: process.env.VITE_APP_URL,
  timeout: 60000,
  changeOrigin: true
})


http.interceptors.request.use(config=> {
  return config
},error=> {
  Promise.reject(error)
})

http.interceptors.response.use(response => {
  console.log('response', response)
  return response;
}, error => {
  return Promise.reject(error);
})

export default http