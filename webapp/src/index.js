import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

axios.defaults.baseURL = "http://localhost:1028/api/employees";

//intercept requests
axios.interceptors.request.use(request => {
    console.log('Intercepted request, pretend to add authentication here, etc.', request);
    return request;
}, error => {
    console.log('Intercepted request error, throwing error again to allow components to deal with it more' +
    ' specifically.', error);
    return Promise.reject(error);
});

//intercept responses
axios.interceptors.response.use(response => {
    console.log('Intercepted response, pretend to add authentication here, etc.', response);
    return response;
}, error => {
    console.log('Intercepted response error, throwing error again to allow components to deal with it more' +
    ' specifically.', error);
    return Promise.reject(error);
});    

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
