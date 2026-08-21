import axios from 'axios'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {
    'Authorization' : 'Bearer <TOKEN>'
  }

});

api.interceptors.request.use(request => {
  console.log('Starting request : ', request);
  return request;
})


export default api