import axios from 'axios';

const { REACT_APP_API_URI } = process.env;

export default {
  send: (url, req, type = 'post') => {
    const defaultUrl = REACT_APP_API_URI;
    url = defaultUrl + url;

    return type === 'post' ? axios.post(url, req) : axios.get(url, req);
  },
};
