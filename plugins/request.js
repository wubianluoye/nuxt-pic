// import axios from 'axios'

// const serveice = axios.create = ({
//   baseURL: process.env.VITE_APP_URL,
//   timeout: 60000,
//   changeOrigin: true
// })


// serveice.interceptors.request.use(config=> {
//   return config
// },error=> {
//   Promise.reject(error)
// })

// serveice.interceptors.response.use(response => {
//   console.log('response', response)
//   return response;
// }, error => {
//   return Promise.reject(error);
// })

// export default serveice

export default(({ app, $axios, redirect })=> {

  // $axios.create = ({
  //   baseURL: process.env.VITE_APP_URL,
  //   timeout: 60000,
  //   changeOrigin: true
  // })
  $axios.defaults.baseURL = process.env.BASE_URL
  $axios.defaults.timeout = 60000
  $axios.defaults.changeOrigin = true

  $axios.interceptors.request.use(config=> {
    return config
  },error=> {
    Promise.reject(error)
  })

  $axios.interceptors.response.use(response=> {
    if(response.status !==200) {
      return Promise.reject('未知错误'+response.status)
    }
    return response.data
  }, error => {
    return Promise.reject(error)
  })

})