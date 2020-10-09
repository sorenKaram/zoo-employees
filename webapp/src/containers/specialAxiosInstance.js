import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:1028/api/employees/really/long/or/different/route'
})

instance.defaults.headers.common['Authorization'] = 'My Custom Authorization Header';

export default instance;