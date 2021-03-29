import axios from 'axios';
import { authKey } from 'config';

export default {
  send: (url, req, type = 'post') => {
    const defaultUrl = authKey.apiUrl;
    url = defaultUrl + url;

    return type === 'post' ? axios.post(url, req) : axios.get(url, req);
  },
  send2: (url, type = 'get') => {
    return type === 'get' ? axios.get(url) : axios.delete(url);
  },
  send3: (url, req, header) => {
    return axios.post(url, req, header);
  },
};
