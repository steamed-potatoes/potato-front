import axios from 'axios';
import { authKey } from 'config';

export default {
  send: (url, req, type = 'post') => {
    const defaultUrl = authKey.apiUrl;
    url = defaultUrl + url;

    return type === 'post' ? axios.post(url, req) : axios.get(url, req);
  },
};
