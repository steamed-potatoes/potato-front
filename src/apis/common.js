import axios from 'axios';
import { AUTH_KEY } from 'constant';
import localStorageService from 'libs/localStorageService';

export default {
  send: (url, req, type = 'post') => {
    const defaultUrl = AUTH_KEY.apiUrl;
    url = defaultUrl + url;

    return type === 'post' ? axios.post(url, req) : axios.get(url, req);
  },

  sendAuth: async (url, req, type = 'post') => {
    const defaultUrl = AUTH_KEY.apiUrl;
    url = defaultUrl + url;

    const token = localStorageService.get('authToken');
    console.log(token);
    
    if(token) {
      console.log("token");
      return type === 'post'
        ? axios.post(url, req, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        })
        : axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
    } else {
      console.log("no token");
      return type === 'post' ? axios.post(url, req) : axios.get(url, req);
    }

  }
};
