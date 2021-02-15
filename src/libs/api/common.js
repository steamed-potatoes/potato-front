import axios from 'axios';
import config from 'config';

export default {
  send: (url, req, type = 'post') => {
    const defaultUrl = config.apiUrl;
    url = defaultUrl + url;

    return type === 'post' ? axios.post(url, req) : axios.get(url, req);
  },
};
