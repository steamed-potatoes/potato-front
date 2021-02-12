import axios from 'axios';

export default {
  send: (url, req, type = 'post') => {
    const defaultUrl = '';
    url = defaultUrl + url;

    return type === 'post' ? axios.post(url, req) : axios.get(url, req);
  },
};
