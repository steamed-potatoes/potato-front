import api from './common';

export default {
  onTest: async (req) => {
    return await api.send('api/test', req, 'post');
  },
  sendGoogleAuth: async (req) => {
    return await api.send('api/v1/auth/google', req, 'post');
  },
  getTodoList: async () => {
    return await api.send2('http://52.78.179.189:8080/api/v1/todo/list');
  },
  addTodo: async (req, header) => {
    return await api.send3('http://52.78.179.189:8080/api/v1/todo', req, header);
  },
  deleteTodo: async (id) => {
    return await api.sendDelete(`http://52.78.179.189:8080/api/v1/todo?todoId=${id}`);
  },
};
