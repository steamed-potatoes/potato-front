import api from './common';

export default {
  onTest: async (req) => {
    return await api.send('api/test', req, 'post');
  },
};
