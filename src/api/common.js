import axios from 'axios';
import { authKey } from 'config';

export default {
  send: (url, req, type = 'post') => {
    const defaultUrl = authKey.apiUrl;
    url = defaultUrl + url;

    return type === 'post' ? axios.post(url, req) : axios.get(url, req);
  },

  sendTodoAdd: (url, req) => {
    return axios.post(url, req);
  },
  sendTodoDel: (url) => {
    return axios.delete(url);
  },

  getTodoList: (url) => {
    return axios.get(url);
  },
};
