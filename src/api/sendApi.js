import api from './common';

export default {
  onTest: async (req) => {
    return await api.send('api/test', req, 'post');
  },
  sendGoogleAuth: async (req) => {
    return await api.send('api/v1/auth/google', req, 'post');
  },
  todoAdd: async (req) => {
    return await api.sendTodoAdd('http://52.78.179.189:8080/api/v1/todo', req);
  },
  todoDel: async (id) => {
    return await api.sendTodoDel(
      `http://52.78.179.189:8080/api/v1/todo?todoId=${id}`
    );
  },
  todoList: async () => {
    return await api.getTodoList('http://52.78.179.189:8080/api/v1/todo/list');
  },
};
