import axios from 'axios';
import { AUTH_KEY } from 'constant';

export default {
  send: (url, req, type = 'post') => {
    const defaultUrl = AUTH_KEY.apiUrl;
    url = defaultUrl + url;

    return type === 'post' ? axios.post(url, req) : axios.get(url, req);
  },
};
